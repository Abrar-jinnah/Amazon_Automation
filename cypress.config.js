const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.amazon.com",
    supportFile: false,
    specPattern: 'cypress/integration/*.js',
    viewportHeight: 1080,
    viewportWidth: 1920,
    chromeWebSecurity: false
  },
});
