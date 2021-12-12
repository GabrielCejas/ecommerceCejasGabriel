import React, { useState } from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Container,
} from "react-bootstrap";

const ItemCount = ({ list, msj, onAdd }) => {
  let [agregar, setAgregar] = useState(1);

  return (
    <Container className="d-flex">
      {list.map((lista) => {
        const clickAdd = () => {
          if (agregar < lista.stock) {
            setAgregar(agregar + 1);
          }
        };
        const clickRemove = () => {
          if (agregar > 0) {
            setAgregar(agregar - 1);
          }
        };
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
            <Card.Body className="d-flex justify-content-between">
              <Card.Link className="botonMasMenos btn" onClick={clickAdd}>
                +
              </Card.Link>
              <p>{agregar}</p>
              <Card.Link className="botonMasMenos btn" onClick={clickRemove}>
                -
              </Card.Link>
            </Card.Body>
            <p>{msj}</p>
            <Button
              variant="warning"
              className="m-3"
              onClick={() => onAdd(agregar)}
              disabled={!lista.stock}
            >
              Agregar al Carrito
            </Button>
          </Card>
        );
      })}
    </Container>
  );
};

export default ItemCount;
