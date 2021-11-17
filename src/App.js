import React from "react";
import "./App.css";
import Logo from "./Logo.js";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

const abilities = ["Agility", "Speed", "Adaptability"];


function App() {
  return (
    <div className="App">
      <Logo appName="Sinead's Pokedex" />
      <BestPokemon abilities = {abilities}/>
      <CaughtPokemon />
    </div>
  );
}

export default App;
