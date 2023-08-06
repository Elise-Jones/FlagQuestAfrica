describe('User should be able to save flags', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://restcountries.com/v3.1/region/Africa", {
      statusCode: 200,
      fixture: "country1",
    })
      .as("fetchCountry1")
      .visit("http://localhost:3000/");
  });

  it.only('Should be able to save multiple flags and be able to test knowledge on each card', () => {
    cy.wait("@fetchCountry1").then((interception) => {
      cy.get(".save-button").click();
      cy.intercept("GET", "https://restcountries.com/v3.1/region/Africa", {
        statusCode: 200,
        fixture: "country2",
      }).as("fetchCountry2");
      cy.get(".show-new-button")
        .click().wait("@fetchCountry2").then((interception) => {
          cy.get(".save-button").click()
            .get(".savenav").click()
            .get(".saved-container")
            .find(".flag-card").should("have.length", 2)
            .get(':nth-child(1) > img').should("have.attr", "src")
            .should("include", "https://flagcdn.com/w320/gn.png")
            .get(":nth-child(1) > .form-container > form")
            .find('[placeholder="What country?"]').type("Republic of Guinea")
            .should("have.value", "Republic of Guinea")
            .get(':nth-child(1) > .form-container > form > .submit-button').click()
            .get("form > p")
            .should("be.visible")
            .contains("You are correct!")
            .get(':nth-child(2) > img').should("have.attr", "src")
            .should("include", "https://flagcdn.com/w320/ga.png")
            .get(":nth-child(1) > .form-container > form")
            .find('[placeholder="What country?"]').type("Republic of Guinea")
            .should("have.value", "Republic of Guinea")
            .get(':nth-child(2) > .form-container > form > .submit-button').click()
            .get("form > p")
            .should("be.visible")
            .contains("You are incorrect, try again.")
            .get(':nth-child(2) > .form-container > .answer-holder > button')
            .click()
            .get(':nth-child(2) > .form-container > .answer-holder > p')
            .contains("Gabonese Republic");
        });
    });
  });

  it("should be able to delete saved and see when there are no saved flags", () => {
    cy.wait("@fetchCountry1").then((interception) => {
      cy.get(".save-button").click();
      cy.intercept("GET", "https://restcountries.com/v3.1/region/Africa", {
        statusCode: 200,
        fixture: "country2",
      }).as("fetchCountry2");
      cy.get(".show-new-button")
        .click().wait("@fetchCountry2").then((interception) => {
          cy.get(".save-button").click()
            .get(".savenav").click()
            .get(".saved-container")
            .find(".flag-card").should("have.length", 2)
            .get(':nth-child(1) > img').should("have.attr", "src")
            .should("include", "https://flagcdn.com/w320/gn.png")
            .get(':nth-child(2) > img').should("have.attr", "src")
            .should("include", "https://flagcdn.com/w320/ga.png");
          cy.get(':nth-child(1) > .form-container > :nth-child(3)')
            .click()
            .get(".saved-container")
            .find(".flag-card").should("have.length", 1)
            .get('img').should("have.attr", "src")
            .should("include", "https://flagcdn.com/w320/ga.png")
            .get(".delete-button").click()
            .get("p").contains("You're doing great! No saved countries, yet");
        });
    });
  });
});