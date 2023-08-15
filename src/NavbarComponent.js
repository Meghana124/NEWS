import React  from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavbarComponent = () => {


  


  return (
    <Navbar bg="info" expand="lg" >
      <Navbar.Brand as={Link} to="/">  <h1> News </h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/politics" >Politics</Nav.Link>
          <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
        <Nav.Link as={Link} to="/technical">Technical</Nav.Link>
        <Nav.Link as={Link} to="/sports">Sports</Nav.Link>

          <NavDropdown title="Social Media" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/youtube">Youtube </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/facebook">Facebook </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/instagram">Instagram </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/twitter">Twitter </NavDropdown.Item>
          </NavDropdown>

          
          <NavDropdown title="E-Commerce" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/amazon">Amazon</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/flipkart">Flipkart </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/myntra">Myntra </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Country" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/dropdown/item2">US News</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/dropdown/item3">Other News </NavDropdown.Item>
          </NavDropdown>

       


       
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
