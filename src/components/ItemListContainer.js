import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";


const apiLista = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            name: "Procesador gamer Intel Core i9",
            descripcion:
              "Ejecuta con rapidez y eficiencia cualquier tipo de programa sin afectar el funcionamiento total del dispositivo.",
            precio: 88000,
            img: require(`../assets/i9.webp`).default,
            stock: 10,
          },
          {
            id: 2,
            name: "Procesador gamer Intel Core i10",
            descripcion:
              "Ejecuta con rapidez y eficiencia cualquier tipo de programa sin afectar el funcionamiento total del dispositivo.",
            precio: 108000,
            img: require(`../assets/i9.webp`).default,
            stock: 8,
          },
          {
            id: 3,
            name: "Memoria RAM",
            descripcion:
              "Características de Kingston HyperX Fury DDR4 16 GB.",
            precio: 16000,
            img: require(`../assets/memoriaRAM.jpg`).default,
            stock: 15,
          },
        ]),
      2000
    );
  });
};

const ItemListContainer = (props) => {
  let [listas, setListas] = useState([]);

  useEffect(() => {
    apiLista()
      .then((lista) => {
        setListas(lista);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="greeting m-3 p-3">{props.greeting}</h2>
      <h3>Lista de productos</h3>
      <ItemList listas={listas} />
    </div>
  );
};

export default ItemListContainer;
