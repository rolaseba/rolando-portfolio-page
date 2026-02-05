# Adding New Project Cards - Quick Guide

This guide explains how to add a new project card to the main portfolio page (Projects section).

---

## What This Guide Covers

- ✅ Adding a project card to the main Projects section
- ✅ Updating `src/data/userData.json` & `userData_es.json`
- ❌ Creating case study pages (see [add_new_project_page.md](./add_new_project_page.md))

---

## Step 1: Prepare Project Card Image

### 1.1 Image Requirements
- **Format:** PNG or JPG
- **Dimensions:** ~800x600px recommended
- **File size:** < 500KB (optimize if needed)
- **Filename:** Use kebab-case, e.g., `your-project-name.png`

### 1.2 Add Image to Public Folder
```bash
# Copy your card image
cp ~/path/to/card-image.png public/projects/your-project-name.png
```

**Result:** `/public/projects/your-project-name.png`

---

## Step 2: Update userData.json & userData_es.json

### 2.1 Open the Files
Open `src/data/userData.json` (English) and `src/data/userData_es.json` (Spanish). Locate the `projects` array in both.

### 2.2 Add Your Project
Add a new object to the `projects` array in BOTH files. Ensure the Spanish file has translated `title`, `description`, and `results`.

```json
{
  "id": 8,
  "title": "Your Project Title",
  "description": "2-3 sentence description for the project card. Keep it concise and business-focused, highlighting the problem solved and key impact.",
  "image": "/rolando-portfolio-page/projects/your-project-name.png",
  "technologies": [
    "Python",
    "Pandas",
    "Scikit-learn",
    "Technology4"
  ],
  "category": "Machine Learning",
  "results": [
    "Key result 1 (e.g., '25% efficiency improvement')",
    "Key result 2 (e.g., 'USD 50K annual savings')"
  ],
  "github": "https://github.com/username/repo",
  "demo": "https://your-demo-url.com",
  "notion": "https://notion.so/...", // optional external link
  "caseStudyPath": null // internal path (e.g., "/projects/your-slug")
}
```

### 2.3 Field Explanations

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `id` | ✅ Yes | Unique ID (next available number) | `8` |
| `title` | ✅ Yes | Project name | `"LSTM Energy Forecasting"` |
| `description` | ✅ Yes | Card preview text (2-3 sentences) | `"Predicts hourly demand..."` |
| `image` | ✅ Yes | Absolute path with basename | `"/rolando-portfolio-page/projects/lstm.png"` |
| `technologies` | ✅ Yes | Array of tech stack items | `["Python", "TensorFlow"]` |
| `category` | ✅ Yes | Project category (see below) | `"Machine Learning"` |
| `results` | ✅ Yes | 2 key achievements | `["Result 1", "Result 2"]` |
| `github` | ❌ No | GitHub repo URL or `null` | `"https://github.com/..."` |
| `demo` | ❌ No | Live demo URL or `null` | `"https://demo.com"` |
| `caseStudyPath` | ❌ No | Internal Case Study Route | `"/projects/slug"` |

### 2.4 Available Categories
- `Machine Learning`
- `Anomaly Detection`
- `Time Series`
- `Operations Analytics`
- `Statistical Analysis`
- `Supply Chain Analytics`
- `Process Optimization`
- `Data Visualization`

---

## Step 3: Test the New Card

### 3.1 Start Dev Server
```bash
npm run dev
```

### 3.2 Verify Card Display
1. Open http://localhost:5173/rolando-portfolio-page/
2. Scroll to Projects section
3. Verify your new card appears
4. Check:
   - ✅ Card image loads correctly
   - ✅ Title and description display
   - ✅ Technologies show as tags
   - ✅ Results appear correctly
   - ✅ GitHub/Demo buttons work (if provided)

### 3.3 Test Theme Toggle
- Click the theme toggle (moon/sun icon)
- Verify card looks good in both light and dark modes

---

## Step 4: Deploy

### 4.1 Commit Changes
```bash
git add public/projects/your-project-name.png
git add src/data/userData.json
git commit -m "feat: add Your Project Name card"
git push
```

### 4.2 Deploy to GitHub Pages
```bash
npm run deploy
```

---

## Adding a Case Study Page (Optional)

If your project needs a detailed case study page:

1. **Follow the separate guide:** [add_new_project_page.md](./add_new_project_page.md)
2. **Reference design rules:** [sub-page-designe-rules.md](../sub-page-designe-rules.md)

