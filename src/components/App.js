
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import ProjectPortfolio from './ProjectPortfolio';
import Contact from './Contact';

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
