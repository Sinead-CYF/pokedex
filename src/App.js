import React from "react";
import "./App.css";
import Logo from "./Logo.js";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

const abilities = ["Agility", "Speed", "Adaptability"];

function App() {
  const logoWhenClicked = () => {
    console.log("Clicked!");
  };

  return (
    <div className="App">
      <Logo appName="Sinead's Pokedex" handleClick={logoWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}

export default App;
