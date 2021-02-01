import config from '../../support/config.test'

describe('Pets list dashboard', () => {
  
  beforeEach(() => {
    cy.request(config.apiUrl+'/pets')
    .then((response) => {
      return JSON.parse(response.allRequestResponses[0]["Response Body"])
    }).each(pet => {
      cy.request('DELETE', config.apiUrl+`/pets?id=${pet.id}`)
    })
  })

  it('load 3 Pets', () => {  
    const pets = [
      {"id":"2a6278b0-778a-4aee-89e1-c166f72161b4", "name": "auto-thanos", "race": "labrador", "age": 5, "isVaccinated": true},
      {"id":"9226eae2-0044-445b-b004-b47859f0c09b","name": "auto-tommy", "race": "siames", "age": 3, "isVaccinated": true},
      {"id":"817173ff-c50e-4d21-aa67-8fc71b6524ce","name": "auto-banano", "race": "egipcio", "age": 20, "isVaccinated": false}
    ]
    cy.request({method: 'POST', url: config.apiUrl+`/pets`, body: pets})    
    cy.visit('/')

    cy.get('[test-id="pet-item"]')
      .should('have.length', 3)
  })


  it('show empty list message when getPets list is empty', () => {
    cy.visit('/')

    cy.get('[test-id="empty-pet-list"]')
      .should('be.visible')
      .and('have.text', "No hay mascotas disponibles")
  })
})
