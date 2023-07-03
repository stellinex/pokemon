'use client';
import { useState } from 'react';
import { PokemonCard } from './PokemonCard';
import { Sort, SortType } from './Sort';

interface Pokemon {
  name: string;
  url: string;
}

export const PokemonGrid = ({ pokemons }: { pokemons: Pokemon[] }) => {
  const [sort, setSort] = useState<SortType>(SortType.ID);
  const sortedByName = [...pokemons].sort((a, b) => (a.name < b.name ? -1 : 1));
  const sortedPokemons = sort === SortType.NAME ? sortedByName : pokemons;

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-[32px]">All the Pokemon!</h1>
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 grid-cols-1 md:grid-cols-3 xl:grid-cols-4 text-[20px]">
        {sortedPokemons.map((pokemon) => {
          const pokemonId = pokemon.url.split('/')[6];
          return (
            <PokemonCard key={pokemon.name} pokemonName={pokemon.name} pokemonId={pokemonId} />
          );
        })}
      </div>
    </>
  );
};
