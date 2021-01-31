import React from "react";

export default function Pokemonlist(props) {
  const pokemonList = props.pokemon;
  return (
    <div>
      {pokemonList.map((p) => (
        <div>{p}</div>
      ))}
    </div>
  );
}
