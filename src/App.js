import React, {useEffect} from 'react';
import './App.css';
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import SkillsSection from "./components/SkillsSection"
import Projects from "./components/Projects"
import Contact from './components/Contact';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'; 


function App() { 
  
  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => console.log(data))
  }, [])

  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <SkillsSection/>
      <Projects/>      
      <Contact/>
      <Resume/>
      <Footer/>   
    </div>
  );
}

export default App;
