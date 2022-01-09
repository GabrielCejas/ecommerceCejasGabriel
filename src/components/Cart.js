import React from "react";
import { useContexto } from "../CartContext";

const Cart = () => {
  const { carrito, removeItem, clear } = useContexto();
  return (
    <>
      <h3 className="carritoTitulo">Carrito</h3>
      <div className="carritoContenedor container">
        {carrito.length > 0 &&
          carrito.map((item) => {
            let imagen = require(`../assets/${item.img}`).default;
            return (
              <div className="carritoCard">
                <img src={imagen} />
                <h5>{item.name}</h5>
                <h5>Precio: ${item.precio}</h5>
                <h5>Cantidad: {item.cantidad}</h5>
                <button onClick={() => removeItem(item.id)}>❌</button>
              </div>
            );
          })}
        <button className="CarritoBoton" onClick={clear}>
          Vaciar carrito
        </button>
      </div>
    </>
  );
};

export default Cart;
