describe('amzon test',()=>
    {
    
    it('test1',()=>
    {
    
    cy.visit("https://www.amazon.in/ref=nav_logo")
    cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
    
    
    }
    )
    it('test2',()=>
        {
        
        cy.visit("https://www.amazon.in/ref=nav_logo")
        cy.title().should('include','Amazon')
        
        
        }
        )
        
        it('validation ',()=>
        {
            cy.visit("https://www.amazon.in/ref=nav_logo")
         
            cy.get("a[id='nav-orders'] span[class='nav-line-1']").click()
            cy.get('.a-padding-extra-large > .a-spacing-small').contains('Sign in')
            

        })
        it('navigate ',()=>
            {
                cy.visit("https://www.amazon.in/ref=nav_logo")
             
                cy.get("a[id='nav-orders'] span[class='nav-line-1']").click()
                cy.get('.a-padding-extra-large > .a-spacing-small').contains('Sign in')
                cy.go('back')
                cy.title().should('include','Amazon')
                cy.go('forward')
                cy.get('.a-padding-extra-large > .a-spacing-small').contains('Sign in')

                
    
            })
            
    it.only('SS',()=>{
        cy.visit("https://www.amazon.in/ref=nav_logo")
        cy.screenshot("home page")
        cy.wait(5000)
        cy.get("#nav-logo-sprites").screenshot("google")





    })

           
    
    
    })