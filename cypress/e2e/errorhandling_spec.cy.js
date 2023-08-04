describe("Server-side error handling", () => {
  it("Handles 5XX error during initial fetch", () => {
    cy.intercept(
      "GET",
      "https://restcountries.com/v3.1/region/Africa",
      {
        statusCode: 500,
        body: "Internal Server Error",
      }
    ).as("getCountries");

    cy.visit("http://localhost:3000/");

    cy.wait("@getCountries")
    .get(".error-message").contains(
      "Sorry, we encountered a server error. Please try again later."
    ).should("be.visible");
  });
})

describe("isplays 404 page for non existent routes", () => {
  it("Navigates to an error page when the user inputs a route that doesn't exist", () => {
    cy.intercept("GET", "https://restcountries.com/v3.1/region/Africa", {
      statusCode: 200,
      fixture: "country1",
    })
      .as("fetchCountry1")
      .visit("http://localhost:3000/").wait("@fetchCountry1")
      .visit("http://localhost:3000/exist?/")
      .get(".error-page").contains("Sorry, this page does not exist.")
  }); 
  })
