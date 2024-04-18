import React from "react";

const ItemListConteiner = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <ul>
        <li>{props.elemento1}</li>
        <li>{props.elemento2}</li>
        <li>{props.elemento3}</li>
      </ul>
    </div>
  );
};

export default ItemListConteiner;
