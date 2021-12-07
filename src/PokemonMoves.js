import React, { useState, useEffect } from "react";

function PokemonMoves(props) {
  let [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokemonData(data);
      });
  }, [props.pokemonId]);

  return (
    <div>
      {pokemonData ? (
        <div>
          <p>{pokemonData.name}'s moves:</p>
          <ul>
            {pokemonData.moves.map((move, index) => {
              return <li key={index}>{move.move.name}</li>;
            })}
          </ul>
        </div> ) : (
        <span>Loading ...</span>
      )}
    </div>
    );
}

export default PokemonMoves;
