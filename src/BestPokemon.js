import React from "react";

const BestPokemon = (props) => {

  return (
    <div className = "favorite-poke-wrapper">
      <p>My favorite Pokemon is Pidgeotto <br/> who's strengths include: </p>
      <ul>
        {props.abilities.map((element) => (
          <li key={element}>
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
