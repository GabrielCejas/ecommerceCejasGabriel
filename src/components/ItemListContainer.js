import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const apiLista = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
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
        ]),
      2000
    );
  });
};

const ItemListContainer = (props) => {
  let [listas, setListas] = useState([]);

  useEffect(() => {
    apiLista().then((lista) => {
      setListas(lista);
    });
  }, []);

  return (
    <>
      <h2 className="greeting m-3 p-3">{props.greeting}</h2>
      <ItemList listas={listas} />
    </>
  );
};

export default ItemListContainer;
