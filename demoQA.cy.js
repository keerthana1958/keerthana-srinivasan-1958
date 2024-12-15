
/*describe('Usingfixtures', ()=>{
   
       
        it ('login_direct', ()=> {
       cy.fixture('demoqa').then((data)=> {
       cy.visit('https://demoqa.com/automation-practice-form')
       cy.get("#firstName").type(data.firstname)
       cy.get("#lastName").type(data.lastname)
       cy.get("#userEmail").type(data.useremail)
       cy.get("label[for='gender-radio-2']").check().should('be.checked')
       cy.get("#userNumber").type(data.usernumber)  
       cy.get("#dateOfBirthInput").click()
       cy.get(".react-datepicker__year-select").select('1995').should('have.value','1995')
       cy.get("div[aria-label='Choose Friday, December 1st, 1995']").click()
       cy.get("label[for='hobbies-checkbox-2']").check().should('be.checked')
       cy.get("#uploadPicture").attachFile('dummy.pdf')
       cy.get("#currentAddress").type(data.cd)

       cy.get("#submit").click()
       cy.get('#example-modal-sizes-title-lg').should('have.text', data.Expected)
        })})})*/