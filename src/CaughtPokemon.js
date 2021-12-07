import React, { useState } from "react";

const CaughtPokemon = () => {
  const date = new Date().toLocaleDateString();
  let [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  function catchPokemon() {
    if (pokemonNameInput === "") {
      alert("Enter Pokemon Name");
    } else {
      setCaught([...caught, pokemonNameInput]);
      setPokemonNameInput("");
    }
  }

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }

  return (
    <div className="bottom-area-wrapper">
      <p className="caughtPoke-num">{caught.length}</p>
      <p className="caughtPoke-para">Pokemon caught on:</p>
      <p className="date">{date}</p>
      <input
        type="text"
        name="caught"
        placeholder="I caught ..."
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
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

// function getRandomPokemon() {

//   const random = Math.floor(Math.random() * pokemon.length);
//   return pokemon[random];
// }

// let pokemon = [
//   "Charizard",
//   "Mewtwo",
//   "Pikachu",
//   "Hypno",
//   "Jigglypuff",
//   "Magmar",
//   "Meowth",
//   "Onyx",
//   "Snorlax",
//   "Mew",
//   "Eevee",
//   "Squirtle",
//   "Gyarados",
//   "Pidgeotto",
//   "Alakazam",
//   "Jolteon",
//   "Charmander",
//   "Bulbasaur",
//   "Arcanine",
//   "Poliwrath",
//   "Machamp",
//   "Scyther",
//   "Golbat",
//   "Hitmonchan",
//   "Kadabra",
//   "Ninetales",
//   "Machoke",
//   "Charmeleon",
//   "Wartortle",
//   "Rapidash",
//   "Beedrill",
//   "Raichu",
//   "Growlithe",
//   "Geodude",
//   "Metapod",
//   "Poliwhirl",
//   "Dugtrio",
//   "Pidgeot",
//   "Electrode",
//   "Raticate",
// ];
