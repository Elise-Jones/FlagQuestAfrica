describe('template spec', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://restcountries.com/v3.1/region/Africa", {
      statusCode: 200,
      fixture: "country1",
    })
      .as("fetchCountry1")
      .visit("http://localhost:3000/");
  })

  it('Should be able to save multiple flags for later knowledge testing', () => {
    cy.wait("@fetchCountry1")
    .get(".save-button").click()
    cy.intercept("GET", "https://restcountries.com/v3.1/region/Africa", {
      statusCode: 200,
      fixture: "country2",
    }).as("fetchCountry2");
    cy.get(".show-new-button")
    .click()
    .get(".save-button").click()
    .get(".savenav").click()
    .get(".saved-container")
    .find(".flag-card").should("have.length", 2)
    .get(':nth-child(1) > img').should("have.attr", "src")
    .should("include", "https://flagcdn.com/w320/gn.png")
    .get(':nth-child(2) > img').should("have.attr", "src")
    .should("include", "https://flagcdn.com/w320/ga.png")
  })

})

