const  petsDB = require('./PetsDb')
const {v4 } = require('uuid')

const getPets = () => {
  return petsDB;
}

const addPet = (pets) => {
  for (const pet of pets){
    pet["id"] = v4()
    petsDB.push(pet)
  }
  return pets;
}

const delPet = async (id) => {
  const idx = await petsDB.indexOf((pet) => pet.id === id)
  petsDB.splice(idx,1)
}

module.exports = {getPets, addPet, delPet}