it('upload',()=>

    {
     cy.visit("https://the-internet.herokuapp.com/upload")
     cy.get("#file-upload").attachFile('dummy.pdf')
     cy.get("#file-submit").click()
     cy.wait(5000)
     cy.get("div[class='example'] h3").should('have.text','File Uploaded!')



    })