import React from "react";

const CaughtPokemon = () => {

const [caught, setCaught] = useState(0);

  const date = new Date().toLocaleDateString();
  return <p>Caught 0 Pokemon on {date}</p>;
};

export default CaughtPokemon;

/*In this exercise, we'll add a button to the CaughtPokemon component which adds one to 
  the number of Pokemon you have caught:

Caught 0 Pokemon on 20/11/2021Catch Pokemon

Open the pokedex React application and open the CaughtPokemon.js file.
Create a new state variable with useState. It should be named caught and be initialised to 0
Within the JSX, there should be a "hard-coded" number 0. Replace it with your new caught state.
Add a button to the component with an onClick handler that calls a function called catchPokemon.
Create the catchPokemon function and have it update the caught state so that it is increased by 1 on each click.
Click here if you are stuck.
Write down the things that will happen when you click the button. Compare your list with another trainee and discuss.
Click here for a hint. */
