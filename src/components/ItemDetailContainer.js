import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";

const getItem = () => {
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
}

const ItemDetailContainer = (props) => {
    let [producto, setProducto] = useState([]);
    const  {id}  = useParams();   

    useEffect(() => {
        getItem().then((item) => {
            setProducto(item.filter(lista => lista.id == id));
        });
      }, [id]);

    return (
        <>
          <ItemDetail productoElejido={producto}/>
        </>
    )
}

export default ItemDetailContainer
