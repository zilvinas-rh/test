import { configureSynpressForMetaMask } from "@synthetixio/synpress/cypress";
import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    specPattern: "cypress/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
    testIsolation: false,
    async setupNodeEvents(on, config) {
      return configureSynpressForMetaMask(on, config);
    },
  },
});
