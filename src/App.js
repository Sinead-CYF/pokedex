import React from "react";
import "./App.css";
import Logo from "./Logo.js";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

const abilities = ["Agility", "Speed", "Adaptability"];


function App() {

  const logoWhenClicked = () => {
    console.log("Clicked!");
};


  return (
    <div className="App">
      <Logo appName="Sinead's Pokedex" handleClick = {logoWhenClicked}/>
      <BestPokemon abilities = {abilities}/>
      <CaughtPokemon />
    </div>
  );
}

export default App;
