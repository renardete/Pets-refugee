describe('Pets list should', () => {
  
  it('load 3 Pets', () => {
    // Inteceptamos la peticion de /pets y retornamos un json
    cy.intercept("/pets", {fixture: 'getPets/getPets'})

    // Visitamos la app
    cy.visit('/')

    // Verificamos que se renderizacion de los 3 registros
    cy.get('[test-id="pet-item"]')
      .should('have.length', 3)
  })
})