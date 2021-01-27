import httpClient from './HttpClient'

const getPets = async  function() {
  let pets;
  try{
    pets = await httpClient.get("pets")
  }catch(error){
    console.log("fallo de fetch")
    console.log(error)
    pets = []
  }
  return pets
}

export default {getPets}