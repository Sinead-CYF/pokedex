import React from "react";
import "./App.css";

const Logo = () => {
  const appName = "Sinead's Pokedex";
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

const BestPokemon = () => {
  const abilities = ["Agility", "Speed", "Adaptability"];

  return (
  <div>
    <p>My favorite Pokemon is Squirtle</p>
    <ul>
      {abilities.map((element) => (
      <li key={element} class = "abilities">{element}</li>
      ))}
    </ul>
  </div>
  );
};

const CaughtPokemon = () => {
  const date = new Date().toLocaleDateString();
  return <p>Caught 0 Pokemon on {date}</p>;
};

function App() {
  return (
    <div className="App">
      <Logo />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
}

export default App;
