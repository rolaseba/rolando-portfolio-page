# Adding New Case Study Pages - Step-by-Step Guide

This guide provides detailed instructions for adding new case study pages to the portfolio website using the data-driven template system.

---

## Prerequisites

Before adding a new case study, ensure you have:
- ✅ Project completed and documented
- ✅ Project images prepared (card image + 4 visual evidence images)
- ✅ Project data collected (metrics, technologies, methods, stakeholders, etc.)
- ✅ Demo/GitHub/LinkedIn links ready (if applicable)

---

## Step 1: Prepare Project Assets

### 1.1 Create Project Folder
```bash
cd public/projects
mkdir "Your Project Name"
mkdir "Your Project Name/figures"
```

### 1.2 Add Images
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

## Step 2: Create Case Study Data File

### 2.1 Copy Template
```bash
cd src/data/caseStudies
cp spare-parts-anomaly.json your-project-slug.json
```

### 2.2 Edit JSON File
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
      "Achieved **XX%** improvement in metric",
      "Reduced YY by **ZZ** units/dollars/percent",
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
    "notion": null,                           // deprecated, always null
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

## Step 3: Create Page Component

### 3.1 Create Component File
```bash
cd src/pages/case-studies
touch YourProjectPage.tsx
```

### 3.2 Add Component Code
```tsx
import CaseStudyTemplate from './CaseStudyTemplate';
import data from '../../data/caseStudies/your-project-slug.json';

export default function YourProjectPage() {
  return <CaseStudyTemplate data={data} />;
}
```

That's it! The template handles all the sections automatically.

---

## Step 4: Add Route to App.tsx

### 4.1 Update App.tsx
Open `src/App.tsx` and add your new route:

```tsx
import YourProjectPage from './pages/case-studies/YourProjectPage';

// Inside <Routes>:
<Route path="/projects/your-project-slug" element={<Layout><YourProjectPage /></Layout>} />
```

**Example:**
```tsx
<Routes>
  <Route path="/" element={<Layout><HomePage /></Layout>} />
  <Route path="/projects/spare-parts-anomaly-detection" element={<Layout><SparePartsAnomalyPage /></Layout>} />
  <Route path="/projects/your-project-slug" element={<Layout><YourProjectPage /></Layout>} />
</Routes>
```

---

## Step 5: Update Project Card Data

### 5.1 Edit userData.json
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
  "category": "Machine Learning",
  "results": [
    "Key result 1 for card display",
    "Key result 2 for card display"
  ],
  "github": "https://github.com/...",  // optional
  "demo": "https://...",               // optional
  "notion": null
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

## Step 6: Update Projects Component Routing

### 6.1 Add routing logic
Open `src/components/sections/Projects.tsx`:

Find the section where project id 3 has special routing logic and add yours:

```tsx
{project.id === 3 && (
  <Link
    to="/projects/spare-parts-anomaly-detection"
    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-semibold transition-all duration-200"
  >
    <ExternalLink className="h-4 w-4" />
    Case Study
  </Link>
)}
{project.id === 8 && (  // Add this for your new project
  <Link
    to="/projects/your-project-slug"
    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-semibold transition-all duration-200"
  >
    <ExternalLink className="h-4 w-4" />
    Case Study
  </Link>
)}
```

> **Note:** Make sure to use the **outline button style** (border-2, transparent background) for case study links to match the design.

---

## Step 7: Test Your Case Study

### 7.1 Start Dev Server
```bash
npm run dev
```

### 7.2 Verify Navigation
1. Open http://localhost:5173/rolando-portfolio-page/ (or the port shown)
2. Scroll to Projects section
3. Find your new project card
4. Click "Case Study" button
5. Verify:
   - ✅ Page loads without errors
   - ✅ All sections display correctly
   - ✅ All 3 key impact cards show with icons
   - ✅ All 4 images load
   - ✅ Technologies display as pills
   - ✅ Links work (demo, GitHub, LinkedIn)
   - ✅ "Back to Portfolio" returns home
   - ✅ Header links work from case study page

### 7.3 Test Theme Toggle
1. On case study page, click theme toggle (moon/sun icon)
2. Verify both light and dark themes render correctly
3. Check text contrast and readability

### 7.4 Test Browser Navigation
1. Use browser back button from case study
2. Click case study again
3. Verify images still load (no broken paths)

---

## Step 8: Deploy

### 8.1 Commit Changes
```bash
git add public/projects/your-project-name.png
git add "public/projects/Your Project Name/"
git add src/data/caseStudies/your-project-slug.json
git add src/pages/case-studies/YourProjectPage.tsx
git add src/App.tsx
git add src/data/userData.json
git add src/components/sections/Projects.tsx

git commit -m "feat: add case study page for Your Project Name"
git push
```

### 8.2 Deploy to GitHub Pages
```bash
npm run deploy
```

