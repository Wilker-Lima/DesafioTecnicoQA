
// / <reference types="cypress" /:

describe('Seleção', () => {
    it('Quando eu selecionar 1 botão, então é mostrado uma nova resposta', () => {

        cy.visit('https://the-internet.herokuapp.com/challenging_dom')
        cy.get('a[class=button]').click()
        cy.get('.button.success').click()
        cy.get('.button.alert').click()

        cy.get('a[href*="#edit"]').each(($element) => {
            cy.wrap($element).click()
        })

        cy.get('a[href*="#delete"]').each(($element) => {
            cy.wrap($element).click()
        })
    });
});