# Unused Files and Components Analysis

**Analysis Date:** Generated automatically  
**Project:** MicroCraft  
**Analysis Scope:** Complete directory structure including components, pages, and public folder assets

---

## 📋 Summary

This document lists all unused files, components, and assets found in the MicroCraft project after comprehensive analysis of:

- All React components and their imports
- All page files and their component usage
- All public folder assets and their references
- Routing configuration in App.tsx
- Navigation structure including **Sectors** and **Resources** sections (currently marked as "Coming Soon")

---

## 🚫 Unused Components

### 1. `src/components/home/StatsSection.tsx`

- **Status:** ❌ UNUSED
- **Location:** `src/components/home/StatsSection.tsx`
- **Details:**
  - Component exists but is never imported in any page file
  - Not used in Home.tsx or any other page
  - Contains stats display functionality that appears to be unused

---

## 🖼️ Unused Public Folder Assets

### Images Not Referenced in Code

#### 1. `public/ai-automation-features.png`

- **Status:** ❌ UNUSED
- **Details:** No references found in any component files
- **Note:** AI Automation page uses other images but not this specific one

#### 2. `public/ai-automation-hero.png`

- **Status:** ❌ UNUSED
- **Details:** No references found in any component files
- **Note:** AIAutomationHero component doesn't reference this image

#### 3. `public/ComprehensiveServices.png`

- **Status:** ❌ UNUSED
- **Details:**
  - ComprehensiveServicesSection component exists and is used
  - However, it uses Unsplash images instead of this local asset
  - File exists but is never referenced in code

#### 4. `public/dashboard.png`

- **Status:** ❌ UNUSED
- **Details:**
  - Multiple components mention "dashboard" in text/descriptions
  - But no component actually references `/dashboard.png` image file
  - Dashboard visualizations are created using CSS/JSX, not this image

#### 5. `public/Oracle.png`

- **Status:** ❌ UNUSED
- **Details:**
  - LogoMarquee component lists multiple integration logos
  - Oracle is not included in the logo list
  - File exists but is never used

#### 6. `public/vite.svg`

- **Status:** ❌ UNUSED
- **Details:**
  - Default Vite logo file
  - Not referenced anywhere in the application
  - Only vite.svg in dist folder is used (build artifact)

### Documents Not Referenced

#### 7. `public/🔧 Custom Sales Pipelines & Stages.pdf`

- **Status:** ❌ UNUSED
- **Details:**
  - PDF file exists in public folder
  - No references found in any component files
  - Simulator.tsx mentions "Q3 Case Study.pdf" but that's just text, not a file reference
  - This PDF is never linked or imported

##### 📄 Detailed PDF Analysis

**File Metadata:**

- **Title:** Custom Sales Pipelines & Stages
- **Author:** Prajakta Chafle
- **Creator/Software:** Canva
- **Creation Date:** December 27, 2025, 20:13:24 UTC
- **Modification Date:** December 27, 2025, 20:13:23 UTC
- **Language:** English (en)
- **Total Pages:** 7 pages
- **Page Size:** A4 (595.5 x 841.92 points)
- **File Format:** PDF 1.4

**Content Analysis:**

- The PDF appears to be a document about custom sales pipelines and stages
- Created using Canva design tool
- Contains structured content with figures, text elements, and visual components
- Document structure includes:
  - Multiple page layouts
  - Embedded fonts (F4, F5, F6, F9, F13, F14)
  - Image/graphic elements (Figure objects)
  - Text content (NonStruct elements)
  - Structured document tree

**Usage Status:**

- ❌ **Not referenced in codebase** - No component imports or links to this PDF
- ❌ **Not linked in any page** - No download buttons or document links found
- ❌ **Not used in routing** - No route serves this document
- ⚠️ **Potential Use Case:** This appears to be a sales/marketing document that could be:
  - Linked from a case studies page
  - Used as a downloadable resource
  - Referenced in CRM management documentation
  - Included in a resources/downloads section

**Recommendations:**

