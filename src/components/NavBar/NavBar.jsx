import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./styles.css";
import Button from '@mui/material/Button';
import BasicMenu from "../BasicMenu/BasicMenu";
import { Link } from "react-router-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <header>
        <h1>E-Commerce</h1>
        <nav>
        <Button id="navButton" variant="contained" sx={{backgroundColor:"black"}}><Link className="linkk" to={"/"}>Home</Link></Button>
        <BasicMenu  />
        <Button id="navButton" variant="contained" sx={{backgroundColor:"black"}}>Contact</Button>
        </nav>
        <Button variant="outlined" sx={{backgroundColor:"black"}}><CartWidget sx={{color:"white"}} /></Button>
      </header>
    </div>
  );
};

export default NavBar;
 