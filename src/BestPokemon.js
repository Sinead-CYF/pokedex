import React from "react";

const BestPokemon = (props) => {

  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {props.abilities.map((element) => (
          <li key={element} class="abilities">
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
