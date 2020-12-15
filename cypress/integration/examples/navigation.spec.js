/// <reference types="cypress" />

describe('Login', () => {
  it('acessar a home logada', () => {
    cy.visit('https://www.iupp.com.br/')
    cy.wait(1500)
    cy.get('.flex-item.mn-item.mn-login').click()
    cy.get('#username').type('41026879809')
    cy.wait(1500)
    cy.get('#btnContinue').click()
    cy.get('#password').type('Arthur20')
    cy.get('#btnEntrar').click()
    cy.wait(1500)
    cy.get('#tourHomeModal').contains('Bem-vindo ao iupp, ')
    cy.get('.btn-later').click()
  })

  it('acessar aos Dados', () => {
    cy.wait(2000)
    cy.get('#profile-menu').click()
    cy.get('.link-profile.txt-font-body.txt-body-sm.d-block.px-1.py-1').contains('Informações Pessoais').click()
    //cy.contains('Informações Pessoais').should('eq', 'Informações Pessoais')
    cy.wait(2000)
    cy.get('h2').contains('Informações Pessoais')
    
  })

  xit('acessar a home logada', () => {
    cy.visit('https://www.iupp.com.br/')
    cy.get('.flex-item.mn-item.mn-login').click()
    cy.get('#username').type('36588391803')
    cy.get('#btnContinue').click()
    cy.get('#password').type('Celsinho2101')
    cy.get('#btnEntrar').click()
    cy.wait(1500)
    cy.get('#tourHomeModal').contains('Bem-vindo ao iupp, ')
    cy.get('.btn-later').click()
  })


})
