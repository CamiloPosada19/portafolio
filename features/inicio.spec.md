# Especificación Inicio - Portafolio 2026

## 1. Contexto
La página principal (Home) actúa como punto de entrada del portafolio. Debe impactar de inmediato con su temática tipo "terminal/hacker", presentando al candidato (Camilo, QA Automation Engineer), mostrando de forma rápida el stack tecnológico (con barras animadas) y proporcionando accesos directos al CV y datos de contacto.

## 2. Historias de Usuario
- **Como** ingeniero de software, **quiero** experimentar una carga inmediata (SSG puro de Astro) al entrar al portafolio, **para** confirmar que el sitio fue construido con las mejores prácticas de optimización web.
- **Como** visitante técnico, **quiero** visualizar interactivamente el stack tecnológico y los años de experiencia de Camilo, **para** comprender rápidamente su altísimo nivel de especialización en QA Automation.
- **Como** usuario, **quiero** ver micro-animaciones (escaner en la foto, cursor parpadeante) **para** tener una primera impresión de alta calidad técnica.

## 3. Requerimientos Funcionales y No Funcionales

### Requerimientos Funcionales
- **Hero Section:** Debe mostrar el título "QA Automation Engineer", una breve descripción, y botones de llamada a la acción primarios.
- **Animación del Retrato:** La fotografía de perfil debe tener un efecto visual de "escaneo" (de escala de grises a color) que se reproduce una sola vez al cargar la página.
- **Barras de Habilidades:** Un panel "SYSTEM_STATUS" con barras de progreso que se llenan animadamente desde 0% hasta su valor destino cuando entran al viewport (IntersectionObserver o lógica directa en Astro).
- **Indicadores Rápidos (Stats):** Mostrar métricas clave (ej. "+3 Años Exp.", "99.9% Test Coverage").

### Requerimientos No Funcionales
- El efecto de cursor parpadeante (`_`) debe lograrse únicamente usando CSS puro (`@keyframes blink`).
- Las imágenes empleadas en el Hero deben estar optimizadas con el componente `<Image />` o `<Picture />` nativo de Astro.

## 4. Arquitectura de Datos
- La información de las habilidades (skills) se debe extraer a un array o archivo de contenido local estático (JSON o frontmatter). Ejemplo: `[{ name: 'Playwright', level: '90%' }, { name: 'Cypress', level: '85%' }]`.

## 5. UI / UX
- **Colores y Fuentes:** Se utilizará el sistema definido en `global.spec.md`.
- **Efectos:** 
  - `blink-cursor`: Pseudo-elemento `::after` con animación `blink`.
  - `scan-line`: Línea verde horizontal animada sobre la foto.
- **Interacción:** Efecto de "hover" en los enlaces y botones (cambio de bordes, transición en `background-color`).

## 6. Arquitectura (Componentes Astro)
- `src/pages/index.astro`: Renderiza la vista principal utilizando el `<Layout>`.
- `src/components/home/Hero.astro`: Contiene el encabezado principal, título y foto.
- `src/components/home/SkillBars.astro`: Componente iterador que renderiza las barras de progreso.
- `src/components/home/StatsPanel.astro`: Renderiza los bloques de texto secundarios.

## 7. QA y Criterios de Aceptación
- [ ] El efecto del escáner en la foto ocurre solo 1 vez y fluye de arriba hacia abajo sin tirones.
- [ ] Las barras de progreso de las habilidades terminan exactamente en el porcentaje especificado.
- [ ] Si el "Safe Mode" está activo, no hay efecto de escaneo, las barras inician llenas, y el cursor no parpadea.
- [ ] En pantallas pequeñas (móviles), los elementos (foto, texto, skills) se apilan verticalmente correctamente.
