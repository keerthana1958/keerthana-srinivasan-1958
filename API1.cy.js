describe('API',()=>
    {
    
    it('GET',()=>{
        cy.request('GET',"https://www.google.com/").its('status').should('equal',200)





    })})