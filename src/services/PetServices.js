import httpClient from './HttpClient'

const getPets = async  function() {
  let pets;
  try{
    pets = await httpClient.get("pets")
  }catch(error){
    console.log("fallo de fetch")
    console.log(error)
    pets = [
      {name: "dogo1", race: "labrador", age: 5, isVaccinated: true},
      {name: "cato1", race: "siames", age: 3, isVaccinated: true},
      {name: "bat20", race: "chino", age: 20, isVaccinated: false},
    ]
  }
  return pets
}

export default {getPets}