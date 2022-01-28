import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContexto } from "../CartContext";
import { bDato } from "../firebase/firebase";

function Formulario({ toggleShow }) {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const { carrito, precioTotal, clear } = useContexto();

  const comprar = () => {
    const ventasdb = collection(bDato, "ventas");
    addDoc(ventasdb, {
      buyer: form,
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
      <form className="col-4 container">
        <div className="mb-3">
          <label htmlFor="Username" className="form-label">
            Ingrese su nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="Username"
            aria-describedby="Username"
            name="nombre"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Username" className="form-label">
            Ingrese su apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="Username"
            name="apellido"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Ingrese su email
          </label>
          <input
            type="mail"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            onChange={handleChange}
          />
        </div>
      </form>
      <button className="botonCarritoVolver CarritoBoton" onClick={comprar}>
        Terminar mi Compra
      </button>
    </>
  );
}

export default Formulario;
