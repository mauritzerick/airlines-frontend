import FlightSearch from './FlightSearch';
import Reservation from './Reservation';
import Home from './Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <Router>
      <div className="App">
        <h1>Is this shit working?</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/reservation">Reservation</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/search">
            <FlightSearch />
          </Route>
          <Route path="/reservation">
            <Reservation/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
