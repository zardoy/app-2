/// <reference types="cypress" />

it('Renders without crash', () => {
    cy.visit('/')
    cy.get('form').contains('Password')
})
