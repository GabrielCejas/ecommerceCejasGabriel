import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap/";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand className="mx-5" href="#home">
        Mercado Informatico
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="mx-5" id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
          <NavDropdown title="Productos" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Microprocesadores
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Motherboards</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Memorias</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Discos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Placas De Video
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Gabinetes</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
