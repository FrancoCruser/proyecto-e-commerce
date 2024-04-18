import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./styles.css";

const NavBar = () => {
  return (
    <div>
      <header>
        <h1>E-Commerce</h1>
        <nav>
          <a href="">Home</a>
          <a href="">Products</a>
          <a href="">Contact</a>
        </nav>
        <CartWidget />
      </header>
    </div>
  );
};

export default NavBar;
