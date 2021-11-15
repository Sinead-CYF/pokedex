import React from "react";

const BestPokemon = () => {
  const abilities = ["Agility", "Speed", "Adaptability"];

  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {abilities.map((element) => (
          <li key={element} class="abilities">
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
