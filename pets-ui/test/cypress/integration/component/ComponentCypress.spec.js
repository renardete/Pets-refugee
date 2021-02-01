
describe('Pets list should', () => {
  
  it('load 3 Pets', () => {
    cy.intercept("/pets", {fixture: 'getPets/getPets'})
    cy.visit('/')

    cy.get('[test-id="pet-item"]')
      .should('have.length', 3)
  })

  it('show empty list message when getPets list is empty', () => {
    cy.intercept("/pets", {fixture: 'getPets/empty'})
    cy.visit('/')

    cy.get('[test-id="empty-pet-list"]')
      .should('be.visible')
      .and('have.text', "No hay mascotas disponibles")
  })
})