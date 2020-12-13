/// <reference types="cypress" />

context('acesso area logada iuppi', () => {
  it('acesso', () => {
    cy.visit('https://www.iupp.com.br/')
    cy.get('.flex-item.mn-item.mn-login').click()
    cy.get('#username').type('36588391803')
    cy.get('#btnContinue').click()
    cy.get('#password').type('Celsinho2101')
    cy.get('#btnEntrar').click()
    cy.wait(1000*9)
    cy.get('#tourHomeModal').contains('Bem-vindo ao iupp, ')
    cy.get('.btn-later').click()
  })

})
