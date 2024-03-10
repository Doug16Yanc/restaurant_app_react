import './App.css';
import React from "react";
import Logo from "./images/logo.jpg";

const Header = () => {
  return (
    <header className="header">
       <a href="#" className="logo">
        <img src={Logo} alt="" width="50px"/>
       </a>
       <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#menu">Menu</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
        <div className="button">
        <button className="login">Login</button>
        </div>
       </nav>
    </header>
  );
}

export default Header;
