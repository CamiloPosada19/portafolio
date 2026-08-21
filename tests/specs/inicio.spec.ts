import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Página de Inicio - Portafolio', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await test.step('Navegar a la página principal', async () => {
      await homePage.navigate();
    });
  });

  test('Debe cargar el Hero con el título correcto y la foto', async () => {
    await test.step('Validar que el título y subtítulo son visibles y tienen el texto esperado', async () => {
      await expect(homePage.heroTitle).toBeVisible();
      await expect(homePage.heroSubtitle).toBeVisible();
      await expect(homePage.heroSubtitle).toHaveText('QA Automation Engineer');
    });

    await test.step('Verificar que la fotografía de perfil renderiza correctamente', async () => {
      await expect(homePage.heroPhoto).toBeVisible();
    });
  });

  test('El Safe Mode debe detener el parpadeo del cursor y animaciones de la foto', async () => {
    await test.step('Verificar que el cursor parpadea por defecto (animación activa)', async () => {
      expect(await homePage.isCursorBlinking()).toBeTruthy();
    });

    await test.step('Simular activación del Safe Mode', async () => {
      await homePage.toggleSafeMode();
    });

    await test.step('Comprobar que el parpadeo del cursor se detiene inmediatamente', async () => {
      expect(await homePage.isCursorBlinking()).toBeFalsy();
    });

    await test.step('Comprobar que la foto asume su estado final sin animación', async () => {
      const photoClasses = await homePage.heroPhoto.getAttribute('class');
      expect(photoClasses).toContain('scan-done');
    });
  });

  test('El StackPanel debe cargar y mostrar las barras de progreso', async () => {
    await test.step('Hacer scroll hasta la sección del Stack Tecnológico', async () => {
      await homePage.stackPanel.scrollIntoViewIfNeeded();
    });

    await test.step('Confirmar que las tarjetas de las herramientas son visibles', async () => {
      await expect(homePage.skillCards.first()).toBeVisible();
    });

    await test.step('Validar que la lógica asigna un porcentaje a las barras', async () => {
      const pct = await homePage.getSkillBarPercentage('Playwright');
      expect(pct).not.toBeNull();
    });
  });
});
