import React, { useState, useEffect } from 'react';
import Pokedex from './Pokedexsss';
import './Pokemon.css';

// Utility function to calculate total health
const calculateTotalHealth = (pokemons) => {
  return pokemons.reduce((totalHealth, pokemon) => totalHealth + pokemon.health, 0);
};

function PokemonChallenge({ player1Pokemons, player2Pokemons }) {
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const determineWinner = () => {
      const player1Health = calculateTotalHealth(player1Pokemons);
      const player2Health = calculateTotalHealth(player2Pokemons);

      if (player1Health > player2Health) {
        setWinner('Pokemon Trainer Mar');
      } else if (player2Health > player1Health) {
        setWinner('Pokemon Master Red');
      } else {
        setWinner('It\'s a tie!');
      }
    };

    determineWinner();
  }, [player1Pokemons, player2Pokemons]);

  return (
    <div className='overlay'>
      <h3 className='p1-name'>Mar's Pokémon</h3>
      <div className='p1-pokemons'>
        <Pokedex pokemonData={player1Pokemons} />
        <div>
          <p className='text-total'>Total Health: </p>
          <p className='total-hp-text'>{calculateTotalHealth(player1Pokemons)}</p>
        </div>
        </div>
      <div><h1 className='VS'>VS</h1></div>
      <div className='secondP'>
      <h3 className='p2-name'>Red's Pokémon</h3>
      <div className='p2-pokemons'>
        <div><p className='text-total'>Total Health: </p>
        <p className='total-hp-text'>{calculateTotalHealth(player2Pokemons)}</p></div>
        <Pokedex pokemonData={player2Pokemons} />
      </div>
      </div>

      {winner && <h2 className='winner'>The winner is: {winner}</h2>}
    </div>
  );
}

export default PokemonChallenge;