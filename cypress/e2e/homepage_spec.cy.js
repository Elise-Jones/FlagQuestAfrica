describe("template spec", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://restcountries.com/v3.1/region/Africa", {
      statusCode: 200,
      fixture: "country1",
    })
      .as("fetchCountry1")
      .visit("http://localhost:3000/");
  });
  it("should visit home page and see nav bar with a flag and a form", () => {
    cy.wait("@fetchCountry1")
      .its("response.statusCode")
      .should("eq", 200)
      .then((interception) => {
        cy.url()
          .should("include", "/")
          .get(".nav-container")
          .find(".homenav")
          .should("be.visible")
          .get(".nav-container")
          .find(".savenav")
          .should("be.visible")
          .get(".homepage-container")
          .should("be.visible")
          .get(".flag-card")
          .should("be.visible")
          .should("have.length", 1)
          .find("img")
          .should("have.attr", "src")
          .should("include", "https://flagcdn.com/w320/gn.png")
          .get(".form-container")
          .should("be.visible")
          .get("form")
          .should("be.visible")
          .get(".answer-holder > button")
          .should("be.visible")
          .get(".save-button")
          .should("be.visible")
          .get(".show-new-button")
          .should("be.visible");
      });
  });

  it("should be able to fill out form to test your flag knowledge and get more flags", () => {
    cy.wait("@fetchCountry1")
      .then((interception) => {
        cy.get("form")
          .find('[placeholder="What country?"]')
          .type("Morocco")
          .should("have.value", "Morocco")
          .get(".submit-button")
          .click()
          .get("form > p")
          .should("be.visible")
          .contains("You are incorrect, try again.")
          .get("form")
          .find('[placeholder="What country?"]')
          .type("Republic of Guinea")
          .should("have.value", "Republic of Guinea")
          .get(".submit-button")
          .click()
          .get("form > p")
          .should("be.visible")
          .contains("You are correct!");
        cy.intercept("GET", "https://restcountries.com/v3.1/region/Africa", {
          statusCode: 200,
          fixture: "country2",
        }).as("fetchCountry2");
      })
    .get(".show-new-button")
    .click()
    .get("img")
    .should("have.attr", "src")
    .should("include", "https://flagcdn.com/w320/ga.png")
    .get("form")
    .find('[placeholder="What country?"]')
    .type("Gabonese Republic")
    .should("have.value", "Gabonese Republic")
    .get(".submit-button")
    .click()
    .get("form > p")
    .should("be.visible")
    .contains("You are correct!");
  });

  it("Should have multiple routes from home to saved page", () => {
    cy.url()
      .should("include", "/")
      .get(".nav-container")
      .find(".savenav")
      .click();
    cy.url()
      .should("include", "/saved")
      .get(".nav-container")
      .find(".homenav")
      .click();
    cy.url().should("include", "/");
    // neee to test that it wills how answer
  });
});