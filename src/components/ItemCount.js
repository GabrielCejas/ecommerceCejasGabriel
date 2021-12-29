import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const ItemCount = ({ stock }) => {
  let [agregarCarrito, setAgregarCarrito] = useState("");
  let [agregar, setAgregar] = useState(1);

  const onAdd = (cantidad) => {
    setAgregarCarrito(
      (agregarCarrito = `Se agrego al carrito ${cantidad} unidades`)
    );
  };

  const clickAdd = (stock) => {
    if (agregar < stock) {
      setAgregar(agregar + 1);
    }
  };
  const clickRemove = () => {
    if (agregar > 0) {
      setAgregar(agregar - 1);
    }
  };
  return (
    <>
      <Card.Body className="d-flex justify-content-between">
        <Card.Link
          className="botonMasMenos btn"
          onClick={() => clickAdd(stock)}
        >
          +
        </Card.Link>
        <p>{agregar}</p>
        <Card.Link className="botonMasMenos btn" onClick={clickRemove}>
          -
        </Card.Link>
      </Card.Body>
      <p>{agregarCarrito}</p>
      <Button
        variant="warning"
        className="m-3"
        onClick={() => onAdd(agregar)}
        disabled={!stock}
      >
        Agregar al Carrito
      </Button>
    </>
  );
};

export default ItemCount;
