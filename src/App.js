
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Skills from './Components/Skills';
import Education from './Components/Education';
import WorkExperience from './Components/WorkExperience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (

    <Router>
      <Header />
      <Navbar />
      <hr />
      <Route exact path="/PortfolioKhaidem/skills" component={Skills} />
      <Route exact path="/PortfolioKhaidem/education" component={Education} />
      <Route exact path="/PortfolioKhaidem/workexp" component={WorkExperience} />
      <Route exact path="/PortfolioKhaidem/projects" component={Projects} />
      <Route exact path="/PortfolioKhaidem/contact" component={Contact} />
    </Router>

  );
}

export default App;
