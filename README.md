# Sebastián Rolando - Portfolio Website

Sebastián Rolando's professional data science portfolio website showcasing operational analytics, machine learning, and supply chain optimization projects.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)
![Deployed](https://img.shields.io/badge/Deployed-View_Online-success?logo=github&logoColor=white)
![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?logo=linkedin&logoColor=white)

## Overview

**Live Site**: [https://rolaseba.github.io/rolando-portfolio-page/](https://rolaseba.github.io/rolando-portfolio-page/)

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features 6 data science projects across operations analytics, supply chain, and machine learning domains.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Live Site

The portfolio is deployed and available online: [https://rolaseba.github.io/rolando-portfolio-page/](https://rolaseba.github.io/rolando-portfolio-page/)

## Contact

- **LinkedIn**: [https://www.linkedin.com/in/sjrolando](https://www.linkedin.com/in/sjrolando)

## Features

- Responsive design (mobile, tablet, desktop)
- 6 project showcase cards with links to GitHub repos and live demos
- Smooth scrolling navigation
- Contact form with email integration
- Professional profile section
- Skills and experience sections
- Social media integration

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Deployment to GitHub Pages

### Option 1: GitHub Actions (Recommended)

1. Enable GitHub Pages in repository settings
2. Select GitHub Actions as source
3. Create `.github/workflows/deploy.yml`

### Option 2: Manual Deployment

```bash
npm install -g gh-pages
npm run build
gh-pages -d dist
```

## Project Structure

```
src/
├── components/     # React components
├── hooks/          # Custom hooks
├── data/           # JSON data files
├── App.tsx         # Main component
└── main.tsx        # Entry point
```

## License

MIT License
