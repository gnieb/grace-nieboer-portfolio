
import Home from './Home';
import {Route, Switch} from "react-router-dom";
import NavBar from './NavBar';
import About from './About';
import ProjectPortfolio from './ProjectPortfolio';
import Contact from './Contact';
// import "../index.css"

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
        <Route
        exact path="/contact">
          <Contact/>
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
