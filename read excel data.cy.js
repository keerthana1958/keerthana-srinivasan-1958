describe('Read Excel file', () => {
    it('should read data from an Excel file', () => {
      const filePath = 'cypress/fixtures/test-data.xlsx';
  
      cy.task('parseExcel', { filePath }).then((rows) => {
        expect(rows.length).to.be.greaterThan(0);
        expect(rows[0]).to.have.property('Name', 'John Doe');
        expect(rows[0]).to.have.property('Age', 30);
      });
    });
  });