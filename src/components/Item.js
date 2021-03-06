import {
  Container,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ lista }) => {
  return (
    <>
      <Container className="d-flex flex-wrap">
        {lista.map((lista) => {
          return (
            <Card
              key={lista.name}
              style={{ width: "18rem" }}
              className="container m-5 col-4"
            >
              <Card.Img
                variant="top"
                src={require(`../assets/${lista.img}`).default}
              />
              <Card.Body>
                <Card.Title>{lista.name}</Card.Title>
                <Card.Text>{lista.descripcion}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{`$ ${lista.precio}`}</ListGroupItem>
              </ListGroup>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{`Stock: ${lista.stock}`}</ListGroupItem>
              </ListGroup>
              <Button as={Link} to={`/DetalledelProducto/${lista.id}`}>
                Detalle del Producto
              </Button>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default Item;
