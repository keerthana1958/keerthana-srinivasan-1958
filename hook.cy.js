describe('hooks',()=>
{

before(()=>{

cy.log("*****welcome*****")


})

beforeEach(()=>{

    cy.log("*****logged in*****")
    
    
    })
    afterEach(()=>{

        cy.log("*****logged out*****")
        
        
        })

        after(()=>{

            cy.log("*****byebye*****")
            
            
            })
it('open app',()=>
{
cy.log("keerthana-punch in")


})
        
it('closed app',()=>
    {
    cy.log("keerthana-punchout")
    
    
    })
          
    


})






