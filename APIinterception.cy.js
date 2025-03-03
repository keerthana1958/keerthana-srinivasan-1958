describe('Fetch', () => {
    it('fetch request', () => {
      cy.visit('https://example.cypress.io/commands/network-requests')
  
      cy.window().then((win) => {
        cy.stub(win, 'fetch').resolves(new Response(JSON.stringify({ name: 'Cypress' })))
  
        win.fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => {
            expect(data.name).to.equal('Cypress')
          })
      })
    })
  })
  describe('XHR', () => {
    it('XHR', () => {
      cy.visit('https://example.cypress.io/commands/network-requests')
  
      cy.server()
      cy.route('GET', 'https://jsonplaceholder.typicode.com/users', [{ name: 'Cypress' }]).as('getUsers')
  
      cy.window().then((win) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
        xhr.onload = () => {
          const data = JSON.parse(xhr.responseText)
          expect(data[0].name).to.equal('Cypress')
        }
        xhr.send()
      })
  
      cy.wait('@getUsers')
    })
  })