import React from "react";
import './App.css';
import Bean from "./images/bean1.jpg"
import Lasagne from "./images/lasagne.jpg"
import Pasta from "./images/pasta.jpg"
import Steak from "./images/steak.jpg"
import Chicken from "./images/chi.jpg"
import Strogonoff from "./images/strognoff.png"
import Pig from "./images/pig.jpg"


const Menu = () => {
    return (
        <>
        <div className="menu_container">
            <h1 className="menu_title">Our menu</h1>
            <h2 className="menu_subtitle">We have a diverse menu to cater to the whims of your palate.</h2>
            <div className="cards_container">
                <div className="box">
                <img src = {Bean} alt=""></img>
                <div className="title">Feijoada</div>
                <div className="price">U$S 11.99</div>
                <button className="go">Request</button>
                </div>
                <div className="box">
                <img src = {Lasagne} alt=""></img>
                <div className="title">Lasagne</div>
                <div className="price">U$S 13.99</div>
                <button className="go">Request</button>
                </div>
                <div className="box">
                <img src = {Pasta} alt=""></img>
                <div className="title">Pasta</div>
                <div className="price">U$S 9.99</div>
                <button className="go">Request</button>
                </div>
                <div className="box">
                <img src = {Steak} alt=""></img>
                <div className="title">Steak</div>
                <div className="price">U$S 19.99</div>
                <button className="go">Request</button>
                </div>
                <div className="box">
                <img src = {Chicken} alt=""></img>
                <div className="title">Rotisserie<br></br>Chicken</div>
                <div className="price">U$S 16.99</div>
                <button className="go">Request</button>
                </div>
                <div className="box">
                <img src = {Pig} alt=""></img>
                <div className="title">Rotisserie<br></br>Pork</div>
                <div className="price">U$S 19.99</div>
                <button className="go">Request</button>
                </div>
            </div>
            </div>
        </>
    );
}

export default Menu;