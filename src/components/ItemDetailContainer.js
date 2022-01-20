import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { bDato } from "../firebase/firebase";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  let [producto, setProducto] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const productosCollection = collection(bDato, "productos");

    const refDoc = doc(productosCollection, id);
    getDoc(refDoc)
      .then((resultado) => {
        setProducto(resultado.data());
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <ItemDetail productoElejido={producto} id={id} />
    </>
  );
};

export default ItemDetailContainer;
