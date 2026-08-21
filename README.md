# Portafolio - Camilo Posada (QA Automation Engineer)

¡Hola! Bienvenido al código fuente de mi portafolio personal. 

Si estás aquí, probablemente seas un reclutador, un líder de ingeniería o simplemente alguien cotilleando cómo armo mis proyectos (lo cual me parece genial). 

Soy Camilo, **QA Automation Engineer** con más de 8 años de experiencia. Decidí construir este portafolio no solo para tener un currículum bonito en internet, sino para demostrar directamente en el código cómo trabajo. 

Por eso, este no es un sitio web estático tradicional; es una plataforma construida con las mejores prácticas de desarrollo y, lo más importante, **100% cubierta por un framework de pruebas automatizadas**.

## 🛠️ Stack Tecnológico

- **Framework Core:** [Astro v5](https://astro.build/) (Renderizado ultrarrápido y HTML estático, porque el performance importa).
- **Estilos:** Tailwind CSS v4 (Sencillo, limpio y directo).
- **Testing E2E:** Playwright.
- **CI/CD:** GitHub Actions.

---

## 🧪 Pruebas Automatizadas y Reportes (La joya de la corona)

Como buen QA, no me sentía cómodo subiendo código a producción sin probarlo. 

He integrado **Playwright** estructurando el código bajo el patrón *Page Object Model (POM)*. Así mantengo los selectores separados de la lógica de prueba y uso `data-testid` para asegurar que las pruebas no sean frágiles si cambia el diseño.

Además, he creado un pipeline de despliegue continuo en **GitHub Actions**. ¿Qué significa esto?
Cada vez que meto código nuevo en la rama principal, un servidor en la nube levanta el portafolio, lanza el navegador fantasma, ejecuta toda la suite de pruebas E2E y, si todo sale bien, compila el sitio.

### ¿Quieres ver los resultados?
He inyectado el reporte oficial de Playwright directamente dentro de la página pública para que cualquier persona pueda auditar la cobertura de calidad del portafolio en tiempo real. 

Puedes ver los reportes interactivos aquí:
👉 **[Ver Reporte de Playwright 📊](https://CamiloPosada19.github.io/portafolio/reporte/)**

---

## 🚀 Correr el proyecto en local

Si quieres levantar esto en tu máquina para jugar con el código o ver cómo corren los tests automáticos:

1. Clona el repositorio e instala las dependencias:
   ```bash
   npm install
   ```

2. Levanta el servidor local de desarrollo de Astro:
   ```bash
   npm run dev
   ```

3. **(Opcional)** Si quieres ver a los tests automatizados haciendo magia en tu pantalla:
   ```bash
   npx playwright install --with-deps
   npx playwright test --ui
   ```

---

*Desarrollado con mucha pasión por la automatización y la calidad del software.*
