import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Function for naviagtion bar
const NavigationBar = () => {
  return (
    <div className="app-container">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
          <Navbar.Brand href="#home">My Diary</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/create">Create</Nav.Link>
            <Nav.Link href="/viewdiary">Entries</Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
          </Container>
      </Navbar>
      </div>
  );
};

export default NavigationBar;