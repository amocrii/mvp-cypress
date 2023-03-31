import { Locator } from "../support/locators"

let locator = new Locator;

describe('Third test', () => {
  it('Check the JavaScript checkbox', () => {
    cy.visit('https://dineshvelhal.github.io/testautomation-playground/forms.html')

    cy.log('Check the JavaScript checkbox')
    cy.get(locator.javascript_checkbox).check()

    cy.log('Make sure that the checkbox is checked')
    cy.get(locator.javascript_checkbox).should('be.checked')
  })
})