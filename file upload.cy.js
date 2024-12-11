describe('Upload',()=>
    {
        it('upload',()=>

    {
     cy.visit("https://the-internet.herokuapp.com/upload")
     cy.get("#file-upload").attachFile('dummy.pdf')
     cy.get("#file-submit").click()
     cy.wait(5000)
     cy.get("div[class='example'] h3").should('have.text','File Uploaded!')



    })



    it('rename',()=>

        {
         cy.visit("https://the-internet.herokuapp.com/upload")
         cy.get("#file-upload").attachFile({filePath:'dummy.pdf',fileName:'rename.pdf'})
         cy.get("#file-submit").click()
         cy.wait(5000)
         cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    




})
it('drag-n-drop',()=>

    {
     cy.visit("https://the-internet.herokuapp.com/upload")
     cy.get("#drag-drop-upload").attachFile('dummy.pdf',{subjectType: 'drag-n-drop'})
     cy.get("#file-submit").click()
     cy.wait(5000)
     














})
it('multi-upload',()=>

    {
     cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
     cy.get("#filesToUpload").attachFile(['dummy.pdf','dummy - Copy.pdf'])

     cy.wait(5000)



    })
    it.only('shadow dom',()=>

        {
         cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/")
         cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('dummy.pdf')
    
         cy.wait(5000)
    
    
    
        })
    

})