import {Card, ListGroup, ListGroupItem } from "react-bootstrap";
import ItemCount from "./itemCount"

const ItemDetail = ({productoElejido}) => {
  console.log(productoElejido[0])
    return (
        <div className="container">
        <h3>Detalle del producto</h3>
       { productoElejido[0] &&  <Card
              style={{ width: "18rem" }}
              className="blockquote  m-5 col-12"
            >
              <Card.Img variant="top" src={productoElejido[0].img} />
              <Card.Body>
                <Card.Title>{productoElejido[0].name}</Card.Title>
                <Card.Text>{productoElejido[0].descripcion}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{`$ ${productoElejido[0].precio}`}</ListGroupItem>
              </ListGroup>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{`Stock: ${productoElejido[0].stock}`}</ListGroupItem>
              </ListGroup>
              <ItemCount stock={productoElejido[0].stock}/>
            </Card>}
      </div>
    )
}

export default ItemDetail
