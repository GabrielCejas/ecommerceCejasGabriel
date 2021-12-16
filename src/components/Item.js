
import { Container, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import ItemCount from "./itemCount"

const Item = ({lista}) => {
  return (
    <>
      <Container className="d-flex">
        {lista.map((lista) => {
          return (
            <Card
              key={lista.name}
              style={{ width: "18rem" }}
              className="container m-5 col-4"
            >
              <Card.Img variant="top" src={lista.img} />
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
              <ItemCount stock={lista.stock}/>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default Item;
