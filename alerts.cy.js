describe('alert',()=>{

    it('JValert',()=>

    {
     cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
     cy.get("button[onclick='jsAlert()']").click()
     cy.on('window:alert',(t)=>
    {
      expect(t).to.contains('I am a JS Alert')


    })
    cy.get("#result").should('have.text',"You successfully clicked an alert")

    })

    it('JValert',()=>

        {
         cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
         cy.get(":nth-child(2) > button").click()
         cy.on('window:confirm',(t)=>
        {
          expect(t).to.contains('I am a JS Confirm')
    
         
    
        })
        cy.get("#result").should('have.text',"You clicked: Ok")
    
        })
    
        it('authalert',()=>

            {
             cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:

                {
                  username: "admin",
                  password: "admin"


                }
             })
             cy.get("div[class='example'] h3").should('have.contain',"Basic Auth")
        

})
})