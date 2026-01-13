# Adding New Case Study Pages - Step-by-Step Guide

This guide provides detailed instructions for adding new case study pages to the portfolio website.

---

## Prerequisites

Before adding a new case study, ensure you have:
- ✅ Project completed and documented
- ✅ Project images prepared (card image + 4 visual evidence images)
- ✅ Project data collected (metrics, technologies, methods, stakeholders, etc.)
- ✅ Demo/GitHub/LinkedIn links ready (if applicable)

---

## Option A: After Full Refactor (Recommended)

If the project has been refactored with reusable components and data-driven approach:

### Step 1: Prepare Project Assets

#### 1.1 Create Project Folder
```bash
cd public/projects
mkdir "Your Project Name"
mkdir "Your Project Name/figures"
```

#### 1.2 Add Images
Required images:
- **Card image**: `your-project-name.png` (goes in `/public/projects/`)
- **Visual evidence**: 4 images showing project outputs (goes in `/public/projects/Your Project Name/figures/`)

```bash
# Copy your card image
cp ~/path/to/card-image.png public/projects/your-project-name.png

# Copy visual evidence images
cp ~/path/to/image1.png "public/projects/Your Project Name/figures/analysis-1.png"
cp ~/path/to/image2.png "public/projects/Your Project Name/figures/analysis-2.png"
cp ~/path/to/image3.png "public/projects/Your Project Name/figures/analysis-3.png"
cp ~/path/to/image4.png "public/projects/Your Project Name/figures/analysis-4.png"
```

**Image Requirements:**
- Format: PNG or JPG
- Card image: ~800x600px recommended
- Visual evidence: Any size, but consistent dimensions preferred
- File size: < 500KB per image (optimize if needed)

---

### Step 2: Create Case Study Data File

#### 2.1 Copy Template
```bash
cd src/data/caseStudies
cp spare-parts-anomaly.json your-project-slug.json
```

#### 2.2 Edit JSON File
Open `your-project-slug.json` and update all fields:

```json
{
  "id": 8,  // Next available ID
  "slug": "your-project-slug",
  "title": "Your Project Title",
  "subtitle": "One-line business value statement",
  
  "keyImpact": [
    {
      "value": "+25%",
      "label": "Efficiency Gain",
      "description": "Brief explanation",
      "icon": "TrendingUp"
    },
    {
      "value": "USD 120K",
      "label": "Annual Savings",
      "description": "Cost reduction achieved",
      "icon": "DollarSign"
    },
    {
      "value": "5000 Items",
      "label": "Scope",
      "description": "Number of items analyzed",
      "icon": "Database"
    }
  ],
  
  "sections": {
    "overview": "3-4 sentence description. Explain what the project does, what problem it solves, and the operational context. Focus on business value, not technical details.",
    
    "businessValue": [
      "First business benefit - focus on impact",
      "Second business benefit - what changed",
      "Third business benefit - why it matters"
    ],
    
    "keyResults": [
      "Achieved XX% improvement in metric",
      "Reduced YY by ZZ units/dollars/percent",
      "Enabled new capability or process"
    ],
    
    "benefits": [
      "Technical or operational benefit 1",
      "Scalability or reusability benefit",
      "Process improvement or automation"
    ],
    
    "stakeholders": [
      "Team/Department 1",
      "Team/Department 2",
      "Team/Department 3"
    ],
    
    "technologies": [
      "Python",
      "Pandas",
      "Technology3",
      "Technology4"
    ],
    
    "methods": [
      {
        "name": "Method Name",
        "description": "One-line explanation of what this method does"
      },
      {
        "name": "Algorithm/Technique",
        "description": "Why this was used and what it accomplishes"
      }
    ],
    
    "visualEvidence": [
      {
        "image": "/rolando-portfolio-page/projects/Your Project Name/figures/analysis-1.png",
        "caption": "Descriptive caption for first visualization"
      },
      {
        "image": "/rolando-portfolio-page/projects/Your Project Name/figures/analysis-2.png",
        "caption": "Descriptive caption for second visualization"
      },
      {
        "image": "/rolando-portfolio-page/projects/Your Project Name/figures/analysis-3.png",
        "caption": "Descriptive caption for third visualization"
      },
      {
        "image": "/rolando-portfolio-page/projects/Your Project Name/figures/analysis-4.png",
        "caption": "Descriptive caption for fourth visualization"
      }
    ]
  },
  
  "links": {
    "demo": "https://your-demo-url.com",     // or null if no demo
    "github": "https://github.com/...",      // or null if no repo
    "notion": null,                           // deprecated, use null
    "linkedin": "https://linkedin.com/in/sjrolando"
  }
}
```

