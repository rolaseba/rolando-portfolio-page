## 🔧 Item Consumption Anomaly Detection

**📌 Description**
This project detects anomalies in item consumption based on historical dispatch data from an industrial warehouse. It integrates data wrangling, time series analysis, seasonality detection, and anomaly detection techniques to identify unusual dispatch behavior for specific inventory items. The system supports proactive maintenance and stock control by highlighting abnormal consumption patterns.

**💡 Business Value**  
Enables early detection of stock mismanagement, equipment failure, or material misuse. Helps teams act proactively, reducing downtime, preventing over/understock, and optimizing procurement cycles.

**📈 Key Results**

* Contributed to a **reduction of unplanned downtime by approximately 0.5%**, supporting the plant in reaching **less than 1.6% Emergency Downtime (EDT)** during productive time.
* Prevented unnecessary consumption of spare parts, resulting in **USD 58K in savings** by correcting equipment failures before they escalated.

**🌟 Key Benefits**

* Detects abnormal usage trends at item and location levels
* Visualizes dispatch and consumption peaks with statistical context
* Enables early response to prevent inventory issues
* Scalable to multiple items, equipment types, and locations

**🤝 Stakeholders Impacted**

* Maintenance Teams
* Inventory and Warehouse Management
* Procurement and Planning Teams

**🧰 Technologies Used**
`Python`, `Pandas`, `NumPy`, `Plotly`, `Matplotlib`, `Seaborn`, `scipy`

**📊 ML Algorithms & Statistical Methods Used**

* **EWMA and Double Exponential Smoothing** for level and trend estimation
* **Z-score analysis** for anomaly detection in dispatch trend
* **Rolling Average and Signal Smoothing** for consumption trend
* **Peak Detection** using `scipy.signal.find_peaks` for both dispatch and consumption anomalies
* **CUSUM** for cumulative behavior analysis
* **Rolling Standard Deviation** to detect periods of volatility
* **Kernel Density Estimation (KDE)** to identify typical dispatch quantities

**🔗 Access**

* [Demo App](https://deepnote.com/app/data-science-labs-a5bc/Spare-parts-use-in-assets-6dcee31c-36eb-4076-bd5b-8213b3902955?utm_content=6dcee31c-36eb-4076-bd5b-8213b3902955&item_1=193799&__run=true)

Visual Examples
![Consumption Peaks Anomalies](../figures/newplot2-edit.png)
![Consumption Peaks Anomalies](../figures/newplot1-edit.png)
![Consumption Peaks Anomalies](../figures/newplot-edit.png)
![Consumption Peaks Anomalies](../figures/equipos-edit.png)

*Note: Developed as part of a broader initiative in inventory control and preventive maintenance optimization.*
*All values shown have been altered using controlled noise or randomized scaling to protect confidential business data.*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge\&logo=linkedin\&logoColor=white\&label=Connect)](https://www.linkedin.com/in/sjrolando/)

