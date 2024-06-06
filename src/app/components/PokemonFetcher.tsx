"use client";

// src/components/PokemonFetcher.tsx
import React from 'react';
import { useAtom } from 'jotai';
import { pokemonAtom, refreshPokemonAtom } from '../atoms';

console.log('pokemonAtom', pokemonAtom);

const PokemonFetcher: React.FC = () => {
  const [pokemon] = useAtom(pokemonAtom);
  const [, refreshPokemon] = useAtom(refreshPokemonAtom);

  console.log('pokemon', pokemon.data);

  return (
    <div>
      <button onClick={refreshPokemon}>Fetch Random Pokémon</button>
      {pokemon.data ? (
        <div>
          <h2>{pokemon.data.name}</h2>
          <img src={pokemon.data.sprites?.front_default} alt={pokemon.data.name} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PokemonFetcher;
