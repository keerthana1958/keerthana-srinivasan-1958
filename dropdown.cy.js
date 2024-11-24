describe('dropdown',()=>
{
it('withselct',()=>
{

cy.visit("https://www.orangehrm.com/en")
cy.get("select[name='locale']").select("Es").should('have.value','/es')


})


})