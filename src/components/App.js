
import Home from './Home';
import {Route, Switch} from "react-router-dom";
import NavBar from './NavBar';
import About from './About';
import ProjectPortfolio from './ProjectPortfolio';

function App() {
  return (
    <div className="App">
        <NavBar />
        
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route 
        exact path= "/portfolio">
          <ProjectPortfolio />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
