describe("MetaMask", () => {
  it("should connect wallet and display account information", () => {
    cy.get("#heap-connect-wallet").click();
    cy.get("#metamask").click();
  });
});
