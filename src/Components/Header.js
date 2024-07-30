import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary " >
      <Container style={{backgroundColor:"#03054"}}>
        <Navbar.Brand href="/" className='text-3xl'>PortFolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
        <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-end ' >
          <Nav className="">
            <Nav.Link  id="home" className='active'>Home</Nav.Link>
            <Nav.Link  id="about">About</Nav.Link>
            <Nav.Link  id="service">Services</Nav.Link>
            <Nav.Link id="skills">Skills</Nav.Link>
            <Nav.Link id="project">Project</Nav.Link>
            <Nav.Link  id="contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;