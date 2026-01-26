import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function getAllImageFiles(dir, fileList = []) {
  const files = await readdir(dir);
  
  for (const file of files) {
    const filePath = join(dir, file);
    const fileStat = await stat(filePath);
    
    if (fileStat.isDirectory()) {
      await getAllImageFiles(filePath, fileList);
    } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

async function convertToWebP(imagePath) {
  try {
    const outputPath = imagePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    const fileName = basename(imagePath);
    const outputFileName = basename(outputPath);
    
    // Get original file size
    const originalStats = await stat(imagePath);
    const originalSize = originalStats.size;
    
    // Convert to WebP with quality 85 (good balance between quality and size)
    await sharp(imagePath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);
    
    // Get new file size
    const newStats = await stat(outputPath);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✓ ${fileName} → ${outputFileName} (${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB, ${savings}% smaller)`);
    
    return { originalSize, newSize, savings };
  } catch (error) {
    console.error(`✗ Error converting ${imagePath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('Starting image conversion to WebP...\n');
  
  const publicDir = join(__dirname, 'public');
  const srcAssetsDir = join(__dirname, 'src', 'assets');
  
  const imageFiles = [];
  
  // Get images from public directory
  try {
    const publicImages = await getAllImageFiles(publicDir);
    imageFiles.push(...publicImages);
  } catch (error) {
    console.warn('Warning: Could not read public directory:', error.message);
  }
  
  // Get images from src/assets directory
  try {
    const srcImages = await getAllImageFiles(srcAssetsDir);
    imageFiles.push(...srcImages);
  } catch (error) {
    console.warn('Warning: Could not read src/assets directory:', error.message);
  }
  
  if (imageFiles.length === 0) {
    console.log('No images found to convert.');
    return;
  }
  
  console.log(`Found ${imageFiles.length} images to convert.\n`);
  
  let totalOriginalSize = 0;
  let totalNewSize = 0;
  
  for (const imagePath of imageFiles) {
    const result = await convertToWebP(imagePath);
    if (result) {
      totalOriginalSize += result.originalSize;
      totalNewSize += result.newSize;
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('Conversion complete!');
  console.log(`Total: ${(totalOriginalSize / 1024).toFixed(1)}KB → ${(totalNewSize / 1024).toFixed(1)}KB`);
  console.log(`Overall savings: ${((totalOriginalSize - totalNewSize) / totalOriginalSize * 100).toFixed(1)}%`);
  console.log('='.repeat(60));
}

main().catch(console.error);

