// src/atoms.ts
import { atom } from 'jotai';
import { atomWithQuery } from 'jotai-tanstack-query';

const randomPokemonId = () => Math.floor(Math.random() * 898) + 1;

export const pokemonIdAtom = atom(randomPokemonId());

export const pokemonAtom = atomWithQuery((get) => ({
  queryKey: ['pokemon', get(pokemonIdAtom)],
  queryFn: async () => {
    const id = get(pokemonIdAtom);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  },
}));

export const refreshPokemonAtom = atom(null, (get, set) => {
  set(pokemonIdAtom, randomPokemonId());
});
