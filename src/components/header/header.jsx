import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import UserContext from "../usercontext/usercontext";

const Header = () => {
  const location = useLocation();

  const { user } = useContext(UserContext);


  const hiddenNavbarRoutes = ["/"];
  if (hiddenNavbarRoutes.includes(location.pathname)) {
    return null;
  }

  return (
    <Navbar bg="light" variant="light" expand="lg" fixed="top">
      <Container className="demo">
        <Navbar.Brand className="brand">Ktb</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            {user && user.isAdmin ? <Nav.Link as={Link} to="/contact-list">Contact List</Nav.Link> : <Nav.Link as={Link} to="/contact">Contact</Nav.Link>}


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
