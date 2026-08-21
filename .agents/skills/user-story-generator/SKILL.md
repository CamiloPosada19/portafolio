---
name: user-story-generator
description: >-
  Utiliza esta skill cuando el usuario te pida crear o redactar historias de usuario (User Stories) a partir de features o diseños.
  Esta skill asegura que las historias generadas incluyan Criterios de Aceptación, Definition of Ready (DoR), Definition of Done (DoD) y escenarios en Gherkin.
---

# Generador de Historias de Usuario

Cuando el usuario solicite crear una historia de usuario basada en una feature o diseño, DEBES seguir estrictamente la siguiente estructura para redactarla. 

## Estructura Obligatoria

Toda historia de usuario generada debe presentarse en formato Markdown y contener las siguientes secciones:

### 1. Título y Descripción (User Story)
- **Título**: Breve y descriptivo (ej. `[Feature] Navegación principal`).
- **Como** [rol del usuario]
- **Quiero** [acción o funcionalidad]
- **Para** [valor de negocio o beneficio]

### 2. Definition of Ready (DoR)
Enumera las condiciones previas que deben cumplirse antes de que el equipo de desarrollo pueda comenzar a programar la historia. Por ejemplo:
- [ ] Diseño finalizado y accesible.
- [ ] Componentes base (UI) identificados.
- [ ] Assets e imágenes exportadas/optimizadas.
- [ ] Dependencias técnicas desbloqueadas.

### 3. Criterios de Aceptación
Lista de viñetas con los requisitos funcionales, no funcionales y de comportamiento UI/UX detallados que la historia debe cumplir.

### 4. Escenarios BDD (Gherkin)
Describe los casos de uso principales utilizando la sintaxis Gherkin (Given-When-Then). 
Debe existir al menos un escenario de flujo feliz (Happy Path) y, si aplica, flujos alternativos o de error.

**Ejemplo de bloque de código:**
```gherkin
Feature: Navegación del usuario
  Scenario: El usuario navega al inicio
    Given que el usuario entra en la aplicación
    When carga el layout principal
    Then debe visualizar la barra de navegación con animaciones activas
```

### 5. Definition of Done (DoD)
Enumera las condiciones de cierre técnico para considerar la tarea como finalizada y lista para producción. Por ejemplo:
- [ ] El código respeta la arquitectura y reglas definidas en `AGENTS.md`.
- [ ] El componente es 100% responsivo (Mobile, Tablet, Desktop).
- [ ] No existen errores o advertencias (warnings) en consola.
- [ ] Los tests automatizados (Cypress/Playwright) vinculados a los criterios Gherkin pasan exitosamente.
- [ ] Code Review aprobado.

## Instrucciones de Ejecución
1. Lee la documentación que te pase el usuario (por ejemplo un archivo `.spec.md` o un `.html`).
2. Genera el documento de la Historia de Usuario siguiendo exactamente la estructura descrita arriba.
3. Crea un archivo markdown (.md) con el contenido generado y guárdalo obligatoriamente dentro del directorio `Epic/` en la raíz del proyecto (crea el directorio si no existe). El nombre del archivo debe ser descriptivo (ej. `Epic/us-inicio.md`).
