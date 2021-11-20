/// <reference types="Cypress" />


// BASIC HW Cypress-1

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

// ADVANCED HW Cypress-1


describe('Oleh\'s Advanced Test', () => {
  let user;
  
  before(function () {
    cy.task("freshUser").then((object) => {
        user = object;
        user.password += 'Q1q';
    })
  })

  it('Visits Conduit Sign Up on Local ', () => {
    cy.visit('http://localhost:1667/#/register')
    cy.url().should('include', '/#/register')
    })

  it('Fills Username for Sign Up ', () => { 
    cy.get(':nth-child(1) > .form-control')
      .type(user.username)
      .should('have.value', user.username)
    })

  it('Fills Username for Sign Up ', () => { 
    cy.get(':nth-child(2) > .form-control')
      .type(user.email)
      .should('have.value', user.email)
    })

   it('Fills Username for Sign Up ', () => { 
     cy.get(':nth-child(3) > .form-control')
       .type(user.password)       
     })

   it('Clicks Sign Up bttn ', () => { 
     cy.get('.btn')
       .contains('Sign up')
       .click()
   })
   
  it('Asserts logged in User\'s username ', () => { 
    cy.get(':nth-child(4) > .nav-link')
      .contains(user.username)
      .should('exist')
    cy.get('.swal-button')
      .click()
   })
})
