import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContexto } from "../CartContext";

const ItemDetail = ({ productoElejido }) => {
  let navigate = useNavigate();
  const [ofBoton, setOfBoton] = useState(true);
  const { addItem, cantidadTotal } = useContexto();

  const OfButton = () => {
    setOfBoton(false);
  };

  const onAdd = (item) => {
    addItem(item);
  };

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
          {ofBoton && (
            <ItemCount stock={productoElejido[0].stock} Of={OfButton} />
          )}
          <Button
            variant="warning"
            className="m-3"
            onClick={() => {
              onAdd({
                name: productoElejido[0].name,
                img: productoElejido[0].img,
                precio: productoElejido[0].precio,
                id: productoElejido[0].id,
                cantidad: cantidadTotal,
              });
            }}
            disabled={!productoElejido[0].stock}
          >
            Agregar al Carrito
          </Button>
          <Button
            variant="warning"
            className="m-3"
            onClick={() => navigate("/Carrito")}
          >
            Terminar mi compra
          </Button>
        </Card>
      )}
    </div>
  );
};

export default ItemDetail;
