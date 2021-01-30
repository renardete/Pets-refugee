class PetsDashboardPage {

  visit(){
    cy.visit('/')
  }

  getListItems(){
    return cy.get('[test-id="pet-item"]')
  }

  getEmptyListMessage(){
    return cy.get('[test-id="empty-pet-list"]')
  }

  interceptGetPetsRequest(fixture){
    cy.intercept("/pets", fixture).as('getPets')
  }

  waitGetPetsResponse(){
    cy.wait('@getPets')
  }

}

export default PetsDashboardPage;