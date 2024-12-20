describe('API',()=>
    {
    
    it('SS',()=>{
        cy.visit("https://www.google.com/")
        cy.screenshot("home page")
        cy.wait(5000)
        cy.get("img[alt='Google']").screenshot("google")





    })

    /*it('SS',()=>{
        cy.visit("https://www.google.com/")

        cy.get("img[alt='Google']").should('have.text','515121')





})*/})