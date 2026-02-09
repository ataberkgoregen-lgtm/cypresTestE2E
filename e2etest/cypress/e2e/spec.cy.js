describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5174/");

    cy.get("[data-cy=email]").type("test@test.c");
    cy.get("[data-cy=button]").should("be.disabled");

    cy.get("[data-cy=email]").type("om");
    cy.get("[data-cy=password]").type("13124Atan");

    cy.get("[data-cy=terms]").click();

    cy.get("[data-cy=button]").should("not.disabled");

    cy.get("[data-cy=button]").click();
    cy.url().should("include", "/success");
    cy.contains("Hoşgelidiniz").should("be.visible");
    cy.contains("Basari ile giris yaptiniz!").should("be.visible");
  });
});
