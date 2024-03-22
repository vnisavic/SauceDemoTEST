// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="Cypress"/>

Cypress.Commands.add('logIn', (url, username, pass)=>{
     cy.visit(url)
     cy.get('[data-test="username"]').type(username)
     cy.get('[data-test="password"]').type(pass)
     cy.get('#login-button').click()
})

Cypress.Commands.add('isVisible',(element)=>{

     element.should('be.visible').and('exist')
     
})

Cypress.Commands.add('textProof', (element, text)=>{

     cy.get(element).should('have.text', text)

})