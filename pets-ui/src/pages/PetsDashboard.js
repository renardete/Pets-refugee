import PetsList from '../components/pets-list/PetsList'
import AddPetsModal from '../components/add-pets/AddPetsModal'
import {Link} from 'react-router-dom'
import './PetsDashboard.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaw, faUser, faCog, faPlus} from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';

const PetsDashboard = function() {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand mb-0 h1"><FontAwesomeIcon icon={faPaw}/> Refugio de mascotas</span>
        </Link>
        <span className="navbar-text">
          <button className="btn btn-info mr-sm-2"><FontAwesomeIcon icon={faUser}/></button> 
          <button className="btn btn-info mr-sm-2"><FontAwesomeIcon icon={faCog}/></button>
        </span>
      </div>
    </nav>
       
      <div className="container">
        <div className="row justify-content-end pb-1">
          <div className="col-2 align-self-end">
              <Button variant="success" onClick={handleShow}>
              <FontAwesomeIcon icon={faPlus}/> agregar
              </Button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <PetsList />
          </div>
        </div>
      </div>

      <AddPetsModal show={show}/>

      <footer className="p-3 mb-2 bg-info text-white container-fluid">
      <div className='row justify-content-center'>
        <span>
          <FontAwesomeIcon icon={faPaw}/> Refugio de mascotas 
        </span>
      </div>
      <div className='row justify-content-center'>
        <a className=' text-white' href="https://github.com/renardete/Pets-refugee">https://github.com/renardete/Pets-refugee</a>
      </div>
      </footer>
    </div>
  );
}

export default PetsDashboard