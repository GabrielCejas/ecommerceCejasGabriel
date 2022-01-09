/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useContexto } from "../CartContext";

const ItemCount = ({ stock }) => {
  let [agregar, setAgregar] = useState(1);
  const { cantidadItems } = useContexto();

  useEffect(() => {
    cantidadItems(agregar);
  }, [agregar]);

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
    </>
  );
};

export default ItemCount;
