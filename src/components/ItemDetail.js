import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContexto } from "../CartContext";

const ItemDetail = ({ productoElejido, id }) => {
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
      {productoElejido.img && (
        <Card style={{ width: "18rem" }} className="blockquote  m-5 col-12">
          <Card.Img
            variant="top"
            src={require(`../assets/${productoElejido.img}`).default}
          />
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
          {ofBoton && <ItemCount stock={productoElejido.stock} Of={OfButton} />}
          <Button
            variant="warning"
            className="m-3"
            onClick={() => {
              onAdd({
                name: productoElejido.name,
                img: productoElejido.img,
                precio: productoElejido.precio * cantidadTotal,
                id: id,
                cantidad: cantidadTotal,
              });
            }}
            disabled={!productoElejido.stock}
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