1. **If intended for use:**

   - Add a download link in the CRM Management page
   - Include it in a resources/documentation section
   - Link it from the Case Studies page if relevant
   - **Create a dedicated "Resources" page** - The Header navigation already has a "Resources" menu item (currently marked as "comingSoon") with dropdown items like "ONDC Guide", "WhatsApp Templates", "Migration Guide". This PDF could be added as a resource when the Resources page is implemented.

2. **If not needed:**

   - Remove the file to reduce project size
   - Archive it if it might be needed in the future

3. **File Naming Note:**
   - The emoji (🔧) in the filename may cause issues in some systems
   - Consider renaming to: `Custom-Sales-Pipelines-Stages.pdf` if keeping the file

**Related Navigation Items:**

- The Header component (`src/components/Header.tsx`) includes a "Resources" navigation menu (line 43) that is currently marked as `comingSoon: true`
- The Resources dropdown includes: "ONDC Guide", "WhatsApp Templates", "Migration Guide"
- This PDF could be a perfect fit for the Resources section when it's implemented

---

## ✅ Used Public Folder Assets

The following assets **ARE** being used and should **NOT** be deleted:

- ✅ `logo.png` - Used in Header.tsx, Footer.tsx, and index.html favicon
- ✅ `Adobe.png` - Used in LogoMarquee.tsx
- ✅ `IBM.png` - Used in LogoMarquee.tsx
- ✅ `MongoDB.png` - Used in LogoMarquee.tsx
- ✅ `Salesforce.png` - Used in LogoMarquee.tsx
- ✅ `Sap.png` - Used in LogoMarquee.tsx
- ✅ `Shopify.png` - Used in LogoMarquee.tsx
- ✅ `Workday.png` - Used in LogoMarquee.tsx
- ✅ `Zendesk.png` - Used in LogoMarquee.tsx
- ✅ `Crm.png` - Used in CrmImageSection.tsx
- ✅ `Advantages.png` - Used in AdvantagesSection.tsx
- ✅ `CustomerRelations.png` - Used in CustomerRelationsSection.tsx
- ✅ `Colleagues.png` - Used in AIColleaguesSection.tsx
- ✅ `Architecture.png` - Used in AIColleaguesSection.tsx
- ✅ `SecurityStandards.png` - Used in TrustAndIntegrationsSection.tsx
- ✅ `Integrations.png` - Used in TrustAndIntegrationsSection.tsx
- ✅ `system.png` - Used in AIAutomationIntegration.tsx
- ✅ `business-growth.png` - Used in AIAutomationBenefits.tsx

---

## 📊 Statistics

- **Total Components Analyzed:** 50+ React components
- **Total Pages Analyzed:** 7 pages (Home, AIAutomation, Analytics, CaseStudies, CrmManagement, DigitalCommerce, Integration)
- **Total Public Assets:** 25 files
- **Unused Components:** 1
- **Unused Public Assets:** 7
- **Used Public Assets:** 18

## 🔗 Navigation Structure Analysis

### Sectors Section

- **Status:** ⚠️ **Coming Soon** (not yet implemented)
- **Location:** `src/components/Header.tsx` (line 29)
- **Details:**
  - Navigation menu item exists with dropdown options
  - Currently marked as `comingSoon: true`
  - Dropdown includes: Manufacturing, Food & Hospitality, Healthcare, Services, Logistics, Agriculture
  - **Related Component:** `SectorWorkflows` component exists and is used in CaseStudies page
  - `SectorWorkflows` displays industry-specific workflows for:
    - Restaurants & QSR (Food & Hospitality)
    - Retail & Pharmacy
    - Manufacturing
  - The sectors data is defined in `src/components/case-studies/SectorWorkflows.tsx` (line 18)

### Resources Section

- **Status:** ⚠️ **Coming Soon** (not yet implemented)
- **Location:** `src/components/Header.tsx` (line 43)
- **Details:**
  - Navigation menu item exists with dropdown options
  - Currently marked as `comingSoon: true`
  - Dropdown includes: "ONDC Guide", "WhatsApp Templates", "Migration Guide"
  - **Potential Use:** The unused PDF (`🔧 Custom Sales Pipelines & Stages.pdf`) could be added to this Resources section when implemented
  - No dedicated Resources page or route exists yet

