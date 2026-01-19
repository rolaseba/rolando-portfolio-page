"""
Portfolio Markdown Generator Script

This script generates a comprehensive markdown representation of the portfolio website
by aggregating data from `src/data/userData.json` and individual case study JSON files
located in `src/data/caseStudies/`.

The output is saved to `docs/mark-web-version/portfolio.md`.

Usage:
    python3 tools/generate_markdown.py

Requirements:
    - Python 3.x
    - No external dependencies (uses standard library)
"""

import json
import os
from datetime import datetime

# Configuration Paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE_DIR, 'src', 'data')
CASE_STUDIES_DIR = os.path.join(DATA_DIR, 'caseStudies')
OUTPUT_DIR = os.path.join(BASE_DIR, 'docs', 'mark-web-version')
OUTPUT_FILE = os.path.join(OUTPUT_DIR, 'portfolio.md')

# Mapping from caseStudyPath slug to actual filename slug
# e.g. 'hotel-cancellation-prediction' -> 'hotel-cancellation'
FILE_MAPPING = {
    'hotel-cancellation-prediction': 'hotel-cancellation',
    'spare-parts-anomaly-detection': 'spare-parts-anomaly',
    'warehouse-strategy-obsolescence': 'warehouse-obsolescence',
    'malt-production-optimization': 'malt-optimization',
    'process-sensors-mapping': 'process-mapping'
}

def load_json(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)

def generate_header(data):
    personal = data.get('personal', {})
    brand = data.get('brand', {})
    
    md = f"# {personal.get('name', 'Portfolio')}\n\n"
    md += f"**{personal.get('title', '')}**\n\n"
    md += f"_{brand.get('tagline', '')}_\n\n"
    
    md += "## Contact Information\n\n"
    md += f"- **Location:** {personal.get('location', '')}\n"
    md += f"- **Email:** [{personal.get('email', '')}](mailto:{personal.get('email', '')})\n"
    md += f"- **Phone:** {personal.get('phone', '')}\n"
    
    social = data.get('social', {})
    md += f"- **GitHub:** [{social.get('github', '')}]({social.get('github', '')})\n"
    md += f"- **LinkedIn:** [{social.get('linkedin', '')}]({social.get('linkedin', '')})\n"
    
    md += "\n---\n\n"
    return md

def generate_about(data):
    about = data.get('about', {})
    md = "## About Me\n\n"
    
    for paragraph in about.get('description', []):
        md += f"{paragraph}\n\n"
        
    md += "### Key Highlights\n\n"
    for item in about.get('whatIDo', []):
        md += f"- {item}\n"
    
    md += "\n### Stats\n\n"
    for stat in about.get('stats', []):
        md += f"- **{stat.get('label')}:** {stat.get('number')}\n"
        
    md += "\n---\n\n"
    return md

def generate_experience(data):
    experience = data.get('experience', {})
    md = "## Professional Experience\n\n"
    
    for job in experience.get('work', []):
        md += f"### {job.get('title')} at {job.get('company')}\n"
        md += f"_{job.get('period')} | {job.get('location')}_\n\n"
        md += f"{job.get('description')}\n\n"
        
        if job.get('achievements'):
            md += "**Key Achievements:**\n"
            for achievement in job.get('achievements'):
                md += f"- {achievement}\n"
        md += "\n"
        
    md += "## Education\n\n"
    for edu in experience.get('education', []):
        md += f"### {edu.get('degree')}\n"
        md += f"_{edu.get('school')} | {edu.get('period')}_\n\n"
        md += f"{edu.get('description')}\n\n"
        
    md += "## Certifications\n\n"
    for cert in experience.get('certifications', []):
        md += f"- **{cert.get('title')}** ({cert.get('issuer')}, {cert.get('date')})\n"
        
    md += "\n---\n\n"
    return md

def generate_skills(data):
    skills_data = data.get('skills', {})
    md = "## Skills\n\n"
    
    for category in skills_data.get('categories', []):
        md += f"### {category.get('title')}\n"
        md += ", ".join(category.get('skills', [])) + "\n\n"
        
    md += "\n---\n\n"
    return md

