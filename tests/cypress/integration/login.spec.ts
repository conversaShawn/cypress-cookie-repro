describe("logging in", function () {
  it("works", function () {
    cy.visit("/home");
    cy.get('[data-test="auth-status"]').contains("logged out");

    cy.request("POST", "/login");

    cy.visit("/home");
    cy.get('[data-test="auth-status"]').contains("logged in");

    cy.request("POST", "/logout");

    cy.visit("/home");
    cy.get('[data-test="auth-status"]').contains("logged out");
  });
});