**Available Icons for keyImpact:**
- `TrendingUp` / `TrendingDown` - For metrics going up/down
- `DollarSign` - For savings/revenue
- `Factory` / `Database` / `Server` - For scope indicators
- `Activity` - For processes
- `Shield` - For quality/reliability
- `Brain` - For ML/AI projects

---

### Step 3: Create Page Component

#### 3.1 Create Component File
```bash
cd src/pages/case-studies
touch YourProjectPage.tsx
```

#### 3.2 Add Component Code
```tsx
import CaseStudyTemplate from './CaseStudyTemplate';
import data from '@/data/caseStudies/your-project-slug.json';

export default function YourProjectPage() {
  return <CaseStudyTemplate data={data} />;
}
```

That's it! The template handles all the sections automatically.

---

### Step 4: Register Route

#### 4.1 Update Router Configuration
Open `src/pages/case-studies/CaseStudyRouter.tsx` and add your project:

```tsx
import YourProjectPage from './YourProjectPage';

const caseStudyMap = {
  'spare-parts-anomaly-detection': SparePartsAnomalyPage,
  'your-project-slug': YourProjectPage,  // Add this line
  // ...
};
```

---

### Step 5: Update Project Card Data

#### 5.1 Edit userData.json
Open `src/data/userData.json` and add your project to the `projects` array:

```json
{
  "id": 8,
  "title": "Your Project Title",
  "description": "Card description (2-3 sentences for the project card preview)",
  "image": "/rolando-portfolio-page/projects/your-project-name.png",
  "technologies": [
    "Python",
    "Pandas",
    "Technology3"
  ],
  "category": "Machine Learning",  // or "Anomaly Detection", "Supply Chain Analytics", etc.
  "results": [
    "Key result 1 for card display",
    "Key result 2 for card display"
  ],
  "github": "https://github.com/...",  // optional
  "demo": "https://...",               // optional
  "notion": null                        // will be replaced by internal link
}
```

**Available Categories:**
- `Machine Learning`
- `Anomaly Detection`
- `Time Series`
- `Operations Analytics`
- `Statistical Analysis`
- `Supply Chain Analytics`

---

### Step 6: Update Projects Component

#### 6.1 Add routing logic
Open `src/components/sections/Projects.tsx`:

Find the section where project id 3 has special routing logic and add yours:

```tsx
{project.id === 3 && (
  <Link to="/projects/spare-parts-anomaly-detection" ...>
    Case Study
  </Link>
)}
{project.id === 8 && (  // Add this for your new project
  <Link to="/projects/your-project-slug" ...>
    Case Study
  </Link>
)}
```

**OR if using generic logic**, update to:

```tsx
{[3, 8].includes(project.id) && (  // Add your project ID
  <Link to={`/projects/${getProjectSlug(project.id)}`} ...>
    Case Study
  </Link>
)}
```

---

### Step 7: Test Your Case Study

#### 7.1 Start Dev Server
```bash
npm run dev
```

