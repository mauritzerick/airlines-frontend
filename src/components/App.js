import SearchForm from './SearchForm';
import Home from './Home';
import Result from './Result';

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
              <Link to="/results">Result</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/search">
            <SearchForm />
          </Route>
          <Route path="/results">
            <Result />
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
