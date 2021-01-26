import React from 'react'

const PetItem = function (props) {

  console.log(props.pet)
  return (
    <tr test-id="pet-item">
      <td test-id="pet-name" >{props.pet.name}</td>
      <td test-id="pet-race">{props.pet.race}</td>
      <td test-id="pet-age">{props.pet.age}</td>
      <td test-id="pet-is-vaccinated">{props.pet.isVaccinated}</td>
    </tr>
  );
}

export default PetItem