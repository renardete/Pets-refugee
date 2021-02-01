import React, {useState, useEffect} from 'react'
import PetServices from '../../services/PetServices'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClipboardCheck, faTimesCircle, faSyringe} from '@fortawesome/free-solid-svg-icons'


const PetsList = function() {
  const isCancelled = React.useRef(false);
  const [pets, setPets] = useState([])

  useEffect(() => {
    fetchPets()
    return () => {
      isCancelled.current = true;
    };
  }, [])

  async function fetchPets() {
    const pets = await PetServices.getPets()
    if(!isCancelled.current){
      setPets(pets)
    }
  }

  return (
    <div>      
      <div className="row table-responsive mx-0">
        <table className="table table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Raza</th>
              <th scope="col">Edad</th>
              <th scope="col"><FontAwesomeIcon icon={faSyringe}/> Vacunado</th>
            </tr>
          </thead>
          <tbody>
            {pets.map(pet => {
              return (
                <tr key={pet.id} test-id="pet-item">
                  <td test-id="pet-name" >{pet.name}</td>
                  <td test-id="pet-race">{pet.race}</td>
                  <td test-id="pet-age">{pet.age}</td>
                  <td test-id="pet-is-vaccinated">{pet.isVaccinated
                    ? <FontAwesomeIcon icon={faClipboardCheck}/>
                    : <FontAwesomeIcon icon={faTimesCircle}/>}</td>
                </tr>
              )             
            })}
          </tbody>
        </table>        
          {pets.length === 0 && 
            <div test-id="empty-pet-list">No hay mascotas disponibles</div>
          }
      </div>
    </div>
  );
}

export default PetsList