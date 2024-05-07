import React from "react";

const ItemListConteiner = (props) => {
  return (
    <div>
      <h1 style={{color:"black"}}>{props.title}</h1>
        <div>{props.children}</div>
    </div>
  );
};

export default ItemListConteiner;
