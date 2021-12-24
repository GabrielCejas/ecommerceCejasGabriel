import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const apiLista = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            categoria: 'Microprocesadores',
            name: "Procesador gamer Intel Core i9",
            descripcion:
              "Ejecuta con rapidez y eficiencia cualquier tipo de programa sin afectar el funcionamiento total del dispositivo.",
            precio: 88000,
            img: require(`../assets/i9.webp`).default,
            stock: 10,
          },
          {
            id: 2,
            categoria: 'Motherboards',
            name: "Motherboards",
            descripcion:
              "Motherboard X99+ Dual E5-2660v3 +64 Gb Ddr4 + Coolers X 2.",
            precio: 250000,
            img: require(`../assets/MotherboardX99.jpg`).default,
            stock: 8,
          },
          {
            id: 3,
            categoria: 'Memorias',
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
  const  {id}  = useParams();  

  useEffect(() => {
    apiLista()
      .then((lista) => {
        (id === 'TodosLosProductos')? setListas(lista) 
        :
        setListas(lista.filter(lista => lista.categoria == id));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="container">
      <h2 className="greeting m-3 p-3">{props.greeting}</h2>
      <h3>Lista de productos</h3>
      <ItemList listas={listas} />
    </div>
  );
};

export default ItemListContainer;
