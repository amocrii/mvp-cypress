import {faker} from "@faker-js/faker"
import { Locator } from "../support/locators"

let locator = new Locator;

const firstName = faker.name.firstName()

describe('First test', () => {
  it('Check the "First Name" input in the form', () => {
    cy.visit('https://www.way2automation.com/way2auto_jquery/registration.php#load_box')

    cy.log('Fill the "First Name" input')
    cy.get(locator.first_name_input).click().type(`${firstName}`, {delay: 100})

    cy.log('Check that we have the same value as was stored in the variable')
    cy.get(locator.first_name_input).invoke("val")
      .then((filledValue) => {
        expect(filledValue).to.deep.equal(firstName)
      })
  })
})