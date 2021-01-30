import PetsDashboardPage from '../../support/page-objects/PetsDashboardPage'


describe('Pets list should', () => {
  
  const petsDashboard = new PetsDashboardPage();

  it('load 3 Pets', () => {
    petsDashboard.interceptGetPetsRequest({fixture: 'getPets/getPets'})
    petsDashboard.visit()

    petsDashboard.waitGetPetsResponse() //remove if not necessary
    petsDashboard.getListItems()
      .should('have.length', 3)
  })

  it('show empty list message when getPets list is empty', () => {
    petsDashboard.interceptGetPetsRequest({fixture: 'getPets/empty'})
    petsDashboard.visit()

    petsDashboard.waitGetPetsResponse()
    petsDashboard.getEmptyListMessage()
      .should('be.visible')
      .and('have.text', "No hay mascotas disponibles")
  })
})