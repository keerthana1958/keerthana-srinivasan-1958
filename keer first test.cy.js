describe('first test',()=>
{

it('test1',()=>
{

cy.visit("https://www.google.com/")
cy.title().should('eq','Google')


}
)
it('test2',()=>
    {
    
    cy.visit("https://www.google.com/")
    cy.title().should('include','Goo')
    
    
    }
    )
    


})