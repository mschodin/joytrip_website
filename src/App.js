import './App.css';
import React from 'react';
import NavBar from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience';
import Section from './Components/Section';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import "./fonts/SergiotrendyRegular-p72da.ttf";
import "./fonts/Nahista.ttf";

function App() {
  var home = <Home />;
  var about = <About />;
  var experience = <Experience />;
  var projects = <Projects />;
  var resume = <Resume />;

  return (
    <div className="App">
        <NavBar/>
        <div className="section0-background">
          <Section
            content={home}
            id="section0"
            className="section0-background"
          />
        </div>
        <div className="section1-background">
          <Section
            content={about}
            id="section1"
            className="section1-background"
          />
        </div>
        <div className="section2-background">
          <Section
            content={experience}
            id="section2"
            className="section2-background"
            />
        </div>
        <div className="section3-background">
          <Section
            content={projects}
            id="section3"
            className="section3-background"
            />
        </div>
        <div className="section4-background">
          <Section
            content={resume}
            id="section4"
          />
        </div>
    </div>
  );
}

export default App;

