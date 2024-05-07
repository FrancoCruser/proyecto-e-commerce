import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <div style={{color:"white"}}>
      <ShoppingCartIcon sx={{color:"white"}} />
      15
    </div>
  );
};

export default CartWidget;