This will build and deploy to GitHub Pages automatically.

---

## Quick Reference Checklist

### Assets
- [ ] Card image in `/public/projects/your-project-name.png`
- [ ] Project folder created: `/public/projects/Your Project Name/`
- [ ] 4 visual evidence images in `/public/projects/Your Project Name/figures/`

### Code Files
- [ ] Case study data: `/src/data/caseStudies/your-project-slug.json`
- [ ] Page component: `/src/pages/case-studies/YourProjectPage.tsx`
- [ ] Route added in: `/src/App.tsx`
- [ ] Project card data: `/src/data/userData.json` (projects array)
- [ ] Link routing: `/src/components/sections/Projects.tsx`

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
**Solution:** Ensure project ID is added to routing logic in Projects.tsx (Step 6)

### Issue: Route not found (404)
**Solution:** 
1. Check slug matches exactly in App.tsx route and Projects.tsx link
2. Verify import path is correct in App.tsx
3. Restart dev server (`npm run dev`)
4. Clear browser cache and hard reload (Ctrl+Shift+R)

### Issue: Import error for JSON file
**Solution:** TypeScript may need the import path without `@/`:
```tsx
import data from '../../data/caseStudies/your-project-slug.json';
```

### Issue: Icons not rendering in Key Impact cards
**Solution:** Check icon name matches exactly (case-sensitive):
- Available: `TrendingUp`, `TrendingDown`, `DollarSign`, `Factory`, `Database`, `Server`, `Activity`, `Shield`, `Brain`

### Issue: Styling looks different
**Solution:** 
1. Ensure you copied the exact button className from the example
2. The template automatically handles section styling
3. Check that dark mode classes are present (`dark:...`)

---

## Content Writing Tips

### Hero Subtitle
- ✅ "Detecting abnormal usage to prevent downtime"
- ❌ "An analysis of consumption patterns using Python"

### Overview
- Start with "This project..."
- 3-4 sentences, no more
- Business context, not technical details
- Focus on: problem → solution → impact

### Business Value
- Write for HR/managers, not technical leads
- Each bullet should answer "So what?"
- Avoid jargon like "EWMA" or "Z-score"

### Key Results
- Must be quantifiable
- Include numbers: percentages, dollars, units
- Use `**bold**` for metrics: `**USD 58K**`, `**-0.5%**`

### Methods
- One line per method
- Format: "Method Name – what it does"
- Technical audience can read this, but keep it brief

### Visual Evidence Captions
- ✅ "Consumption Peaks – Dispatch vs Trend Analysis"
- ❌ "newplot2-edit.png"
- Be descriptive but concise

---

## Time Estimate

**Per case study: ~15-30 minutes**

- 5 min: Prepare and copy images
- 5-10 min: Create/edit JSON file
- 2 min: Create page component (6 lines)
- 2 min: Update App.tsx routing
- 5 min: Update userData.json
- 2 min: Update Projects.tsx routing
- 5-10 min: Testing

---

## Example: Complete Workflow

Here's a real example adding "LSTM Energy Demand Prediction":

```bash
# 1. Create folders
mkdir "public/projects/LSTM Energy Demand Prediction"
mkdir "public/projects/LSTM Energy Demand Prediction/figures"

# 2. Copy images (assuming you have them ready)
cp ~/Downloads/lstm-card.png public/projects/lstm-energy.png
cp ~/Downloads/lstm-*.png "public/projects/LSTM Energy Demand Prediction/figures/"

# 3. Create JSON
cd src/data/caseStudies
cp spare-parts-anomaly.json lstm-energy.json
# Edit lstm-energy.json with your content

# 4. Create page component
cat > src/pages/case-studies/LSTMEnergyPage.tsx << 'EOF'
import CaseStudyTemplate from './CaseStudyTemplate';
import data from '../../data/caseStudies/lstm-energy.json';

export default function LSTMEnergyPage() {
  return <CaseStudyTemplate data={data} />;
}
EOF

# 5. Test
npm run dev
# Open browser and verify

# 6. Deploy
git add .
git commit -m "feat: add LSTM Energy Demand Prediction case study"
git push
npm run deploy
```

---

## Need Help?

If you encounter issues:
1. Check browser console for error messages (F12)
2. Verify all file paths are absolute with `/rolando-portfolio-page/` prefix
3. Ensure all imports are correct (relative paths `../../`)
4. Compare your files with the Spare Parts case study example
5. Check that JSON is valid (use JSONLint.com, watch for trailing commas)
6. Restart dev server if changes aren't showing
7. Clear browser cache and hard reload (Ctrl+Shift+R)

---

**Last Updated:** 2026-01-13  
**Project Structure:** Refactored (data-driven template system)  
**For questions or improvements to this guide, contact:** sj.rolando@gmail.com
