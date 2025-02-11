describe('Handlingwebtables', ()=>

    {    
    
     it('check the cell data in specific row and coloumn', ()=>
        {        cy.visit('https://the-internet.herokuapp.com/tables')

            cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > table:nth-child(5) > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(1)').contains("Doe")
    
    })
})
    
    