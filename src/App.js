import './App.css';
import PetsDashboard from './pages/PetsDashboard'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <PetsDashboard />        
          </Route>
          <Route path="/registration">
            <PetsDashboard />        
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
