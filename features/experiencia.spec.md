# Especificación Experiencia - Portafolio 2026

## 1. Contexto
Esta sección muestra la trayectoria profesional (Timeline) de Camilo como QA Automation Engineer, detallando roles, empresas, responsabilidades, y tecnologías aplicadas en cada puesto a lo largo del tiempo.

## 2. Historias de Usuario
- **Como** ingeniero de software, **quiero** navegar un timeline ultra optimizado sin *layout shifts*, **para** examinar fluidamente la evolución técnica de los roles de Camilo.
- **Como** visitante, **quiero** ver claramente qué herramientas específicas aplicó en cada empleo, **para** emparejar su experiencia con mi propio stack corporativo.

## 3. Requerimientos Funcionales y No Funcionales

### Requerimientos Funcionales
- **Timeline Vertical:** Las experiencias deben renderizarse como una línea de tiempo vertical (con una línea visual conectando los puntos / nodos de cada trabajo).
- **Contenido del Item:** Cada bloque de experiencia mostrará:
  - Título del cargo (e.g., *Senior QA Automation*).
  - Nombre de la empresa y fecha (mes/año).
  - Listado de bullet points destacando logros medibles y responsabilidades.
  - Etiquetas (tags) de tecnologías usadas en ese rol.

### Requerimientos No Funcionales
- La estructura del DOM debe ser semántica, utilizando elementos `<article>` o listas `<ul>` `<li>` que favorezcan el SEO y la accesibilidad por lectores de pantalla.

## 4. Arquitectura de Datos
- **Astro Content Collections (Recomendado):** La información se almacenará en colecciones de contenido (ej. `src/content/experience/`). Esto facilita escribir el contenido usando Markdown/MDX y asegura la tipificación con Zod.
- **Esquema de Colección (Zod):**
  - `title` (string)
  - `company` (string)
  - `startDate` (date)
  - `endDate` (date/string "Presente")
  - `technologies` (array de strings)

## 5. UI / UX
- **Estructura Visual:** 
  - Una barra lateral vertical izquierda (en desktop) dibujada con un color tenue (border-muted).
  - Nodos brillantes (verdes) para marcar la fecha actual de inicio del rol.
- **Tipografía y Colores:** 
  - Fechas en tono disminuido (`on-surface-variant`).
  - Etiquetas tecnológicas como pequeñas píldoras (`badges`) con bordes (`border-muted`).

## 6. Arquitectura (Componentes Astro)
- `src/pages/experiencia.astro`: Consulta la Content Collection, ordena por fecha, y renderiza.
- `src/components/experience/Timeline.astro`: Contenedor principal de la línea de tiempo.
- `src/components/experience/TimelineItem.astro`: Componente visual que recibe la información de un trabajo específico y la despliega.

## 7. QA y Criterios de Aceptación
- [ ] La línea de tiempo está ordenada desde la experiencia más reciente a la más antigua.
- [ ] El diseño es responsivo (en móviles la línea de tiempo se ajusta o elimina el margen izquierdo para optimizar el ancho de pantalla).
- [ ] Se verifica correctamente el uso de Astro Content Collections mediante la renderización dinámica de al menos 2 roles de prueba en el entorno de desarrollo.
