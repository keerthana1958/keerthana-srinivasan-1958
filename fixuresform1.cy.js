describe('Usingfixtures', ()=>{
 let userdata;
  before(()=>{
    cy.fixture("form1").then((data)=>{
      userdata = data; }) })
 it ('loginwithhook', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type(userdata.Username)
    cy.get("input[placeholder='Password']").type(userdata.Password)
    cy.get("button[type='submit']").click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',userdata.Expected) })

    
     it ('login_direct', ()=> {
    cy.fixture('form1').then((data)=> {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type(userdata.Username)
    cy.get("input[placeholder='Password']").type(userdata.Password)
    cy.get("button[type='submit']").click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',userdata.Expected)
     })})})