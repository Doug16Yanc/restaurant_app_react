import React from "react"
import './App.css';
import AboutUs from "./images/frango.jpg"

const About = () => {
    return (
    <>
    <section className="about" id="about">
        <div className="heading">
            About us
        </div>
        <div className="row">
            <div className="imagem">
            <img src={AboutUs} alt="" />
            </div>
            <div className="content">
            <h1>
                Why choice us?
                </h1>
                <p>
                Prepare to embark on a sensory journey like no other. 
                Our carefully curated menu features a harmonious blend
                of flavors and textures inspired by global cuisines.
                From the first bite to the last, each dish is a work of 
                art that delights the palate and ignites the senses, 
                leaving you craving more.
                </p>
              </div>  
        </div>
    </section>
    </>
    );
}

export default About;