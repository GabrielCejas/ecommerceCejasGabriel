import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import { useNavigate } from "react-router-dom";
import { useContexto } from "../CartContext";
import { bDato } from "../firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Cart = () => {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  const { carrito, removeItem, clear, precioTotal } = useContexto();
  const comprar = () => {
    const ventasdb = collection(bDato, "ventas");
    addDoc(ventasdb, {
      buyer: {
        name: "Gabriel",
        lastName: "Cejas",
        email: "correo@hotmail.com",
      },
      items: carrito,
      date: serverTimestamp(),
      total: precioTotal,
    }).then(() => {
      toggleShow();
      clear();
    });
  };
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
                  <img src={imagen} alt="imagen"/>
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
          <button className="botonCarritoVolver CarritoBoton" onClick={comprar}>
            Terminar mi Compra
          </button>
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
      <Toast show={show} onClose={toggleShow} bg="warning">
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