#### 7.2 Verify Navigation
1. Open http://localhost:5173/rolando-portfolio-page/
2. Scroll to Projects section
3. Find your new project card
4. Click "Case Study" button
5. Verify:
   - ✅ Page loads without errors
   - ✅ All sections display correctly
   - ✅ All 3 key impact cards show
   - ✅ All 4 images load
   - ✅ Technologies display as pills
   - ✅ Links work (demo, GitHub, LinkedIn)
   - ✅ "Back to Portfolio" returns home
   - ✅ Header links work from case study page

#### 7.3 Test Theme Toggle
1. On case study page, click theme toggle
2. Verify both light and dark themes render correctly
3. Check text contrast and readability

#### 7.4 Test Browser Navigation
1. Use browser back button from case study
2. Click case study again
3. Verify images still load (no broken paths)

---

### Step 8: Commit Changes

```bash
git add public/projects/your-project-name.png
git add "public/projects/Your Project Name/"
git add src/data/caseStudies/your-project-slug.json
git add src/pages/case-studies/YourProjectPage.tsx
git add src/pages/case-studies/CaseStudyRouter.tsx
git add src/data/userData.json
git add src/components/sections/Projects.tsx

git commit -m "feat: add case study page for Your Project Name"
git push
```

---

## Option B: Before Refactor (Current Structure)

If you need to add a case study before the refactor is complete:

### Step 1: Prepare Assets (Same as Option A)
Follow Step 1 from Option A to add images.

---

### Step 2: Create Case Study Component

#### 2.1 Copy Existing Component
```bash
cd src/components
cp SparePartsAnomalyCaseStudy.tsx YourProjectCaseStudy.tsx
```

#### 2.2 Edit Component File

Open `YourProjectCaseStudy.tsx` and update:

**Line 6-28: Update keyImpactMetrics**
```tsx
const keyImpactMetrics = [
  {
    icon: TrendingUp,  // Change icon
    value: '+25%',     // Your metric
    label: 'Efficiency Gain',
    description: 'Your description'
  },
  // ... update all 3 metrics
];
```

**Line 30-37: Update technologies**
```tsx
const technologies = [
  'Python',
  'YourTech1',
  'YourTech2',
  // ...
];
```

**Line 39-65: Update methods**
```tsx
const methods = [
  {
    name: 'Your Method',
    description: 'What it does'
  },
  // ...
];
```

**Line 67-81: Update visualEvidence**
```tsx
const visualEvidence = [
  {
    image: '/rolando-portfolio-page/projects/Your Project Name/figures/image1.png',
    caption: 'Your caption'
  },
  // ... 4 total images
];
```

**Line 104-106: Update hero section**
```tsx
<h1>Your Project Title</h1>
<p>Your subtitle</p>
```

**Line 154-156: Update overview**
```tsx
<p>Your project overview (3-4 sentences)</p>
```

**Line 163-181: Update all content sections**
- Business Value (lines 163-175)
- Key Results (lines 183-199)
- Key Benefits (lines 207-219)
- Stakeholders (lines 227-231)
- Methods & Algorithms (already in data)
- Visual Evidence (already in data)

**Line 338-350: Update access links**
```tsx
<a href="your-demo-url">Demo App</a>
<a href="your-github-url">GitHub</a>
```

---

### Step 3: Update App.tsx Routing

Open `src/App.tsx` and add a new route:

```tsx
<Route path="/projects/your-project-slug" element={
  <>
    <Header />
    <YourProjectCaseStudy />
    <Footer />
  </>
} />
```

**Important:** Add the import at the top:
```tsx
import YourProjectCaseStudy from './components/YourProjectCaseStudy';
```

---

### Step 4: Update userData.json
(Same as Step 5 from Option A)

Add your project to the `projects` array in `src/data/userData.json`.

---

### Step 5: Update Projects.tsx
(Same as Step 6 from Option A)

Add routing logic for your project ID.

---

### Step 6: Test & Commit
(Same as Steps 7-8 from Option A)

---

## Quick Reference: File Checklist

Use this checklist when adding a new case study:

