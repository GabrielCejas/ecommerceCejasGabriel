import React from "react";
import { useNavigate } from "react-router-dom";
import { useContexto } from "../CartContext";

const Cart = () => {
  let navigate = useNavigate();
  const { carrito, removeItem, clear, precioTotal } = useContexto();
  return (
    <>
      <h3 className="carritoTitulo">Carrito</h3>
      {carrito.length > 0 ? (
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
          <h5>Precio Total: {precioTotal}</h5>
          <button className="botonCarritoVolver">Terminar mi Compra</button>
          <button className="CarritoBoton" onClick={clear}>
            Vaciar carrito
          </button>
        </div>
      ) : (
        <div className="carritoContenedor container">
          <h4 className="h4CarritoVolver">No hay productos en el Carrito</h4>
          <button
            className="botonCarritoVolver"
            onClick={() => navigate("/categoria/TodosLosProductos")}
          >
            Volver a Productos
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
