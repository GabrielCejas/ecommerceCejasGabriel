import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap/";

const Footer = () => {
  return (
    <div className="footer">
      <Nav.Link as={Link} to="/Home">
        Home
      </Nav.Link>
    </div>
  );
};

export default Footer;
