import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const getApi = async () => {
  fetch("http://localhost:3000/api")
    .then((res) => res.json())
    .catch((res) => console.log(res));
};

const ItemDetailContainer = () => {
  let [producto, setProducto] = useState([]);
  const { id } = useParams();

  const getApi = async () => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((item) => {
        setProducto(item.filter((lista) => lista.id == id));
      });
  };

  useEffect(() => {
    getApi();
  }, [id]);

  return (
    <>
      <ItemDetail productoElejido={producto} />
    </>
  );
};

export default ItemDetailContainer;
