import {Card, ListGroup, ListGroupItem } from "react-bootstrap";
import ItemCount from "./itemCount"

const ItemDetail = ({productoElejido}) => {
    console.log(productoElejido)
    return (
        <div className="container">
        <h3>Detalle del producto</h3>
            <Card
              style={{ width: "18rem" }}
              className="blockquote  m-5 col-12"
            >
              <Card.Img variant="top" src={productoElejido.img} />
              <Card.Body>
                <Card.Title>{productoElejido.name}</Card.Title>
                <Card.Text>{productoElejido.descripcion}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{`$ ${productoElejido.precio}`}</ListGroupItem>
              </ListGroup>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{`Stock: ${productoElejido.stock}`}</ListGroupItem>
              </ListGroup>
              <ItemCount stock={productoElejido.stock}/>
            </Card>
      </div>
    )
}

export default ItemDetail
