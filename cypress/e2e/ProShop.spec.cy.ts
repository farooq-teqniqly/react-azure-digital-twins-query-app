import { getBySelector, assertTextExact } from "../support/utilities";

const localAppUrl = "http://localhost:3000";

describe("ProShop", () => {
  it("should render the home page", () => {
    cy.visit(localAppUrl);

    const h1 = getBySelector("h1");
    assertTextExact(h1, "Azure Digital Twins Query App");
  });

  it("executes the query typed by the user", () => {
    cy.visit(localAppUrl);

    const queryInput = getBySelector("#query-input");
    queryInput.type("SELECT * FROM digitaltwins");

    const executeButton = getBySelector("#query-execute-button");
    executeButton.click();

    const results = getBySelector("#query-results");
    assertTextExact(results, "[]");
  });
});
