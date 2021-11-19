/// <reference types="Cypress" />

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

