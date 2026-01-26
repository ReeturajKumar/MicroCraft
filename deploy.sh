#!/bin/bash

###############################################################################
# AWS S3 + CloudFront Deployment Script
# 
# This script builds and deploys a frontend application to AWS S3 and
# invalidates the CloudFront cache.
#
# Prerequisites:
# - AWS CLI installed and configured
# - S3 bucket exists and is configured for static hosting or OAC/OAI
# - CloudFront distribution exists and points to the S3 bucket
# - npm/node installed
#
# Usage:
#   ./deploy.sh [environment]
#   ./deploy.sh dev
#   ./deploy.sh stage
#   ./deploy.sh prod
#
# Or set environment variables:
#   ENV=prod ./deploy.sh
###############################################################################

# Exit immediately if a command exits with a non-zero status
set -e

# Enable error trapping for better error messages
set -o pipefail

###############################################################################
# Configuration Variables
# Modify these values according to your AWS setup
###############################################################################

# Default environment (can be overridden by command line argument or ENV variable)
ENVIRONMENT="${1:-${ENV:-prod}}"

# AWS Configuration
# Set these based on your environment or use environment-specific configs below
S3_BUCKET_NAME="${S3_BUCKET_NAME:-your-bucket-name}"
CLOUDFRONT_DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID:-your-distribution-id}"
AWS_REGION="${AWS_REGION:-us-east-1}"

# Build Configuration
BUILD_DIR="${BUILD_DIR:-dist}"

# Environment-specific overrides (optional)
# Uncomment and modify these if you need different configs per environment
# case "$ENVIRONMENT" in
#   dev)
#     S3_BUCKET_NAME="${S3_BUCKET_NAME_DEV:-your-dev-bucket}"
#     CLOUDFRONT_DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID_DEV:-your-dev-distribution-id}"
#     ;;
#   stage)
#     S3_BUCKET_NAME="${S3_BUCKET_NAME_STAGE:-your-stage-bucket}"
#     CLOUDFRONT_DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID_STAGE:-your-stage-distribution-id}"
#     ;;
#   prod)
#     S3_BUCKET_NAME="${S3_BUCKET_NAME_PROD:-your-prod-bucket}"
#     CLOUDFRONT_DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID_PROD:-your-prod-distribution-id}"
#     ;;
#   *)
#     echo "Error: Unknown environment '$ENVIRONMENT'. Use: dev, stage, or prod"
#     exit 1
#     ;;
# esac

###############################################################################
# Validation
###############################################################################

echo "=========================================="
echo "Starting deployment to $ENVIRONMENT"
echo "=========================================="
echo "S3 Bucket: $S3_BUCKET_NAME"
echo "CloudFront Distribution: $CLOUDFRONT_DISTRIBUTION_ID"
echo "AWS Region: $AWS_REGION"
echo "Build Directory: $BUILD_DIR"
echo ""

# Validate required variables
if [ -z "$S3_BUCKET_NAME" ] || [ "$S3_BUCKET_NAME" = "your-bucket-name" ]; then
  echo "Error: S3_BUCKET_NAME is not set or is using default value"
  exit 1
fi

if [ -z "$CLOUDFRONT_DISTRIBUTION_ID" ] || [ "$CLOUDFRONT_DISTRIBUTION_ID" = "your-distribution-id" ]; then
  echo "Error: CLOUDFRONT_DISTRIBUTION_ID is not set or is using default value"
  exit 1
fi

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
  echo "Error: AWS CLI is not installed. Please install it first."
  exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
  echo "Error: npm is not installed. Please install Node.js and npm first."
  exit 1
fi

# Verify AWS credentials are configured
if ! aws sts get-caller-identity &> /dev/null; then
  echo "Error: AWS credentials are not configured. Run 'aws configure' first."
  exit 1
fi

###############################################################################
# Step 1: Install Dependencies
###############################################################################

echo "[1/5] Installing dependencies..."
if [ -f "package-lock.json" ]; then
  npm ci
else
  npm install
fi
echo "✓ Dependencies installed"
echo ""

###############################################################################
# Step 2: Build the Application
###############################################################################

echo "[2/5] Building application..."
npm run build

# Verify build directory exists
if [ ! -d "$BUILD_DIR" ]; then
  echo "Error: Build directory '$BUILD_DIR' does not exist after build"
  exit 1
fi

# Check if build directory is empty
if [ -z "$(ls -A $BUILD_DIR)" ]; then
  echo "Error: Build directory '$BUILD_DIR' is empty"
  exit 1
fi

echo "✓ Build completed successfully"
echo ""

###############################################################################
# Step 3: Sync Files to S3 with Cache Headers
###############################################################################

echo "[3/5] Syncing files to S3 bucket: $S3_BUCKET_NAME..."

# Sync static assets with aggressive caching (1 year)
# These are typically JS, CSS, images, fonts, etc. with hashed filenames
echo "  → Uploading static assets with long-term cache..."
aws s3 sync "$BUILD_DIR" "s3://$S3_BUCKET_NAME" \
  --region "$AWS_REGION" \
  --delete \
  --exclude "*.html" \
  --exclude "*.json" \
  --cache-control "public, max-age=31536000, immutable" \
  --metadata-directive REPLACE

# Sync HTML files with no-cache (for index.html and other HTML files)
# This ensures users always get the latest HTML which references the latest assets
echo "  → Uploading HTML files with no-cache..."
aws s3 sync "$BUILD_DIR" "s3://$S3_BUCKET_NAME" \
  --region "$AWS_REGION" \
  --delete \
  --include "*.html" \
  --cache-control "public, max-age=0, must-revalidate" \
  --metadata-directive REPLACE

# Sync JSON files (like manifest.json) with short cache
echo "  → Uploading JSON files with short cache..."
aws s3 sync "$BUILD_DIR" "s3://$S3_BUCKET_NAME" \
  --region "$AWS_REGION" \
  --delete \
  --include "*.json" \
  --cache-control "public, max-age=3600" \
  --metadata-directive REPLACE

echo "✓ Files synced to S3"
echo ""

###############################################################################
# Step 4: Verify S3 Upload
###############################################################################

echo "[4/5] Verifying S3 upload..."
FILE_COUNT=$(aws s3 ls "s3://$S3_BUCKET_NAME" --recursive --region "$AWS_REGION" | wc -l | tr -d ' ')
echo "  → Found $FILE_COUNT files in S3 bucket"
echo "✓ S3 upload verified"
echo ""

###############################################################################
# Step 5: Invalidate CloudFront Cache
###############################################################################

echo "[5/5] Invalidating CloudFront cache..."
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
  --paths "/*" \
  --region "$AWS_REGION" \
  --query 'Invalidation.Id' \
  --output text)

if [ -z "$INVALIDATION_ID" ]; then
  echo "Error: Failed to create CloudFront invalidation"
  exit 1
fi

echo "  → Invalidation created: $INVALIDATION_ID"
echo "  → This may take 5-15 minutes to complete"
echo "✓ CloudFront invalidation initiated"
echo ""

###############################################################################
# Deployment Complete
###############################################################################

echo "=========================================="
echo "Deployment completed successfully!"
echo "=========================================="
echo "Environment: $ENVIRONMENT"
echo "S3 Bucket: $S3_BUCKET_NAME"
echo "CloudFront Distribution: $CLOUDFRONT_DISTRIBUTION_ID"
echo "Invalidation ID: $INVALIDATION_ID"
echo ""
echo "Your changes will be live once CloudFront finishes invalidating the cache."
echo "Monitor invalidation status with:"
echo "  aws cloudfront get-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --id $INVALIDATION_ID"
echo ""

