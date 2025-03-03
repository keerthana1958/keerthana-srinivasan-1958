describe('Login', () => {
    const username = 'standard_user';
    const password = 'secret_sauce';
  
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/');
    });
  
    it('should login successfully with valid credentials', () => {
      cy.get('[data-test="username"]').type(username);
      cy.get('[data-test="password"]').type(password);
      cy.get('[data-test="login-button"]').click();
      cy.url().should('include', '/inventory.html');
    });
  
    it('fail to login invalid credentials', () => {
      cy.get('[data-test="username"]').type('invalid_user');
      cy.get('[data-test="password"]').type('invalid_password');
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="error"]').should('be.visible');
    });
  
    it('an error for empty username', () => {
      cy.get('[data-test="password"]').type(password);
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="error"]').should('contain', 'Username is required');
    });
  
    it('an error for empty password', () => {
      cy.get('[data-test="username"]').type(username);
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="error"]').should('contain', 'Password is required');
    });
  
    it('an error for empty username and password', () => {
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="error"]').should('contain', 'Username is required');
    });
  });