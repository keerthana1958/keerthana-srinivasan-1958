describe('Navigation',()=>{

    it('go',()=>
    {

cy.visit("https://www.flipkart.com/")
cy.wait(2000)
cy.title().should('eq',"Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!")
cy.get("a[class='_3RX0a-']").click()
cy.get("button[class='QqFHMw aEsfVh _7Pd1Fp'] span").should('have.text',"Login")
cy.go('back')

cy.title().should('eq',"Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!")

cy.go('forward')
cy.get("button[class='QqFHMw aEsfVh _7Pd1Fp'] span").should('have.text',"Login")


    })





})