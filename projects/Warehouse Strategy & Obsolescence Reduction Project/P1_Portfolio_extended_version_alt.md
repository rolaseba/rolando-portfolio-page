## Warehouse Strategy & Obsolescence Reduction Project

📌 **Description**

This project addressed the challenge of analyzing **inventory dynamics and rotation** within a warehouse environment where information came from **multiple management systems not natively integrated**.  
The solution required consolidating, cleaning, and harmonizing datasets, and then applying **proprietary warehouse operational know-how** to design metrics that could drive business decisions.  

A total of **47 custom metrics** were defined and implemented:  
- **19 Inventory Movement Metrics** (e.g., days since last movement, movement category, receipt-to-issue ratio).  
- **28 Purchase and Inventory Cost Metrics** (e.g., immobilized value, purchase-to-consumption alignment, replenishment efficiency).  

These metrics were prioritized for business focus, highlighting **cost reduction opportunities** and improving **efficiency in material delivery to the plant**.  

💡 **Business Value**

* **Integrated view of fragmented systems**: transformed unconnected raw data into a unified decision-making framework.  
* **Replenishment Strategy Update**: parameters (ROP, EOQ) were recalibrated based on actual warehouse behavior.  
* **Obsolescence Detection**: systematic identification of items for sale, seizure, or removal to free physical space.  
* **Budget Optimization**: shifted financial resources toward real material usage, avoiding unnecessary immobilization.  
* **Efficiency Gains**: improved service levels in material delivery to plant operations.  

📈 **Key Results – Main Findings**  
*(exact result numbers modified to maintain confidentiality)*

* Designed and implemented a **47-metric warehouse framework** (19 movement-related, 28 cost-related).  
* Identified that **around 40–50% of items** can be considered obsolete under the defined criteria.  
* Quantified **several hundred KUSD worth of materials** at risk due to inactivity in the last 1–3 years.  
* Detected **hundreds of items that never moved since creation**, leading to catalog depuration.  
* Provided a **clear business case** for space liberation, reallocation of budget, and service-level improvements.  

*Example Visuals*

<div style="text-align: center;">
  <img src="/home/seba/Documentos/Data Science Projects/warehouse-material-analysis/reports/figures/last_time_moved_alt.png"
       alt="Years Since Last Movement and Issue"
       style="width: 70%; max-width: 700px; border-bottom: 1px solid #eaeaea; padding-bottom: 12px;">
</div>

<div style="text-align: center;">
  <img src="/home/seba/Documentos/Data Science Projects/warehouse-material-analysis/reports/figures/receipt_to_issue_ratio_alt.png"
       alt="Receipt-to-Issue Ratio Distribution"
       style="width: 70%; max-width: 700px; border-bottom: 1px solid #eaeaea; padding-bottom: 12px;">
</div>

🌟 **Key Benefits (Achieved / Potential)**

* **Physical space liberation**: removal of obsolete or immobilized items.  
* **Cost reduction**: reduction in indirect storage and maintenance expenses.  
* **Risk mitigation**: early detection of obsolescence trends, reducing future immobilization.  
* **Process efficiency**: service levels improved by aligning replenishment with actual demand.  

🤝 **Stakeholders Impacted**  
Warehouse Operations, Maintenance Teams, Procurement, Finance.

🧰 **Technologies Used**  
`Python`, `Pandas`, `NumPy`, `Matplotlib`, `Seaborn`, `Plotly`.

📊 **Analytical Approach**  
The project required combining **advanced data analysis methods** with **operational expertise**:  
1. **Metric Design**: definition of 47 custom indicators based on operational know-how.  
2. **Data Wrangling**: integration, cleaning, and harmonization of multiple non-integrated management systems.  
3. **EDA & Validation**: extracting insights and aligning them with operational realities.  
4. **Decision Enablement**: outputs were embedded into warehouse management processes, guiding replenishment, catalog management, and budget allocation.  

📅 **Current Stage & Next Steps**  
*Current stage:* developed and fully implemented; analyses are being applied in warehouse processes and driving management decisions.  
*Next steps:* automate metric generation and reporting; enable **dynamic strategy adaptation** where replenishment parameters and obsolescence thresholds adjust automatically according to demand.  

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&label=Connect)](https://www.linkedin.com/in/sjrolando/)

---

*Note: All numeric results have been anonymized or altered (using ranges, controlled scaling, or noise) to protect confidential company data. Visuals shown are illustrative and not representative of actual values.*

