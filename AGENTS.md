# Antigravity Rules - Portafolio 2026

Este documento define la arquitectura, metodología, reglas del agente y estructura base para el proyecto **Portafolio 2026**.

---

## Tecnologías y Metodología

- **Framework:** Astro.
  - Se utilizará Astro de forma nativa, aplicando sus mejores prácticas (uso de layouts, componentes `.astro`, ruteo basado en archivos).
  - **REGLA:** **No mezclar tecnologías** o frameworks de UI adicionales (como React, Vue, Svelte, etc.) para mantener la simpleza y el alto rendimiento.
  - **REGLA (Diseño Responsivo):** Toda interfaz construida debe estar completamente adaptada y funcionar perfectamente en **Mobile, iPad (Tablets) y Desktop**.
- **Metodología:** *Spec-Driven Development* (Desarrollo Guiado por Especificaciones).
  - Todo desarrollo de nueva funcionalidad debe estar documentado en una especificación dentro de `features/` antes de escribir código.

---

## Estructura de Carpetas Principales

1. **`features/`**
   - Residencia del *Spec-Driven Development*. Cada pantalla, componente importante o funcionalidad del portafolio tendrá su propio documento de especificación (spec) antes de ser desarrollada.

2. **`design/`**
   - Diseños, maquetas, simulaciones en HTML plano o imágenes de referencia (JPG/PNG) para guiar el desarrollo visual.

3. **`fixes/`**
   - Documentación, aislamiento y corrección de errores (bugs) o refactorizaciones de características lanzadas o especificadas.

4. **`src/`**
   - Proyecto real de Astro (con subcarpetas como `pages/`, `components/`, `layouts/`, `styles/`, etc.), aplicando la estructura estándar del framework.

---

## Siguientes Pasos

- Inicializar el proyecto base de Astro dentro de `src/`.
- Crear el primer spec en `features/` para la página de inicio (Home).
