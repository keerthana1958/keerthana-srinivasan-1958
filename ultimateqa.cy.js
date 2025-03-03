describe('Ultimate QA', () => {
    beforeEach(() => {
      cy.visit('https://ultimateqa.com/automation')
    })
  
    it('"Fill out Forms" page', () => {
      cy.get('a:contains("Fill out Forms")').click()
      cy.url().should('include', '/filling-out-forms/')
      cy.get('h1').should('contain', 'Fill out Forms')
    })
  
    it('"Interactions with simple elements" page', () => {
      cy.get('a:contains("Interactions with simple elements")').click()
      cy.url().should('include', '/simple-html-elements-for-automation/')
      cy.get('h1').should('contain', 'Interactions with simple elements')
    })
  
    it('should fill out and submit the form on the "Fill out Forms" page', () => {
      cy.get('a:contains("Fill out Forms")').click()
      cy.url().should('include', '/filling-out-forms/')
      cy.get('#et_pb_contact_name_0').type('John Doe')
      cy.get('#et_pb_contact_message_0').type('This is a test message.')
      cy.get('button:contains("Submit")').click()
      cy.get('.et-pb-contact-message').should('contain', 'Thanks for contacting us')
    })
  
    it('should interact with simple elements', () => {
      cy.get('a:contains("Interactions with simple elements")').click()
      cy.url().should('include', '/simple-html-elements-for-automation/')
      cy.get('button:contains("Click Me!")').click()
      cy.get('div:contains("Button success")').should('be.visible')
    })
  })