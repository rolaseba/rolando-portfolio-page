Perfecto 👍
A continuación te dejo **la misma guía**, pero **reescrita estrictamente pensando en formato web / desktop**, sin considerar mobile ni responsive. Esto es **una especificación de diseño clara para un programador**, orientada a **subpáginas de proyectos de Data Science**, como el ejemplo que adjuntaste.

---

# 📐 Web Design Guide – Data Science Case Study (Desktop Only)

## 🎯 Objetivo de la subpágina

Presentar un proyecto de Data Science como **caso de negocio con profundidad técnica**, manteniendo el estilo visual de tu landing actual.

El lector objetivo:

* HR
* Manager
* Tech Lead

Debe poder entender **qué hiciste, por qué importó y qué impacto tuvo** sin leer código.

---

## 1️⃣ Layout general (Desktop)

**Tipo:** Subpágina interna
**Ancho máximo:** `1200px`
**Alineación:** centrado
**Grid recomendado:**

* Columna izquierda: navegación interna (opcional)
* Columna principal: contenido

```txt
---------------------------------------------------------
| Sidebar (optional) | Main Content                    |
|                    |                                |
| - Overview         | Header / Title                 |
| - Business Value   | Key Impact Cards               |
| - Results          | Sections                       |
| - Technologies     |                                |
---------------------------------------------------------
```

---

## 2️⃣ Header del proyecto (Hero Section)

### Contenido

* **Título del proyecto** (H1)
* **Subtítulo corto** (1 línea, H2 o paragraph destacado)

```txt
Item Consumption Anomaly Detection
Detecting abnormal spare parts usage to prevent downtime
```

### Reglas

* Altura moderada (no full screen)
* Fondo oscuro uniforme
* Sin imágenes grandes
* No más de 2 líneas de texto

---

## 3️⃣ Key Impact Section (obligatoria)

Ubicada **inmediatamente después del header**.

### Formato

Fila horizontal de **3 cards**

```txt
[ -0.5% Downtime ]   [ USD 58K Saved ]   [ Industrial Plant ]
```

### Reglas

* Cards con fondo levemente contrastado
* Números grandes
* Texto mínimo
* Íconos simples permitidos
* Altura uniforme

👉 Esta sección define el valor del proyecto en 5 segundos.

---

## 4️⃣ Navegación interna (Sidebar – Desktop)

### Estructura

Sidebar fijo (sticky) a la izquierda.

```txt
Overview
Business Value
Key Results
Benefits
Stakeholders
Technologies
Methods
Visuals
Access
```

### Reglas

* Sticky desde el inicio del contenido
* Ancho máximo: `200px`
* Tipografía pequeña
* Highlight de sección activa
* Links con anchor (`#section-id`)

👉 Ideal para proyectos largos y lectura escaneada.

---

## 5️⃣ Secciones de contenido (orden fijo)

Todas las subpáginas deben **respetar este orden**.

---

### 🔹 Overview / Description

**Formato**

* 1 párrafo corto (3–4 líneas)

```txt
This project detects anomalies in item consumption based on historical
dispatch data from an industrial warehouse...
```

**Reglas**

* Contexto operativo
* No implementación
* No teoría

---

### 🔹 Business Value

**Formato**
Lista con bullets (máx. 3)

```txt
• Early detection of equipment failures
• Reduction of unnecessary stock usage
• Improved maintenance planning
```

👉 Lenguaje de negocio, no técnico.

---

### 🔹 Key Results

**Formato**
Bullets con métricas resaltadas

```txt
• Reduced unplanned downtime by **~0.5%**
• Maintained **<1.6% Emergency Downtime**
• Generated **USD 58K in savings**
```

**Regla**

* Siempre números
* Siempre impacto cuantificable

---

### 🔹 Key Benefits

**Formato**
Bullets simples

```txt
• Item-level anomaly detection
• Scalable across assets and locations
• Enables proactive maintenance actions
```

---

### 🔹 Stakeholders Impacted

**Formato**
Lista sin explicación

```txt
• Maintenance Teams
• Warehouse Management
• Procurement & Planning
```

---

### 🔹 Technologies Used

**Formato visual**
Tags / pills horizontales

```txt
Python | Pandas | NumPy | Plotly | SciPy
```

**Reglas**

* Sin texto adicional
* Solo stack principal

---

### 🔹 Methods & Algorithms

**Formato**
Bullets con micro-descripción (1 línea)

```txt
• EWMA – trend smoothing
• Z-score – anomaly detection
• CUSUM – cumulative deviation
• KDE – distribution modeling
```

👉 Suficiente para un tech lead, claro para HR.

---

### 🔹 Visual Evidence

**Formato**

* Imágenes estáticas
* Una imagen por fila
* Caption corto debajo

```txt
[ Image ]
Consumption Peaks – Dispatch vs Trend
```

**Reglas**

* Máx. 4 imágenes
* Tamaños consistentes
* Sin interactividad

---

### 🔹 Access / Links

**Formato**
Botones claros al final

```txt
[ Demo App ]
[ GitHub Repository ]
[ LinkedIn ]
```

👉 CTA final del caso.

---

## 6️⃣ Tipografía y legibilidad (Desktop Dark Theme)

* Body text: gris claro (`#cfcfcf`)
* Headings: blanco puro
* Line-height: `1.6`
* Ancho máximo de texto: `700–750px`
* Espaciado generoso entre secciones (`64–80px`)

❌ Nada comprimido
❌ Nada tipo paper académico

---

## 7️⃣ Reglas de consistencia (muy importantes)

* Misma estructura para todos los proyectos
* Misma jerarquía de títulos
* Misma ubicación de métricas
* Mismo estilo de imágenes
* Mismo orden de secciones

👉 Esto comunica **seniority y pensamiento sistémico**.

---

## 8️⃣ Qué NO debe incluir la subpágina

❌ Código
❌ Notebooks embebidos
❌ Explicaciones matemáticas
❌ Párrafos largos
❌ Elementos interactivos

Esto **no es documentación técnica**, es **portfolio estratégico**.

---

## 9️⃣ Contenido Multilingüe (Español/Inglés)

* **Todo el contenido** debe estar duplicado en archivos JSON:
    * `nombre-proyecto.json` (Inglés)
    * `nombre-proyecto_es.json` (Español)
* Mantener la **misma estructura** de campos en ambos archivos.
* El componente de página gestionará la carga condicional.
* **No hardcodear** textos en el componente React; si agregas UI custom, usa `translations.ts`.

---

## 🔟 Regla final (UI + HR)

> Si alguien de HR entiende el impacto del proyecto en 30 segundos
> y un Tech Lead detecta solidez técnica en 2 minutos,
> el diseño está correctamente logrado.
