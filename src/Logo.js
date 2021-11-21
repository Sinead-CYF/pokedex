import React from "react";

const Logo = (props) => {

  return (
    <header>
      <h1>Welcome to <br/> {props.appName}</h1>
      <img onClick = {props.handleClick}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="Pokemon"
      ></img>
    </header>
  );
};

export default Logo;
