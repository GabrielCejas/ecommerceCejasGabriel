import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"

const getItem = () => {
    return new Promise((resolve, reject) => {
        setTimeout(
          () =>
            resolve(
              {
                name: "Procesador gamer Intel Core i9",
                descripcion:
                  "Ejecuta con rapidez y eficiencia cualquier tipo de programa sin afectar el funcionamiento total del dispositivo.",
                precio: 88000,
                img: require(`../assets/i9.webp`).default,
                stock: 10,
              }
            ),
          2000
        );
      });
}

const ItemDetailContainer = (props) => {
    let [producto, setProducto] = useState({});

    useEffect(() => {
        getItem().then((item) => {
            setProducto(item);
        });
      }, []);


    return (
        <>
            <ItemDetail productoElejido={producto}/>
        </>
    )
}

export default ItemDetailContainer
