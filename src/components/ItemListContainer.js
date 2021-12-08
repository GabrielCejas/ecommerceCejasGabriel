import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
let img = require(`../assets/i9.webp`).default;

const ItemListContainer = (props) => {
  return (
      <>
      <h2 className="greeting m-3 p-3">{props.greeting}</h2>
    <Card style={{ width: "18rem" }} className="container m-5">
      <Card.Img variant="top" src={img}/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.descripcion}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{`$ ${props.precio}`}</ListGroupItem>
      </ListGroup>
      <Card.Body className="d-flex justify-content-between">
        <Card.Link className="botonMasMenos" href="#">
          +
        </Card.Link>
        <Card.Link className="botonMasMenos" href="#">
          -
        </Card.Link>
      </Card.Body>
      <Button variant="warning" className="m-3">
        Agreagr al Carrito
      </Button>
    </Card>
    </>
  );
};

export default ItemListContainer;
