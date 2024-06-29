describe('Navigation', () => {
  it('should navigate to the destination page after logging in', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')
    // Find a link with an href attribute containing "destination" and click it

    cy.get('a[href*="/destination"]').click()

    cy.get('input[name=identifier]').type('mmdrezaasadi1998@gmail.com')
    cy.get('button[data-localization-key="formButtonPrimary"]').click()
    cy.get('input[name=password]').type('asadi23577')
    cy.get('button[data-localization-key="formButtonPrimary"]').click()

    // The new url should include "/destination"
    cy.url().should('include', '/destination')
  })
})
