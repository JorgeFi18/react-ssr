it("expects to be able to populate search input", () => {
    cy.visit("/")
        .get("[data-cy=search]")
        .type("Spiderman")
        .should("have.value", "Spiderman");
});

it("expects to be able click on hero card", () => {
    cy.visit("/")
        .get("[data-cy=hero-card]")
        .first()
        .click();
});

it("expects to be able close hero description", () => {
    cy.visit("/")
        .get("[data-cy=hero-card]")
        .first()
        .click()
        .get("[data-cy=close-description]")
        .first()
        .click();
});