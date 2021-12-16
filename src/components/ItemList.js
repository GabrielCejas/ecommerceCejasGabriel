import React from "react";
import Item from "./Item";

const ItemList = (props) => {

  return (
    <Item lista={props.listas.map((lista => {return (lista)} ))} />
  );
};

export default ItemList;


