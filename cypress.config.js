const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'q28mwh',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalWebKitSupport: true,
    excludeSpecPattern: ['**/jsonObject.cy.js'] // Ignorar este archivo o carpeta
  
  },


});
