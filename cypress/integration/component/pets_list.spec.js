
describe('My First Test', () => {
  before(() => {
    cy.intercept("/pets", {fixture: 'getPets.json'}).as('getPets')
    cy.visit('http://localhost:3000/')
  })

  it('Should load 3 Pets', () => {
    cy.wait('@getPets')
    cy.get('[test-id="pet-item"]')
    .should('have.length', 3)
  })
})