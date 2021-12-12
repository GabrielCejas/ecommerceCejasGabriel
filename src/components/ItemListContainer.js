import React, { useState } from "react";
import ItemCount from "./ItemCount";

const lista = [
  {
    name: "Procesador gamer Intel Core i9",
    descripcion:
      "Ejecuta con rapidez y eficiencia cualquier tipo de programa sin afectar el funcionamiento total del dispositivo.",
    precio: 88000,
    img: require(`../assets/i9.webp`).default,
    stock: 10,
  },
  {
    name: "Procesador gamer Intel Core i10",
    descripcion:
      "Ejecuta con rapidez y eficiencia cualquier tipo de programa sin afectar el funcionamiento total del dispositivo.",
    precio: 108000,
    img: require(`../assets/i9.webp`).default,
    stock: 8,
  },
];

const ItemListContainer = (props) => {
  let [agregarCarrito, setAgregarCarrito] = useState("");

  const onAdd = (cantidad) => {
    setAgregarCarrito(
      (agregarCarrito = `Se agrego al carrito ${cantidad} unidades`)
    );
  };
  return (
    <>
      <h2 className="greeting m-3 p-3">{props.greeting}</h2>
      <ItemCount list={lista} onAdd={onAdd} msj={agregarCarrito} />
    </>
  );
};

export default ItemListContainer;
