/// <reference types="cypress"/>

const { faker } = require('@faker-js/faker');

describe('Funcionalidade pré cadastro', ()=>{

    beforeEach(()=>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o precadastro',()=>{
        // variaveis
        let email = faker.internet.email();
        let firstName = faker.person.firstName();
        let lastName = faker.person.lastName();

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('!teste@teste#teste')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').type(firstName)
        cy.get('#account_last_name').type(lastName)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso')

    })

})