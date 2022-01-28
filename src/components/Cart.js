import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContexto } from "../CartContext";
import Toast from "react-bootstrap/Toast";
import Formulario from "./Formulario";

const Cart = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  let navigate = useNavigate();
  const { carrito, removeItem, precioTotal, clear } = useContexto();

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
                  <img src={imagen} alt="imagen" />
                  <h5 className="nombre">{item.name}</h5>
                  <h5 className="Precio">Precio: ${item.precio}</h5>
                  <h5 className="Cantidad">Cantidad: {item.cantidad}</h5>
                  <button
                    className="buttonDelete"
                    onClick={() => removeItem(item.id)}
                  >
                    ❌
                  </button>
                </div>
              );
            })}
          <h5>Precio Total: ${precioTotal}</h5>
          <Formulario toggleShow={toggleShow}/>
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
      <Toast
        show={show}
        onClose={toggleShow}
        bg="warning"
        className="container"
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Compra Finalizada</strong>
        </Toast.Header>
        <Toast.Body>
          Felicitaciones, su pago se realizo satisfactoriamente
        </Toast.Body>
      </Toast>
    </>
  );
};

export default Cart;
