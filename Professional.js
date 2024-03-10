import React from "react";
import "./App.css";
import Cock1 from "./images/cock1.jpg"
import Cock2 from "./images/cock2.jpg"
import Cock3 from "./images/cock3.jpg"

const Professional = () => {
    return (
        <>
        <div className="professional_container">
            <div className="professional_title">
                <h1>Meet our cocks</h1>
            </div>
            <div className="cards_professional">
                <div className="box_professional">
                    <img src= {Cock1} alt=""></img>
                    <img src= {Cock2} alt=""></img>
                    <img src={Cock3} alt=""></img>
                </div>
            </div>
            </div>
        </>
    );
}

export default Professional;