it('assertions',()=>

    {
     cy.visit("https://www.google.com/")
     cy.url().should('include','goo')
     .and('contain','google')
     .and('eq','https://www.google.com/')


    })