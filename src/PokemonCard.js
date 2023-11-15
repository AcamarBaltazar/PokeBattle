// src/PokemonCard.js
import React from 'react';
import './Pokemon.css';

const PokemonCard = ({ id, name, health, type }) => {
  
  const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return (
    <div className="pokemon-card">
      <div className='text-name'>{name}</div>
      <img className='pic' src={imgURL} alt={name} />
      <div className='text-type'>Type: {type}</div>
      <div className='text-hp'>Health: {health}</div>
    </div>
  );
};

export default PokemonCard;