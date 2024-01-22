import React from 'react';
import './App.css';
import Home from './components/home/Home.jsx';
import About from './components/About/About.jsx'
import Service from './components/Service/service.jsx';
import Project from './components/Projects/project.jsx';
import Testimonial from './components/Testimonials/testimonial.jsx';
import Contact from './components/ContactForm/contact.jsx';
import Navbar from './components/Navbar/navbar.jsx'

function App() {


  return (
      <main className='main' >
        <Navbar/>
        <Home />
        <About />
        <Service />
        <Project />
        <Testimonial />
        <Contact />
      </main>
  );
}


export default App;
