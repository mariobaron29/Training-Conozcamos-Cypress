/// <reference types="cypress" />

describe(' Test', function() {
  it('Visits the Apiumhub Site', function() {
    cy.visit('https://apiumhub.com')
    cy.get('.dropdown-toggle').contains('About')
  })
 })