The case study page creation involves:
- Creating JSON data file with detailed content
- Creating page component
- Adding routing to `App.tsx`
- Updating `userData.json` and `userData_es.json` with `caseStudyPath`

**Estimated time:** 15-30 minutes additional work

---

## Quick Reference Checklist

### Files to Update
- [ ] Card image: `/public/projects/your-project-name.png`
- [ ] Project data: `/src/data/userData.json` (projects array)
- [ ] Project data (Spanish): `/src/data/userData_es.json` (projects array)

### Testing
- [ ] Dev server runs without errors
- [ ] Card displays in Projects section
- [ ] Image loads correctly
- [ ] All text displays properly
- [ ] Links work (if provided)
- [ ] Theme toggle works
- [ ] No console errors

---

## Common Issues & Solutions

### Issue: Card image not loading
**Solution:** 
- Check path uses absolute format: `/rolando-portfolio-page/projects/image.png`
- Verify file exists in `public/projects/`
- Check filename matches exactly (case-sensitive)

### Issue: Card appears in wrong order
**Solution:**
- Cards display in the order they appear in the `projects` array
- Reorder the array in `userData.json` to change display order

### Issue: Technologies or results don't display
**Solution:**
- Ensure they're proper JSON arrays: `["item1", "item2"]`
- Check for syntax errors (trailing commas, missing quotes)
- Validate JSON using JSONLint.com

### Issue: JSON validation error
**Solution:**
- Remove trailing commas (last item in array/object can't have comma)
- Ensure all strings use double quotes, not single quotes
- Check brackets and braces are properly closed

---

## Content Writing Tips

### Description (Card Preview)
- **Length:** 2-3 sentences maximum
- **Focus:** Problem → Solution → Impact
- **Tone:** Business-oriented, avoid excessive technical jargon
- ✅ "Predicts electricity demand 24 hours ahead with 95% accuracy, enabling efficient resource planning"
- ❌ "Uses LSTM neural networks with TensorFlow to forecast time series data"

### Results
- **Be specific:** Include numbers, percentages, or dollar amounts
- **Be concise:** One line per result
- ✅ "25% efficiency improvement in production planning"
- ✅ "USD 120K annual cost reduction"
- ❌ "Made things better and saved money"

### Technologies
- **Order:** Most important first
- **Limit:** 4-6 technologies (don't list every library)
- **Relevance:** Only include technologies central to the project
- ✅ `["Python", "TensorFlow", "Pandas", "Docker"]`
- ❌ `["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow", "Keras", "Flask", "Docker", "PostgreSQL"]`

---

## Example: Complete Flow

Here's a real example adding "Hotel Cancellation Prediction":

```bash
# 1. Copy image
cp ~/Downloads/hotel-card.png public/projects/hotel-cancellation.png

# 2. Edit userData.json
# Add this to the projects array:
{
  "id": 2,
  "title": "Hotel Reservation Cancellation Prediction",
  "description": "Ensemble ML model predicting booking cancellations with 88% accuracy. Addresses $670K annual revenue loss using balanced precision and sensitivity metrics.",
  "image": "/rolando-portfolio-page/projects/hotel-cancellation.png",
  "technologies": [
    "Python",
    "Scikit-learn",
    "Pandas",
    "XGBoost"
  ],
  "category": "Machine Learning",
  "results": [
    "88.2% prediction accuracy",
    "83% precision, 84% sensitivity"
  ],
  "github": "https://github.com/username/hotel-cancellation",
  "demo": null,
  "notion": null
}

# 3. Test
npm run dev

# 4. Deploy
git add public/projects/hotel-cancellation.png src/data/userData.json
git commit -m "feat: add Hotel Cancellation Prediction card"
git push
npm run deploy
```

---

## Time Estimate

**Adding a project card: ~5-10 minutes**
- 2 min: Prepare and copy image
- 3-5 min: Update userData.json
- 2-3 min: Test and verify

---

## Next Steps

After adding the card:

### Option 1: Leave as Card Only
The project card will appear on the main page with GitHub/Demo links (if provided). No additional work needed.

### Option 2: Create Full Case Study Page
For projects that need detailed documentation:
1. Follow [add_new_project_page.md](./add_new_project_page.md)
2. Reference [sub-page-designe-rules.md](../sub-page-designe-rules.md) for design guidelines
3. Time: Additional 15-30 minutes

---

**Last Updated:** 2026-01-13  
**For questions or improvements to this guide, contact:** sj.rolando@gmail.com
