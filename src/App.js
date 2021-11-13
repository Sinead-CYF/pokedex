import React from "react";
import "./App.css";

const Logo = () => {
  const appName = "Pokedex";
  return (
    <header>
      <h1>Welcome to the {appName}</h1>;
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="Pokemon"
      ></img>
      ;
    </header>
  );
};

const FavPokemon = () => {
  return <p>My favorite Pokemon is Squirtle</p>;
};

const CaughtPokemon = () => {
  const date = new Date().toLocaleDateString();
  return <p>Caught 0 Pokemon on {date}</p>;
};

function App() {
  return (
    <div className="App">
      <Logo />
      <FavPokemon />
      <CaughtPokemon />
    </div>
  );
}

export default App;
