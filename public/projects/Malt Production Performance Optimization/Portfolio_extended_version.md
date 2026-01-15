### 🔧 Malt Production Performance Optimization *(Proof of Concept)*

**📌 Description**
Analysis of **13 years of historical malt production data** from a 350 TN/year malt plant, focusing on physicochemical, process, and quality parameters.
The study applied data wrangling, feature selection, and correlation analysis to identify parameters with the greatest influence on production yield and costs.
Although the solution has been developed and validated on historical datasets, it is currently at the **proof-of-concept stage**, pending full operational deployment.

**💡 Business Value**
Supports **data-driven decision-making** for both production and commercial negotiations:

* **Operationally** – pinpoints the parameters with the strongest influence on yield and quality, guiding process optimization and consistency.
* **Commercially** – quantifies the potential cost impact of adjusting parameters requested by clients, informing fair and sustainable contract pricing.
  Bridges the gap between technical process control and customer-facing teams.

**📈 Key Results – Preliminary**

* Processed **13 years** of production data with over **52 variables** evaluated.
* Built correlation matrices filtering only statistically significant relationships.
* Identified **critical parameters** (e.g., *Efdm*, *PT*, *Fil T*, *S>2.5*, *SMKR*) with directional recommendations (↑/↓) for performance improvement.
* Created altered-data visualizations for safe sharing without exposing confidential business data.

> *Preliminary simulations indicate potential improvements in yield and energy efficiency if key parameters are optimized. These figures are indicative and require on-site validation.*

**🌟 Key Benefits (Potential)**

* **Process Optimization** – targeted actions to reduce energy use and material waste.
* **Contract Pricing Support** – cost quantification for parameter changes.
* **Quality Control** – early detection of deviations from optimal parameter ranges.
* **R\&D Support** – recipe adaptation to different barley harvests.
* **Commercial Differentiation** – evidence-based process control as a market advantage.

📸 Example Visualization

<div style="text-align: center;">
  <img src="../figures/inter-parameter_correlation_alterated.png" 
       alt="Correlaciones parámetros malta"
       style="width: 70%; 
              max-width: 700px;
              border-bottom: 1px solid #eaeaea;
              padding-bottom: 12px;">
</div>

>*Note: All values shown have been altered using controlled noise or randomized scaling to protect confidential business data.*

<div style="page-break-after: always;"></div>

<br>
<br>

**🤝 Stakeholders Impacted**
Production & Operations, Quality Assurance, R\&D, Commercial & Customer Relations.

**🧰 Technologies Used**
`Python`, `Pandas`, `NumPy`, `Matplotlib`, `Seaborn`, `SciPy`.

**📊 Statistical & Analytical Methods**
Correlation Analysis (Pearson, Cramér’s V), ANOVA & Tukey HSD, feature selection with significance thresholds, inter-parameter mapping.

**📅 Current Stage & Next Steps**
*Current stage:* proof of concept with validated historical analysis and secure visualizations.
*Next steps:* real-time data integration, operational pilot test, dashboard deployment, measurement of actual impact.


**🔗 Links:**  
- [GitHub (interno)](#)  
  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&label=Connect)](https://www.linkedin.com/in/sjrolando/)

