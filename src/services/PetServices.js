import httpClient from './HttpClient'

const getPets = async  function() {
  let pets;
  try{
    pets = await httpClient.get("pets")
  }catch(error){
    pets = [
      {id: "0c09d99d-eb9f-4994-ba19-400b93d13558", name: "dogo", race: "labrador", age: 5, isVaccinated: true},
      {id: "f64a6e23-9046-4e29-b58c-ea2c67ee9e66", name: "cato", race: "siames", age: 3, isVaccinated: true},
      {id: "eada7d5e-1f5d-43b0-8c42-04342eb43496", name: "bat", race: "chino", age: 20, isVaccinated: false},
      {id: "cb29a142-a437-4038-a986-1e06a4b85cd3", name: "manchas", race: "criollo", age: 6, isVaccinated: false},
    ]
  }
  return pets
}

export default {getPets}
