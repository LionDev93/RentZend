describe("Register page", function() {
  beforeEach(function() {
    cy.visit("http://localhost:3000/");
  });

  it("shows register page", function() {
    cy.contains("Register").should("be.visible");
  });

  describe("submit without filling", function() {
    beforeEach(function() {
      cy.get("button").click();
    });

    it("shows error", function() {
      cy.contains("Required").should("be.visible");
    });
  });
});
