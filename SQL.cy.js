describe('SQL', () => {
    it('should query the database', () => {
      const query = 'SELECT * FROM users WHERE id = 1';
  
      cy.task('sqlServer:query', query).then(result => {
        expect(result).to.have.lengthOf(1);
        expect(result[0]).to.have.property('name', 'John Doe');
      });
    });
  });