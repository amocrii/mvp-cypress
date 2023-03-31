describe('Second test', () => {
  it('Check one alert', () => {
    cy.visit('https://www.way2automation.com/way2auto_jquery/alert.php#load_box')

    cy.log('Click on the button that triggers the alert')
    cy.get('iframe').first().then(($iframe) => {
      const $body = $iframe.contents().find('body')
      const $win = $iframe[0].contentWindow
  
      cy.stub($win, 'alert').as('windowAlert')

      cy.wrap($body)
        .find('button').click().should(function () {
          expect(this.windowAlert).to.be.calledWith('I am an alert box!')
        })
      })
  })
})