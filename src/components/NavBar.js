import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap/";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import image from "../assets/login.svg";

const img = <img src={image} />;
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
      <Navbar.Brand className="mx-5" href="#home">
        <Nav.Link className="titulo" as={Link} to="/Home">
          Mercado Informatico
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="mx-5" id="responsive-navbar-nav">
        <Nav className="nav">
          <Nav.Link as={Link} to="/Home">
            Home
          </Nav.Link>
          <NavDropdown title="Productos" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/categoria/TodosLosProductos">
              Todos los Productos
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/categoria/Microprocesadores">
              Microprocesadores
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/categoria/Motherboards">
              Motherboards
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/categoria/Memorias">
              Memorias
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/categoria/Discos">
              Discos
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/categoria/PlacasDeVideo">
              Placas De Video
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/categoria/Gabinetes">
              Gabinetes
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={img}
            id="basic-nav-dropdown"
            className="login mx-3"
          >
            <NavDropdown.Item as={Link} to="/registro">
              Ingresá
            </NavDropdown.Item>

            <NavDropdown.Item as={Link} to="/crearCuenta">
              Creá tu cuenta
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/Carrito">
            <CartWidget />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
