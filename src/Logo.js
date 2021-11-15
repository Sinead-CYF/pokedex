import React from "react";

const Logo = () => {
  const appName = "Sinead's Pokedex";
  return (
    <header>
      <h1>Welcome to {appName}</h1>;
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="Pokemon"
      ></img>
      ;
    </header>
  );
};

export default Logo;
