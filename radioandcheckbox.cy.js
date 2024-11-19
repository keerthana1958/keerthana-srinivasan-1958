/// <reference types="Cypress" />
describe('UI',()=>
{

it('radio button',()=>
{

cy.visit("https://www.ironspider.ca/forms/checkradio.htm")

cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > blockquote:nth-child(33) > form:nth-child(1) > input:nth-child(3)").should('be.visible')
cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > blockquote:nth-child(33) > form:nth-child(1) > input:nth-child(5)").should('be.visible')
cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > blockquote:nth-child(33) > form:nth-child(1) > input:nth-child(7)").should('be.visible')

cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > blockquote:nth-child(33) > form:nth-child(1) > input:nth-child(3)").check().should('be.checked')
cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > blockquote:nth-child(33) > form:nth-child(1) > input:nth-child(5)").should('not.be.checked')
cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > blockquote:nth-child(33) > form:nth-child(1) > input:nth-child(7)").should('not.be.checked')


})

it('checkbox',()=>
{

cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
cy.get("input[value='yellow']").should('be.visible')
cy.get("input[value='yellow']").check().should('be.checked')
cy.get('input[type="checkbox"]').check().should('be.checked')
cy.get('input[type="checkbox"]').uncheck().should('not.be.checked')
cy.get('input[type="checkbox"]').first().check().should('be.checked')
cy.get('input[type="checkbox"]').last().check().should('be.checked')

})






})