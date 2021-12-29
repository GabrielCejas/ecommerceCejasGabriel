import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  let [listas, setListas] = useState([]);
  const { id } = useParams();

  const getApi = async () => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((lista) => {
        id === "TodosLosProductos"
          ? setListas(lista)
          : setListas(lista.filter((lista) => lista.categoria == id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getApi();
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
