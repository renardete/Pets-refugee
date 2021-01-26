import PetsList from '../components/pets-list/PetsList'
import {Link} from 'react-router-dom'

const PetsDashboard = function() {

  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
        <Link to="/">
          <span class="navbar-brand mb-0 h1">Pets Vacc</span>
        </Link>
        </div>
      </nav>
       
      <div className="container">
        <div className="row justify-content-end pb-1">
          <div className="col-2 align-self-end">
             <Link to="/registration">
              <button className="btn btn-success">
                Registrar mascota
              </button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <PetsList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetsDashboard