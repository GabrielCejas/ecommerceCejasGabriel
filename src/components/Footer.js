import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap/";

const Footer = () => {
  return (
    <div className="footer">
      <Nav className="navFooter">
        <Nav.Item>
          <Nav.Link className="btnFooter" as={Link} to="/Home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="btnFooter" as={Link} to="/Nosotros">
            Nosotros
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="btnFooter"
            as={Link}
            to="/categoria/TodosLosProductos"
          >
            Productos
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Footer;
