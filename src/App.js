import React, { useEffect,useState,useRef } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './Pages/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Skills from './Pages/Skills/Skills';
import Project from './Pages/Project/Project';
import Footer from './Components/Footer';
import { useInView } from 'react-intersection-observer';
import { InView } from "react-intersection-observer";

function App() {

  useEffect(() => {
    const smoothScroll = (targetId) => {
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    };

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        smoothScroll(targetId);
      });
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);
  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = () => {
    setExpanded(false); // Close the collapsed menu when a nav item is clicked
  };

const homeRef=useRef(null);
const aboutRef=useRef(null);
const contactRef=useRef(null);
const skillRef=useRef(null);
const projectRef=useRef(null);



  return (
    <div className="App">
  
  <Navbar expand="lg" expanded={expanded} className='fixed-top '>
      <Container className='text-white'>
        <Navbar.Brand href="#home" className='text-white'>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='w-[10%] bg-white' onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav" className="flex justify-content-center ">
          <Nav className=''>
            <Nav.Link href="#home" className="nav-link" onClick={handleNavItemClick}>Home</Nav.Link>
            <Nav.Link href="#about" className="nav-link" onClick={handleNavItemClick}>About</Nav.Link>
            <Nav.Link href="#skills" className="nav-link" onClick={handleNavItemClick}>Skills</Nav.Link>
            <Nav.Link href="#project" className="nav-link" onClick={handleNavItemClick}>Project</Nav.Link>
            <Nav.Link href="#contact" className="nav-link" onClick={handleNavItemClick}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <main >
      <InView onChange={(inView) => inView && homeRef.current.classList.add('home')}>
          <section id="home" className="section" ref={homeRef}>
            <Home />
          </section>
        </InView>


        <InView onChange={(inView) => inView && aboutRef.current.classList.add('aboutText','aboutImage')}>
          <section id="about" className="section max-md:h-4/5" ref={aboutRef}>
            <About  />
          </section>
        </InView>

      <InView onChange={(inView) => inView && skillRef.current.classList.add('skill')}>  
        <section id="skills" className="section" ref={skillRef} >
          <Skills />
        </section></InView>

        <InView onChange={(inView) => inView && projectRef.current.classList.add('aboutText')}>  
        <section id="project" className="section" ref={projectRef} >
          <Project />
        </section>
        </InView>

        <InView onChange={(inView) => inView && contactRef.current.classList.add('contactText')}>  
        <section id="contact" className="section" ref={contactRef} >
          <Contact />
        </section>
        </InView>
      </main>
      <Footer/>
    </div>

  );
}

export default App;
