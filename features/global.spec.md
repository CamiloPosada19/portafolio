# Especificación Global - Portafolio 2026

## 1. Contexto
Este documento especifica los elementos transversales de todo el portafolio (Layout, Navbar, Footer y configuraciones globales) para mantener coherencia en toda la navegación y asegurar el alto rendimiento con Astro.

## 2. Historias de Usuario
- **Como** visitante del portafolio, **quiero** poder navegar fácilmente entre las secciones principales (Inicio, Experiencia, Proyectos, Contacto) **para** conocer el perfil profesional.
- **Como** visitante sensible a las animaciones, **quiero** tener un botón "safe_mode" **para** detener todos los efectos y animaciones visuales que puedan resultar molestos.

## 3. Requerimientos Funcionales y No Funcionales

### Requerimientos Funcionales
- **Navegación (Navbar):** Debe ser estática/fixed en la parte superior y desenfocada (`backdrop-blur`). Debe contener el logo interactivo, links a páginas y botón de descarga de CV.
- **Modo Seguro (Safe Mode):** Un botón en el header que agrega o quita la clase `.safe-mode` al `<body>` para detener de inmediato cualquier animación de CSS en la página.
- **Footer:** Elementos comunes en la parte inferior si son requeridos por diseño.

### Requerimientos No Funcionales
- **Rendimiento:** Al ser Astro, la navegación se debe sentir inmediata. No utilizar frameworks de JS (React/Vue) para la UI de navegación; manejar el `safe_mode` con Vanilla JS.
- **Responsividad:** El diseño del Navbar debe adaptarse a mobile escondiendo los enlaces detrás de un menú hamburguesa o cambiando su disposición.

## 4. Arquitectura de Datos
*No aplica almacenamiento complejo para elementos globales.* Sin embargo, la configuración de enlaces globales puede extraerse a un archivo de configuración (ej. `src/data/config.ts`).

## 5. UI / UX

### Sistema de Diseño (Tailwind)
- **Modo Oscuro (Dark Mode):** Por defecto la web usará el modo oscuro (`class="dark"`).
- **Tipografía:** 
  - *Display:* Space Grotesk (`font-display`).
  - *Mono/Cuerpo:* JetBrains Mono (`font-mono`).
- **Colores Base:**
  - `background`: `#131314`
  - `surface`: `#161617`
  - `primary`: `#00ff41` (Verde Hacker/Terminal)
  - `glitch-cyan`: `#00F0FF`
  - `on-surface`: `#e5e2e3`
- **Fondo Global:** Debe aplicar el grid punteado utilizando gradientes lineales sutiles (`rgba(0, 255, 65, 0.025)`).

## 6. Arquitectura (Componentes Astro)
- `src/layouts/Layout.astro`: Proveedor base de la estructura `<html>`, `<head>`, carga de fuentes y estilos globales (`body`, `.safe-mode`).
- `src/components/shared/Navbar.astro`: Componente para la navegación principal y botón de CV.
- `src/components/shared/SafeModeToggle.astro`: (O script integrado en Navbar) lógica en Vanilla JS persistida en `localStorage`.

## 7. QA y Criterios de Aceptación
- [ ] La navegación funciona correctamente en vista Desktop y Mobile.
- [ ] El botón "Safe Mode" anula las animaciones inmediatamente en todas las vistas, y su estado se guarda en `localStorage` o `sessionStorage`.
- [ ] El fondo de grilla y la paleta de colores son idénticos a los del mockup.
- [ ] Lighthouse reporta +95 en Performance, Accessibility, y Best Practices.
