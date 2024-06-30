describe("Check Coming Soon", () => {
  beforeEach(() => {
    cy.visit("http://localhost/");
  });

  it("display coming soon text", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.contains("Muy pronto");
  });
});
