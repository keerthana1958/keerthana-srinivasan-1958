describe('Iframe Test', () => {
    it('should interact with elements inside an iframe', () => {
      cy.visit('https://the-internet.herokuapp.com/iframe'); 

  
     
      const iframe=cy.getIframe('#mce_0_ifr').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
      iframe.clear().type("Welcome {cmd+a}")
      cy.get("[aria-label='Bold']").click()

       
    });
  });