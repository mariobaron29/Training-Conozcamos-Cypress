/// <reference types="cypress" />

it('returns JSON', () => {
  cy.request('breeds/image/random')
    .its('headers')
    .its('content-type')
    .should('include', 'application/json')
 })
 it('Validate the status', () => {
   cy.request('breeds/image/random')
  .its('status')
        .should('equal',200);
 })
