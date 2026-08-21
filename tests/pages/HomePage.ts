import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly heroTitle: Locator;
  readonly heroSubtitle: Locator;
  readonly heroPhoto: Locator;
  readonly stackPanel: Locator;
  readonly skillCards: Locator;
  readonly safeModeBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heroTitle = page.getByTestId('home-hero-title');
    this.heroSubtitle = page.getByTestId('home-hero-subtitle');
    this.heroPhoto = page.getByTestId('home-hero-photo');
    this.stackPanel = page.getByTestId('home-stack-panel');
    this.skillCards = page.getByTestId('home-skill-card');
    this.safeModeBtn = page.getByTestId('nav-safe-mode-toggle');
  }

  async navigate() {
    await this.page.goto('/portafolio/');
  }

  async getSkillBarPercentage(skillName: string): Promise<string> {
    const card = this.skillCards.filter({ hasText: skillName });
    const pctElement = card.getByTestId('home-skill-pct');
    return await pctElement.innerText();
  }

  async toggleSafeMode() {
    // The button is hidden via '!hidden' class in production since we disabled it,
    // but in case it's tested, we might need to force click it or evaluate.
    // For this test suite, if it's hidden we can force click or remove hidden class.
    await this.safeModeBtn.evaluate(node => node.classList.remove('!hidden'));
    await this.safeModeBtn.click();
  }

  async isCursorBlinking(): Promise<boolean> {
    const hasClass = await this.heroTitle.evaluate(node => node.classList.contains('blink-cursor'));
    return hasClass;
  }
}
