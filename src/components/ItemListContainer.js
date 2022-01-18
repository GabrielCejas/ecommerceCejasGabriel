import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { bDato } from "../firebase/firebase";
import { getDocs, query, collection, where } from "firebase/firestore";

const ItemListContainer = (props) => {
  let [listas, setListas] = useState([]);
  const { categoria } = useParams();
  useEffect(() => {
    const productosCollection = collection(bDato, "productos");
    if (categoria) {
      const consulta = query(
        productosCollection,
        where("categoria", "==", categoria)
      );
      getDocs(consulta)
        .then(({ docs }) => {
          setListas(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (categoria == "TodosLosProductos") {
      getDocs(productosCollection)
        .then(({ docs }) => {
          setListas(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [categoria]);

  return (
    <div className="container">
      <h2 className="greeting m-3 p-3">{props.greeting}</h2>
      <h3>Lista de productos</h3>
      <ItemList listas={listas} />
    </div>
  );
};

export default ItemListContainer;