def generate_projects_overview(data):
    projects = data.get('projects', [])
    md = "## Projects Overview\n\n"
    
    for project in projects:
        md += f"### {project.get('title')}\n"
        md += f"![{project.get('title')}]({project.get('image')})\n\n"
        md += f"**Category:** {project.get('category')} | **Status:** {project.get('status')}\n\n"
        md += f"{project.get('description')}\n\n"
        
        if project.get('technologies'):
            md += f"**Technologies:** {', '.join(project.get('technologies'))}\n\n"
            
        md += "**Key Results:**\n"
        for result in project.get('results', []):
            md += f"- {result}\n"
            
        md += "\n"
        links = []
        if project.get('github'): links.append(f"[GitHub]({project.get('github')})")
        if project.get('demo'): links.append(f"[Live Demo]({project.get('demo')})")

        case_study_path = project.get('caseStudyPath')
        if case_study_path:
             # Link to the subsection we will generate later
            anchor = case_study_path.split('/')[-1]
            links.append(f"[Full Case Study](#{anchor})")
            
        if links:
            md += " | ".join(links) + "\n\n"
            
    md += "\n---\n\n"
    return md

def generate_case_studies(projects_data):
    md = "# Case Studies\n\n"
    
    # We iterate through the projects in userData to maintain order, 
    # but we look for the corresponding file in caseQueries
    for project in projects_data:
        case_study_path = project.get('caseStudyPath')
        if not case_study_path:
            continue
            
        slug = case_study_path.split('/')[-1]
        
        # Apply mapping if exists, otherwise use slug as is
        filename_slug = FILE_MAPPING.get(slug, slug)
        
        json_filename = f"{filename_slug}.json"
        json_path = os.path.join(CASE_STUDIES_DIR, json_filename)
        
        if not os.path.exists(json_path):
            print(f"Warning: Case study file not found: {json_path}")
            continue
            
        cs_data = load_json(json_path)
        
        md += f"<a id='{slug}'></a>\n" # HTML anchor for internal linking
        md += f"## {cs_data.get('title')}\n\n"
        md += f"_{cs_data.get('subtitle')}_\n\n"
        
        # Key Impact
        if cs_data.get('keyImpact'):
            md += "### Key Impact Metrics\n"
            for impact in cs_data.get('keyImpact', []):
                 md += f"- **{impact.get('label')}:** {impact.get('value')} ({impact.get('description')})\n"
            md += "\n"
            
        # Proof Of Concept
        poc = cs_data.get('proofOfConcept')
        if poc:
            md += f"### {poc.get('title')}\n"
            md += f"{poc.get('body')}\n\n"
            
        sections = cs_data.get('sections', {})
        
        # Overview
        if sections.get('overview'):
            md += "### Overview\n"
            md += f"{sections.get('overview')}\n\n"
            
        # Business Value
        if sections.get('businessValue'):
            md += "### Business Value\n"
            for val in sections.get('businessValue', []):
                md += f"- {val}\n"
            md += "\n"
            
        # Key Results
        if sections.get('keyResults'):
            md += "### Key Results\n"
            for res in sections.get('keyResults', []):
                md += f"- {res}\n"
            md += "\n"
            
        # Benefits
        if sections.get('benefits'):
            md += "### Benefits\n"
            for ben in sections.get('benefits', []):
                md += f"- {ben}\n"
            md += "\n"

        # Technologies
        if sections.get('technologies'):
            md += "### Technologies Used\n"
            md += ", ".join(sections.get('technologies', [])) + "\n\n"
            
        # Methods
        if sections.get('methods'):
            md += "### Methods & Techniques\n"
            for method in sections.get('methods', []):
                md += f"- **{method.get('name')}:** {method.get('description')}\n"
            md += "\n"
            
        # Visual Evidence
        if sections.get('visualEvidence'):
            md += "### Visual Evidence\n"
            for visual in sections.get('visualEvidence', []):
                md += f"![{visual.get('caption')}]({visual.get('image')})\n"
                md += f"*{visual.get('caption')}*\n\n"
                
        # Links
        links_data = cs_data.get('links', {})
        if links_data:
            md += "### Links\n"
            link_items = []
            for k, v in links_data.items():
                link_items.append(f"[{k.capitalize()}]({v})")
            md += " | ".join(link_items) + "\n\n"
            
        md += "\n---\n\n"
        
    return md

def main():
    print("Generating portfolio markdown...")
    
    # Ensure output directory exists
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    # Load Main Data
    user_data_path = os.path.join(DATA_DIR, 'userData.json')
    if not os.path.exists(user_data_path):
        print("Error: userData.json not found!")
        return
        
    user_data = load_json(user_data_path)
    
    # Generate Content
    content = ""
    content += generate_header(user_data)
    content += generate_about(user_data)
    content += generate_experience(user_data)
    content += generate_skills(user_data)
    content += generate_projects_overview(user_data)
    content += generate_case_studies(user_data.get('projects', []))
    
    # Write to file
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Markdown generated successfully at: {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
