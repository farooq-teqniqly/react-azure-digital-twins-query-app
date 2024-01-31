const getBySelector = (selector: string) => {
  return cy.get(selector);
};

const assertTextExact = (
  chainable: Cypress.Chainable<JQuery<HTMLElement>>,
  expectedText: string,
) => {
  chainable.should("have.text", expectedText);
};

export { assertTextExact, getBySelector };
