/// <reference types="cypress" />
require("@cypress/xpath");

describe("Bstack Demo test", () => {
  it.only("Handle Iframe", () => {
    cy.visit(
      "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe"
    );
cy.wait(5000)
    const frameEle = (): Cypress.Chainable => {
      return cy
        .get("#iframeResult")
        .its("0.contentDocument.body")
        .should("not.be.empty")
        .then(cy.wrap);
    };

    const frameEle2 = (): Cypress.Chainable => {
      return frameEle().find('iframe[src="demo_iframe.htm"]')
        .its("0.contentDocument.body")
        .should("not.be.empty")
        .then(cy.wrap);
    };
    frameEle2().wait(1000).find("h1").should('have.text', 'This page is displayed in an iframe').wait(5000)
  });
});
