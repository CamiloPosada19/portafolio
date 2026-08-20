# Especificación Proyectos - Portafolio 2026

## 1. Contexto
La vista de Proyectos exhibirá los desarrollos, scripts de automatización, o casos de estudio en los que ha trabajado el QA Automation Engineer. Debe incluir un sistema ágil de filtrado para poder ver rápidamente tecnologías o rubros en específico (e.g., E2E, API Testing, Cypress, Playwright).

## 2. Historias de Usuario
- **Como** arquitecto frontend, **quiero** filtrar los proyectos instantáneamente en el cliente utilizando *View Transitions API*, **para** enfocarme en los casos de estudio (e.g. Playwright, Cypress) sin recargar la página.
- **Como** usuario visitante, **quiero** ver tarjetas (cards) limpias con imágenes/screenshots, descripción corta y links al código (GitHub) o demostraciones, **para** evaluar la calidad real del trabajo.

## 3. Requerimientos Funcionales y No Funcionales

### Requerimientos Funcionales
- **Grid de Proyectos:** Un contenedor tipo cuadrícula (Grid) que muestra una tarjeta por proyecto.
- **Filtros Interactivos:** Botones en la parte superior del Grid para filtrar. El filtrado puede ser mediante Vanilla JS (ocultando/mostrando cards) o re-renderizando si se opta por View Transitions.
- **Tarjetas (Cards):** Deben incluir imagen (opcional/fallback), título principal, descripción resumida, listado de tags, y un enlace al repositorio o demo.

### Requerimientos No Funcionales
- **Imágenes Optimizadas:** Uso de `<Image />` de Astro para las vistas previas de proyectos.
- **Rendimiento JS:** El filtrado por categorías debe ejecutarse puramente en el cliente (Vanilla JS) sin necesidad de peticiones al servidor para garantizar la inmediatez.

## 4. Arquitectura de Datos
- **Astro Content Collections:** Los proyectos deben almacenarse en `src/content/projects/`.
- **Esquema de Colección (Zod):**
  - `title` (string)
  - `description` (string)
  - `image` (string/url local)
  - `repoUrl` (string - opcional)
  - `demoUrl` (string - opcional)
  - `tags` (array de strings: ej `['E2E', 'Cypress']`)
  
## 5. UI / UX
- **Estructura Visual:** 
  - Header de sección con filtro horizontal scrollable en móviles.
  - Cards con efecto "hover" tipo `transform: translateY(-4px)` y un sutil `box-shadow` verdoso (`primary-dim`).
- **Estados:** 
  - Filtro activo debe destacarse (e.g. fondo sólido `#161617` con borde `#00ff41`).
  - Proyectos ocultos por filtro deben tener una transición de opacidad (`opacity-0`) y display (`hidden`).

## 6. Arquitectura (Componentes Astro)
- `src/pages/proyectos.astro`: Renderiza la vista base.
- `src/components/projects/Filters.astro`: Menú de botones para las categorías.
- `src/components/projects/ProjectGrid.astro`: Contenedor del grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
- `src/components/projects/ProjectCard.astro`: Componente individual de la tarjeta del proyecto.

## 7. QA y Criterios de Aceptación
- [ ] Los filtros ocultan correctamente las tarjetas que no contienen la etiqueta seleccionada.
- [ ] El filtro "Todos" resetea la vista y muestra todo el grid.
- [ ] Al dar clic al link del proyecto, se abre en una nueva pestaña (`target="_blank" rel="noopener noreferrer"`).
- [ ] Si no hay imagen en el markdown del proyecto, se despliega un fondo de "Fallback" estilizado sin romper el grid.
- [ ] La animación del filtrado y los hover states son bloqueados/desactivados en caso de tener el `safe_mode` activo.
