import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");

  const updateCity = (event) => {
    console.log(event.target.value);
    setCity(event.target.value);
  };

  return (
    <div className = "city-area-wrapper">
      <p>Welcome to the city of {city}</p>
      <input type="text" value={city} onChange={updateCity}/>
    </div>
  );
}

export default PokemonCity;
