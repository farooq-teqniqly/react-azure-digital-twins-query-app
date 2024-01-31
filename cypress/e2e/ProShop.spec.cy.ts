import { getBySelector, assertTextExact } from "../support/utilities";

const localAppUrl = "http://localhost:3000";

describe("ProShop", () => {
  it("should render the home page", () => {
    cy.visit(localAppUrl);

    const h1 = getBySelector("h1");
    assertTextExact(h1, "Pro Shop");
  });
});
