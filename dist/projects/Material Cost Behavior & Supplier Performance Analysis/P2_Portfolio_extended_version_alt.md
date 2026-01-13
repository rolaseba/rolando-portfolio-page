## Material Cost Behavior & Supplier Performance Project

📌 **Description**

This project delivers a specialized **cost analytics** framework designed to identify pricing risks, detect supplier deviations, and highlight opportunities for savings in warehouse material purchases.
The approach combines multi-year purchasing history with advanced data preparation, enabling the creation of custom performance indicators for cost stability, price change detection, and trend prioritization, while providing managers and the Purchase team with actionable insights without requiring them to interpret raw technical outputs.
The framework also includes a **real-time overspend alert tool** that flags excessive price increases at the moment a purchase order is created, empowering immediate action and preventing potential losses.

💡 **Business Value**

* **Savings**: identify overpricing and quantify its impact to support renegotiations.
* **Risk Control**: flag unstable materials and prioritize monitoring where the money is.
* **Planning**: anticipate upward/downward trends and adjust contracts accordingly.

📈 **Key Results – Main Findings**

* Unified multi-year purchasing history across thousands of items.
* Developed **specialized indicators** that reveal: (1) stability vs. volatility, (2) % changes between consecutive purchases, and (3) long-term trend vs. historical average.
* Built a **visual prioritization tool** where each bubble represents the **average yearly cost** of a material—making high-value, high-risk items instantly visible.
* Two anonymized case studies:
  * **Specialty Lubricant Supplier** – detection of significant increases that triggered a supplier review.
  * **Industrial Oil Supplier** – seasonal/market fluctuations that led to adjusted contracting terms.
* Introduced a **strategic overspend alert tool** that detects when a supplier increases the price of a material beyond acceptable thresholds at the moment a purchase order is created.
  * Enables buyers and approvers to act immediately, even for rarely purchased items.
  * Prevents losses and empowers immediate negotiation, reducing the risk of approving overpriced orders.

*Example Visuals*

<div style="text-align: center;">
  <img src="/home/seba/Documentos/Data Science Projects/warehouse-material-analysis/reports/figures/overspend_alert2_alt.png"
       alt="Strategic Overspend Alert Tool"
       style="width: 70%; max-width: 700px; border-bottom: 1px solid #eaeaea; padding-bottom: 12px;">
</div>

<div style="text-align: center;">
  <img src="/home/seba/Documentos/Data Science Projects/warehouse-material-analysis/reports/figures/cv_and_trend_alterated.png"
       alt="Cost Variability vs Trend Prioritization"
       style="width: 70%; max-width: 700px; border-bottom: 1px solid #eaeaea; padding-bottom: 12px;">
</div>

<div style="text-align: center;">
  <img src="/home/seba/Documentos/Data Science Projects/warehouse-material-analysis/reports/figures/cv_and_trend_zoom2_alterated.png"
       alt="Cost Variability vs Trend Prioritization"
       style="width: 70%; max-width: 700px; border-bottom: 1px solid #eaeaea; padding-bottom: 12px;">
</div>

<div style="text-align: center;">
  <img src="/home/seba/Documentos/Data Science Projects/warehouse-material-analysis/reports/figures/oil_supplier_2_case_alt.png"
       alt="Industrial Oil Supplier Case"
       style="width: 70%; max-width: 700px; border-bottom: 1px solid #eaeaea; padding-bottom: 12px;">
</div>

<div style="text-align: center;">
  <img src="/home/seba/Documentos/Data Science Projects/warehouse-material-analysis/reports/figures/oil_supplier_1_case_alt.png"
       alt="Specialty Lubricant Supplier Case"
       style="width: 70%; max-width: 700px; border-bottom: 1px solid #eaeaea; padding-bottom: 12px;">
</div>

🌟 **Key Benefits (Achieved / Potential)**

* **\~150–200 KUSD** in potential annual savings by stabilizing prices in critical materials.
* **Supplier accountability** supported by objective evidence.
* **Early detection** of risky upward trends before they compound.
* **Decision clarity**: focus efforts on items with **high spend** and **high volatility**.
* **Overspend prevention**: immediate detection and intervention before approval, preventing losses from occurring.

🤝 **Stakeholders Impacted**
Procurement, Finance, Warehouse Operations, Supply Chain Planning.

🧰 **Technologies Used**
`Python`, `Pandas`, `NumPy`, `Plotly`.

📊 **Analytical Approach**
Data consolidation & cleaning, creation of cost stability / % change / trend indicators, automated deviation flags, strategic overspend alerts, and visual prioritization dashboards.

📅 **Current Stage & Next Steps**
*Current stage:* operational on historical and current data; dashboards available for managers.
*Next steps:* monthly automated reports; BI integration; market price benchmarking add-on.

🔗 **Access**

* [Interactive Dashboard (ask for a playground access)](#)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge\&logo=linkedin\&logoColor=white\&label=Connect)](https://www.linkedin.com/in/sjrolando/)

---
*Note: All numeric results, plots and suppliers have been anonymized or altered (using ranges, controlled scaling, or noise) to protect confidential company data. Visuals shown are illustrative and not representative of actual values.*