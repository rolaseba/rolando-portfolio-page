### **Resumen para Entrevista - Método STAR**

**Situación:**
En el marco de un proyecto global de digitalización, existía una complejidad técnica significativa en la planta debido a la falta de estructura jerárquica para los procesos de producción y sus sensores físicos (PLC tags), lo que dificultaba su integración en el sistema corporativo Aveva PI.

**Tarea:**
Asumí la iniciativa de diseñar y desarrollar una herramienta de mapeo y visualización que permitiera organizar de manera clara y estandarizada los procesos y sensores, creando un puente entre el conocimiento local y los requerimientos globales del proyecto de unificación de información.

**Acción:**
Implementé un **grafo jerárquico interactivo** utilizando `Python`, `Pandas` y `NetworkX` para modelar las relaciones padre-hijo entre procesos. Integré los PLC tags y sus estados, y desarrollé visualizaciones dinámicas con `Plotly` que incluían funcionalidades de *hover* para mostrar detalles técnicos y destacar procesos "To Be Implemented (TBI)".

**Resultado:**
La herramienta proporcionó una visión unificada y escalable de los procesos y sensores, facilitando la integración exitosa en Aveva PI. Esto redujo la complejidad operativa, sentó las bases para la captura y análisis de señales, y mejoró la colaboración entre equipos locales y globales.

---

### **Versión Ultra-Corta**
Desarrollé una herramienta de visualización jerárquica que estandarizó y digitalizó el mapeo de procesos y sensores, permitiendo su integración en Aveva PI y proporcionando una base sólida para iniciativas globales de Industry 4.0.