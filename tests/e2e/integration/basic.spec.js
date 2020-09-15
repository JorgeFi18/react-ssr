it("renders without crashing", () => {
    cy.visit("/");
});

it("expects to find the select box defaulting to Name (ASC)", () => {
    cy.visit("/")
        .get("[data-cy=filter]")
        .should("have.value", "name");
});