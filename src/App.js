import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Sociallinks from './Component/Sociallinks';
import Skills from './Component/Skills';
import Contact from './Component/Contact';
import Projects from './Component/Projects';
function App() {
  return (
   <div>
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>

    <Sociallinks/>
    
   </div> 
    
    );
}
export default App;








