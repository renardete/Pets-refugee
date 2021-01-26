import PetItem from './PetItem'
import React, {useState, useEffect} from 'react'
import PetServices from '../../services/PetServices'

const PetsList = function() {

  const [pets, setPets] = useState([])

  useEffect(async () => {
    const pets = await PetServices.getPets()
    setPets(pets)
  }, [])

  return (
    <div>      
      <div className="row table-responsive mx-0">
        <table className="table table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Raza</th>
              <th scope="col">Edad</th>
              <th scope="col">Vacunado</th>
            </tr>
          </thead>
          <tbody>
            {pets.map(pet => {
              return <PetItem pet={pet} />
            })}
          </tbody>
        </table>        
      </div>
    </div>
  );
}

export default PetsList