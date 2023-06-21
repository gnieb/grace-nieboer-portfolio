
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
          <Home />
          <About />
          <Contact/>
          <ProjectPortfolio />
        
    </div>
  );
}

export default App;
