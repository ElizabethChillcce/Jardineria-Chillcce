import React from "react";
/* import { Link } from "react-router-dom"; */
import { Navbar } from "./../Navbar/Navbar";
import logo from "../../images/logo.png";

export const Home = () => {
  return (
   <>
   <Navbar />
   <img src={logo} className="laptop" alt="logo" />
   <h1>Jardineria Chillcce</h1>
   </>
  );
}
