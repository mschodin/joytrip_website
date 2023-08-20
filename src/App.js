import './App.css';
import React from 'react';
import NavBar from './Components/Nav';
import Home from './Components/Home';
import Content from './Components/Content';
import AboutUs from './Components/AboutUs';
import Section from './Components/Section';
import Tour from './Components/Tour';
import Contact from './Components/Contact';
import "./fonts/SergiotrendyRegular-p72da.ttf";
import "./fonts/Nahista.ttf";

function App() {
  var home = <Home />;
  var content = <Content />;
  var aboutUs = <AboutUs />;
  var tour = <Tour />;
  var contact = <Contact />;

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
            content={content}
            id="section1"
            className="section1-background"
          />
        </div>
        <div className="section2-background">
          <Section
            content={aboutUs}
            id="section2"
            className="section2-background"
            />
        </div>
        <div className="section3-background">
          <Section
            content={tour}
            id="section3"
            className="section3-background"
            />
        </div>
    </div>
  );
}

export default App;

