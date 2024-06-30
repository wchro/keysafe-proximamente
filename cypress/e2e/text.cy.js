describe("Check Coming Soon", () => {
  beforeEach(() => {
    cy.visit("http://localhost/");
  });

  it("display coming soon text", () => {
    cy.contains("Muy pronto");
  });
});
