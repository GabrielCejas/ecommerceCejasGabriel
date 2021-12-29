import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ productoElejido }) => {
  let navigate = useNavigate();
  return (
    <div className="container">
      <h3>Detalle del producto</h3>
      {productoElejido[0] && (
        <Card style={{ width: "18rem" }} className="blockquote  m-5 col-12">
          <Card.Img
            variant="top"
            src={require(`../assets/${productoElejido[0].img}`).default}
          />
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
          <ItemCount stock={productoElejido[0].stock} />
          <Button
            variant="warning"
            className="m-3"
            onClick={() => navigate("/cart")}
          >
            Terminar mi compra
          </Button>
        </Card>
      )}
    </div>
  );
};

export default ItemDetail;
