/// <reference types="cypress"/>

// Tarefa

describe('Funcionalidade Login',()=>{

  beforeEach(()=>{
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  afterEach(()=>{
      cy.screenshot()
  })


  it('Deve Fazer login com sucesso',()=>{
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('teste@teste.com')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.page-title').should('contain', 'Minha conta')
  })

  it('Deve exibir uma mensagem de erro ao inserir usuario invalido',()=>{
      cy.get('#username').type('alunohehehehe@teste.com')
      cy.get('#password').type('teste@teste.com')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.woocommerce-error').should('contain',' e-mail desconhecido')
  })

  it('Deve exibir uma mensagem de erro ao inserir senha invalido',()=>{
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('@teste.com')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.woocommerce-error').should('contain','está incorreta')

  })
})