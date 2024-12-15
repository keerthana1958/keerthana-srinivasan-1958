describe('form2',()=>
{

it('form 2',()=>

{
        
        
cy.visit("https://register.rediff.com/register/register.php?FormName=user_details")
cy.fixture('form2').then((data)=> {

    cy.get('[width="200"] > input').type(data.fullname)
    cy.get('[valign="bottom"] > [type="text"]').type(data.id)
cy.get("#newpasswd").type(data.pw)
cy.get("#newpasswd1").type(data.rpw)
cy.get(':nth-child(1) > [width="185"] > input').type(data.email)
cy.get("#mobno").type(data.mobile)
cy.wait(10000)
cy.wait(5000)
cy.get("#Register").click()
cy.get('#tblcrtac > :nth-child(1) > :nth-child(1) > .f22').should('have.text','Verify OTP')
 }) })})
