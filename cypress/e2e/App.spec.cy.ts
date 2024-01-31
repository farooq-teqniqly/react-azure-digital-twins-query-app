import { getBySelector, assertTextExact } from "../support/utilities";

const localAppUrl = "http://localhost:3000";

describe("Query app", () => {
  beforeEach(() => {
    cy.visit(localAppUrl);
  });

  it("should render the home page", () => {
    const h1 = getBySelector("h1");
    assertTextExact(h1, "Azure Digital Twins Query App");
  });

  it("disables login button until instance is validated", () => {
    const authenticateButton = getBySelector("#authenticate-button");
    authenticateButton.should("be.disabled");

    const instanceInput = getBySelector("#instance-input");
    instanceInput.type("https://my-instance.api.wus2.digitaltwins.azure.net");

    authenticateButton.should("not.be.disabled");
  });

  it("disables the query input and execute button until the user is authenticated", () => {
    const queryInput = getBySelector("#query-input");
    queryInput.should("be.disabled");

    const executeButton = getBySelector("#query-execute-button");
    executeButton.should("be.disabled");

    cy.authenticate("https://my-instance.api.wus2.digitaltwins.azure.net");

    queryInput.should("not.be.disabled");
    executeButton.should("not.be.disabled");
  });

  it("executes the query typed by the user", () => {
    cy.authenticate("https://my-instance.api.wus2.digitaltwins.azure.net");
    cy.executeQuery("SELECT * FROM digitaltwins");

    const results = getBySelector("#query-results");
    assertTextExact(results, "[]");
  });
});