### Assets
- [ ] Card image in `/public/projects/your-project-name.png`
- [ ] Project folder created: `/public/projects/Your Project Name/`
- [ ] 4 visual evidence images in `/public/projects/Your Project Name/figures/`

### Code Files (Option A - After Refactor)
- [ ] Case study data: `/src/data/caseStudies/your-project-slug.json`
- [ ] Page component: `/src/pages/case-studies/YourProjectPage.tsx`
- [ ] Router updated: `/src/pages/case-studies/CaseStudyRouter.tsx`
- [ ] Project card data: `/src/data/userData.json` (projects array)
- [ ] Link routing: `/src/components/sections/Projects.tsx`

### Code Files (Option B - Before Refactor)
- [ ] Component: `/src/components/YourProjectCaseStudy.tsx`
- [ ] Route: `/src/App.tsx`
- [ ] Project card data: `/src/data/userData.json`
- [ ] Link routing: `/src/components/Projects.tsx`

### Testing
- [ ] Dev server runs without errors
- [ ] Card displays in Projects section
- [ ] Case Study button navigates correctly
- [ ] All sections render properly
- [ ] All images load
- [ ] Links work (demo, GitHub, LinkedIn)
- [ ] Theme toggle works
- [ ] Browser navigation works
- [ ] No console errors

---

## Common Issues & Solutions

### Issue: Images not loading
**Solution:** Check that image paths use absolute paths with basename:
```
❌ "./projects/image.png"
✅ "/rolando-portfolio-page/projects/image.png"
```

### Issue: Case Study button not appearing
**Solution:** Ensure project ID is added to routing logic in Projects.tsx

### Issue: Route not found
**Solution:** 
1. Check slug matches exactly in route and link
2. Verify import path is correct in App.tsx or CaseStudyRouter.tsx
3. Clear browser cache and refresh

### Issue: Icons not rendering in Key Impact cards
**Solution:** Verify icon name is imported from lucide-react:
```tsx
import { TrendingUp, DollarSign, Factory } from 'lucide-react';
```

### Issue: Styling looks different
**Solution:** Ensure you're using the same Tailwind classes as the template

---

## Content Writing Tips

### Hero Subtitle
- ✅ "Detecting abnormal usage to prevent downtime"
- ❌ "An analysis of consumption patterns using Python"

### Overview
- Start with "This project..."
- 3-4 sentences, no more
- Business context, not technical details
- Focus on problem → solution → impact

### Business Value
- Write for HR/managers, not technical leads
- Each bullet should answer "So what?"
- Avoid jargon like "EWMA" or "Z-score"

### Key Results
- Must be quantifiable
- Include numbers: percentages, dollars, units
- Use bold for the metric: `**USD 58K**`

### Methods
- Technical audience can skim this
- One line per method
- Format: "Method Name – what it does"

### Visual Evidence Captions
- ✅ "Consumption Peaks – Dispatch vs Trend Analysis"
- ❌ "newplot2-edit.png"

---

## Time Estimate

**Option A (After Refactor):** ~15-30 minutes per case study
- 5 min: Prepare images
- 5 min: Create/edit JSON file
- 3 min: Create page component
- 2 min: Update routing
- 5 min: Update userData.json
- 5-10 min: Testing

**Option B (Before Refactor):** ~1-2 hours per case study
- 10 min: Prepare images
- 30-60 min: Copy and customize component
- 5 min: Update routing
- 5 min: Update userData.json
- 10-20 min: Testing and fixing issues

---

## Need Help?

If you encounter issues:
1. Check browser console for error messages
2. Verify all file paths are absolute
3. Ensure all imports are correct
4. Compare your code with the Spare Parts case study
5. Check that all JSON is valid (no trailing commas!)
6. Clear browser cache and hard reload (Ctrl+Shift+R)

---

**Last Updated:** 2026-01-13  
**For questions or improvements to this guide, contact:** sj.rolando@gmail.com
