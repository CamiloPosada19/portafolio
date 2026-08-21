export interface Skill {
  id: string;
  name: string;
  categories: string[]; // 'frontend', 'backend', 'ia'
  icon: string;
  percentage: number;
  description: string;
}

export const stackData: Skill[] = [
  {
    id: 'cypress',
    name: 'Cypress',
    categories: ['frontend'],
    icon: 'bug_report',
    percentage: 90,
    description: 'Boilerplate usado en múltiples proyectos para migrar desde Protractor'
  },
  {
    id: 'playwright',
    name: 'Playwright',
    categories: ['frontend', 'backend'],
    icon: 'theater_comedy',
    percentage: 99,
    description: 'Test E2E escalables para flujos críticos en una gran empresa de retail'
  },
  {
    id: 'selenium',
    name: 'Selenium',
    categories: ['frontend'],
    icon: 'web',
    percentage: 75,
    description: 'Frameworks BDD con Selenium y Cucumber para el sector bancario'
  },
  {
    id: 'webdriverio',
    name: 'WebdriverIO',
    categories: ['frontend'],
    icon: 'hub',
    percentage: 60,
    description: 'Automatización móvil y cross-browser con Appium'
  },
  {
    id: 'postman',
    name: 'Postman',
    categories: ['backend'],
    icon: 'send',
    percentage: 99,
    description: 'Pruebas funcionales y de caja negra sobre APIs REST'
  },
  {
    id: 'karatedsl',
    name: 'Karate DSL',
    categories: ['backend'],
    icon: 'api',
    percentage: 85,
    description: 'Suites de API y pruebas de carga integradas con Gatling'
  },
  {
    id: 'claudecode',
    name: 'Claude Code',
    categories: ['ia'],
    icon: 'psychology',
    percentage: 75,
    description: 'Desarrollo de herramientas internas usando MCPs y skills para agilizar procesos'
  },
  {
    id: 'copilot',
    name: 'GitHub Copilot',
    categories: ['ia'],
    icon: 'smart_toy',
    percentage: 90,
    description: 'Optimización en la creación y corrección de tests mediante nuevas herramientas para acelerar el ciclo de releases'
  }
];

export const getCategoryColor = (category: string) => {
  switch (category) {
    case 'frontend': return '#00ff41';
    case 'backend': return '#00F0FF';
    case 'ia': return '#e7bf99';
    default: return '#b9ccb2';
  }
};
