import React, { useState } from "react";

const CaughtPokemon = () => {
  let [caught, setCaught] = useState([]);

  function getRandomPokemon() {
    const pokemon = [
      "Charizard",
      "Mewtwo",
      "Pikachu",
      "Hypno",
      "Jigglypuff",
      "Magmar",
      "Meowth",
      "Onyx",
      "Snorlax",
      "Mew",
      "Eevee",
      "Squirtle",
      "Gyarados",
      "Pidgeotto",
      "Alakazam",
      "Jolteon",
      "Charmander",
      "Bulbasaur",
      "Arcanine",
      "Poliwrath",
      "Machamp",
      "Scyther",
      "Golbat",
      "Hitmonchan",
      "Kadabra",
      "Ninetales",
      "Machoke",
      "Charmeleon",
      "Wartortle",
      "Rapidash",
      "Beedrill",
      "Raichu",
      "Growlithe",
      "Geodude",
      "Metapod",
      "Poliwhirl",
      "Dugtrio",
      "Pidgeot",
      "Electrode",
      "Raticate",

    ];

    const random = Math.floor(Math.random() * pokemon.length);
    return pokemon[random];
  }

  function catchPokemon() {
    setCaught(caught.concat(getRandomPokemon()));
  }

  const date = new Date().toLocaleDateString();
  return (
    <div className="bottom-area-wrapper">
      <p className = "caughtPoke-num">{caught.length}</p>
      <p className = "caughtPoke-para">Pokemon caught on:</p>
      <p className = "date">{date}</p>
      <button onClick={catchPokemon}>Gotta catch 'em all !</button>
      <ul>
        {caught.map((pokemon, index) => {
          return <li key={index}>A wild {pokemon}!</li>;
        })}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
