describe('Swagger Petstore', () => {
    beforeEach(() => {
      cy.visit('https://petstore.swagger.io/')
    })
  
    it(' Swagger Petstore page', () => {
      cy.url().should('include', 'petstore.swagger.io')
      cy.contains('Swagger Petstore').should('be.visible')
    })
  
    it('the Pet API section', () => {
      cy.contains('pet').click()
      cy.get('.opblock-summary').should('be.visible')
    })
  
    it('"Add a new pet to the store" operation', () => {
      cy.contains('pet').click()
      cy.contains('POST').click()
      cy.get('.opblock-body').should('be.visible')
    })
  
    it(' "Add a new pet to the store" operation', () => {
      cy.contains('pet').click()
      cy.contains('POST').click()
      
      cy.get('textarea').first().clear().type(JSON.stringify({
        id: 123,
        category: { id: 1, name: "Dogs" },
        name: "Cypress Pet",
        photoUrls: ["https://example.com/photo.jpg"],
        tags: [{ id: 1, name: "tag1" }],
        status: "available"
      }), { parseSpecialCharSequences: false })
      
      cy.contains('Try it out').click()
      cy.contains('Execute').click()
      cy.get('.responses-table').should('contain', '200')
    })
  })