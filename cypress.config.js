const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1366,
  viewportWidth: 1024,
  video: false,
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 6000,
  scrollBehavior: "center",
  includeShadowDom: true,
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Test Automation Results',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: './report'
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
