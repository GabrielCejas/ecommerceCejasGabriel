import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap/";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
      <Navbar.Brand className="mx-5" href="#home">
        Mercado Informatico
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="mx-5" id="responsive-navbar-nav">
        <Nav className="nav">
          <Nav.Link  as={Link} to="/Home">Home</Nav.Link>
          <Nav.Link eventKey={2} as={Link} to="/Nosotros">Nosotros</Nav.Link>
          <NavDropdown title="Productos" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/TodosLosProductos">Todos los Productos</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Microprocesadores">Microprocesadores</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Motherboards">Motherboards</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Memorias">Memorias</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Discos">Discos</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/PlacasDeVideo">Placas De Video</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Gabinetes">Gabinetes</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link  as={Link} to="/Carrito"><CartWidget /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
