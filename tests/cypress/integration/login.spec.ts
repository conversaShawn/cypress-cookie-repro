describe("logging in", function () {
  it("works", function () {
    cy.visit("/home");
    cy.get('[data-test="auth-status"]').contains("logged out");

    cy.request("POST", "/login");

    cy.visit("/home");
    cy.get('[data-test="auth-status"]').contains("logged in");

    cy.request("POST", "/logout");
    cy.get('[data-test="auth-status"]').contains("logged out");
  });

  it("works, but with fetch()", function () {
    cy.visit("/home");
    cy.get('[data-test="auth-status"]').contains("logged out");

    cy.then(() =>
      fetch("/login", {
        method: "POST",
      })
    );

    cy.visit("/home");
    cy.get('[data-test="auth-status"]').contains("logged in");

    cy.then(() =>
      fetch("/logout", {
        method: "POST",
      })
    );
    cy.get('[data-test="auth-status"]').contains("logged out");
  });
});
