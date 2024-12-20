describe("child tab",()=>
{
it('window',()=>
{

cy.visit("https://the-internet.herokuapp.com/windows")
cy.get("a[href='/windows/new']").invoke('removeAttr',"target").click()
cy.url().should('include',"https://the-internet.herokuapp.com/windows/new")





})







})