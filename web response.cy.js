describe('web res',()=>
    {
    it('viewport',()=>
    {
        cy.viewport(550, 750)
        cy.visit("https://www.qaoncloud.com/")
cy.wait(3000)
        cy.viewport('iphone-6','landscape')
       cy.visit("https://www.qaoncloud.com/")
    
    
    
    
    
    })
    
    
    
    
    
    
    
    
    })