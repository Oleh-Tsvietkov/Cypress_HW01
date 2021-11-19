
/// <reference types="Cypress" />

// describe('My First Test', () => {
//     it('Does not do much!', () => {
//       expect(true).to.equal(true)
//     })
//   })

//   describe('My First Test', () => {
//     it('Does not do much!', () => {
//       expect(true).to.equal(false)
//     })
//   })
  
// describe('My First Test', () => {
//     it('Visits the Kitchen Sink', () => {
//       cy.visit('https://example.cypress.io')
//     })
//   })

// describe('My First Test', () => {
//     it('finds the content "type"', () => {
//       cy.visit('https://example.cypress.io')
  
//       cy.contains('type').click()
//     })
//   })

//   describe('My First Test', () => {
//     it('clicking "type" navigates to a new url', () => {
//       cy.visit('https://example.cypress.io')
  
//       cy.contains('type').click()
  
//       // Should be on a new URL which includes '/commands/actions'
//       cy.url().should('include', '/commands/actions')
//     })
//   })

//   describe('My First Test', () => {
//     it('Gets, types and asserts', () => {
//       cy.visit('https://example.cypress.io')
  
//       cy.contains('type').click()
  
//       // Should be on a new URL which includes '/commands/actions'
//       cy.url().should('include', '/commands/actions')
  
//       // Get an input, type into it and verify that the value has been updated
//       cy.get('.action-email')
//         .type('fake@email.com')
//         .should('have.value', 'fake@email.com')
//     })
//   })

  
describe('Oleh\'s First Test', () => {
  it('Visits Conduit Sign In on Local ', () => {
    cy.visit('http://localhost:1667/#/login')
    cy.url().should('include', '/#/login')
  })

  it('Fills Email for Sign In ', () => {
    cy.get(':nth-child(1) > .form-control')
      .type('qwe@1.com')
      .should('have.value', 'qwe@1.com')
  })
   
  it('Fills Passowrd for Sign In ', () => { 
   cy.get(':nth-child(2) > .form-control')
     .type('Qwerty12')
     .should('have.value', 'Qwerty12')
  })

  it('Clicks Sign In bttn ', () => { 
   cy.get('.btn')
     .contains('Sign in')
     .click()
  })

  it('Asserts logged in User\'s username ', () => { 
    cy.get(':nth-child(4) > .nav-link')
      .contains('Qwe')
      .should('exist')
   })

})