import './App.css';
import Home from './pages/home/home.js';
import CrearLink from './pages/crear-personal-link/crear-link.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="navbar_container">
        <div className="navbar_container__text">
            <div>
                Personal Linktree
            </div>
        </div>
        <div className="navbar_container__categorias">
            <nav className="navbar_container__categorias--nav">
                <ul className="nav_list">
                    <li className="nav_list__item">
                      <Link to="/Personal_linktree">
                        Home
                      </Link>
                    </li>
                    <li className="nav_list__item">
                      <Link to="/crear">
                        Crea tu propio linktree
                      </Link>
                    </li>
                    <li className="nav_list__item">
                      <Link to="/mi-link">
                        Mi linktree                    
                      </Link>
                    </li>
                </ul>
            </nav>
        </div>
      </div>

      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/crear">
            <CrearLink />
          </Route>
          <Route path="/mi-link">
            <CrearLink />
          </Route>
      </Switch>
    </Router>
  )
}

export default App;