/// <reference types="cypress"/>

describe('Funcionalidade Pagina de produtos', ()=>{

    beforeEach(()=>{
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')

    });

    it('Deve selecionar o produto', () => {
        cy.get('[class="product-block grid"]')
        .contains('Beaumont Summit Kit')
        .click()
        
    });

    it.only('Deve adicionar item ao carrinho', () => {

        let quant = 3; 

        cy.get('[class="product-block grid"]')
        .contains('Beaumont Summit Kit')
        .click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-XL').click() // por algum motivo precisa dar 2 clicks :/
        cy.get('.button-variable-item-Yellow').click()
        cy.get('.input-text').clear().type(quant)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain',quant)
        cy.get('.woocommerce-message').should('contain', quant+' × “Beaumont Summit Kit” foram adicionados no seu carrinho.')
    });

})  