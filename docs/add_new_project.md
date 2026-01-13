# General Workflow for Adding a New Project

This document provides a high-level overview of the workflow when adding a new project to your portfolio. It acts as a roadmap to the detailed documentation files.

---

## The Workflow at a Glance

Depending on the depth of coverage you want for a project, there are two main paths:

### Path A: Quick Addition (Main Page Card Only)
Use this if you just want a project card on the home page with outward links (GitHub/Demo).
1. **Prepare a card image** (800x600px).
2. **Update `userData.json`** with the project details.
3. **Verify** and **Deploy**.

> [!TIP]
> **Detailed Instructions:** [add_main_card_project.md](./add_main_card_project.md)

---

### Path B: Comprehensive Addition (Card + Case Study Subpage)
Use this for major projects where you want a detailed, data-driven "Case Study" subpage.
1. **Follow Path A** (Create the card first).
2. **Design the Content:** Ensure your narrative follows the business-impact structure.
   - **Reference Rules:** [sub-page-designe-rules.md](./sub-page-designe-rules.md)
3. **Draft the Data:** Create a JSON data file for the project's case study.
4. **Implement the Page:** Create a minimal page component and register the route.
5. **Update Project Card Data:** Link the card to your subpage by adding `caseStudyPath` to `userData.json`.

> [!TIP]
> **Detailed Implementation Steps:** [add_new_project_page.md](./add_new_project_page.md)

---

## Detailed Documentation Map

| Documentation File | Purpose | When to use |
| :--- | :--- | :--- |
| [**add_new_project.md**](./add_new_project.md) | **Overview (This File)** | Start here to understand the general workflow. |
| [**add_main_card_project.md**](./add_main_card_project.md) | Card Implementation | When adding a project card to the home page list. |
| [**add_new_project_page.md**](./add_new_project_page.md) | Subpage Implementation | When creating a detailed data-driven Case Study page. |
| [**sub-page-designe-rules.md**](./sub-page-designe-rules.md) | Design & Content Rules | When writing content or styling for the Case Study subpages. |

---

## Summary Checklist
- [ ] Card image in `/public/projects/`
- [ ] Figures/Screenshots in `/public/projects/Your Project/figures/`
- [ ] Card entry in `src/data/userData.json`
- [ ] (Optional) Link to project page via `caseStudyPath` in `src/data/userData.json`

---

**Last Updated:** 2026-01-13  
**Contact:** sj.rolando@gmail.com
