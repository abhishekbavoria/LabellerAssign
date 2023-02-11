describe('Wikipedia', () => {
  it('redirects to Delhi University page', () => {
    cy.visit('https://www.wikipedia.org/')
    cy.get('input#searchInput').type('Delhi')
    cy.get('.suggestions-dropdown')
      .contains('Delhi University')
      .click()
    cy.url().should('include', 'Delhi_University')
    cy.title().should('eq', 'Delhi University - Wikipedia')
  })
})

describe('Select days of the week are best to start something new', function () {
  it('should select Monday, de-select it and select Tuesday', function () {
    cy.visit('https://itera-qa.azurewebsites.net/home/automation');
    cy.get('input#monday').check().should('be.checked');
    cy.get('input#monday').uncheck()
    cy.get('input#tuesday').check().should('be.checked');
  });
});
