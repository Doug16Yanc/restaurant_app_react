import './App.css';
import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Professional from './Professional';


const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Menu/>
      <Professional/>
    </div>
  );
  }
export default App;