---

## 🔍 Analysis Methodology

1. **Component Analysis:**

   - Checked all imports in App.tsx and all page files
   - Traced component usage through the component tree
   - Verified exports and imports match

2. **Asset Analysis:**

   - Searched all `.tsx` and `.ts` files for image references
   - Checked for both direct paths (`/image.png`) and dynamic imports
   - Verified public folder structure matches references

3. **Routing Analysis:**
   - Verified all routes in App.tsx are connected to pages
   - Confirmed all pages import their required components

---

## 💡 Recommendations

1. **Remove Unused Components:**

   - Consider removing `StatsSection.tsx` if it's not planned for future use
   - Or integrate it into the Home page if it was intended to be used

2. **Clean Up Public Folder:**

   - Remove unused image files to reduce bundle size
   - Remove unused PDF document
   - Keep `vite.svg` only if needed for future Vite branding

3. **Potential Issues:**

   - `ComprehensiveServices.png` might have been intended for `ComprehensiveServicesSection` but was replaced with Unsplash images
   - Consider if `dashboard.png` was meant to be used in dashboard visualizations

4. **Future Implementation Opportunities:**
   - **Sectors Page:** The navigation includes a "Sectors" menu with dropdown options (Manufacturing, Food & Hospitality, Healthcare, Services, Logistics, Agriculture). The `SectorWorkflows` component already exists and could be expanded into a full Sectors page.
   - **Resources Page:** The navigation includes a "Resources" menu with dropdown options (ONDC Guide, WhatsApp Templates, Migration Guide). The unused PDF (`🔧 Custom Sales Pipelines & Stages.pdf`) could be added here when the Resources page is implemented.

---

## ⚠️ Important Notes

- **Before deleting any files, ensure:**

  - They are not referenced dynamically (runtime imports)
  - They are not used in build processes
  - They are not referenced in external documentation
  - Backup important files before deletion

- **Files in `dist/` folder:**
  - These are build artifacts and should not be manually edited
  - They are regenerated on each build

---

## 📝 File Reference Map

### Component Usage Tree

```
App.tsx
├── Home.tsx
│   ├── Hero
│   ├── LogoMarquee
│   ├── AIColleaguesSection
│   ├── ProductTrio
│   ├── TrustAndIntegrationsSection
│   ├── Simulator
│   ├── Pricing
│   └── Testimonial
├── CrmManagement.tsx
│   ├── CrmEngagementHero
│   ├── CrmImageSection
│   ├── CustomerRelationsSection
│   ├── AdvantagesSection
│   ├── ComprehensiveServicesSection
│   └── SuccessStoriesSection
├── AIAutomation.tsx
│   ├── AIAutomationHero
│   ├── AIAutomationFeatures
│   ├── AIAutomationUseCases
│   ├── AIAutomationBenefits
│   └── AIAutomationIntegration
├── DigitalCommerce.tsx
│   ├── ImpactSection
│   ├── DigitalMarketingDashboard
│   ├── ContentMarketingSection
│   ├── BusinessPlanningSection
│   ├── SolutionsSection
│   └── AchievementsAndFAQ
├── Analytics.tsx
│   ├── AnalyticsSection
│   ├── FeaturesSection
│   ├── IntegrationsSection
│   └── Testimonial
├── CaseStudies.tsx
│   ├── CaseStudyHero
│   ├── FeaturedCases
│   ├── SectorWorkflows
│   └── Testimonial
└── Integration.tsx
    ├── IntegrationsHero
    ├── IntegrationDirectory
    ├── MigrationSection
    └── FinalLaunchpad

Global Components:
├── Header
├── Footer
├── TopStrip
├── ScrollToTop
└── LoadingIndicator

UNUSED:
└── StatsSection ❌
```

---

**End of Analysis**
