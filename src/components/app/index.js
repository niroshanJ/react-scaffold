import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from '../navbar';
import Home from '../../pages/home';
import About from '../../pages/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function App() {
  return (
    <Router>
      <div class='container-fluid'>
        <NavBar />
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
