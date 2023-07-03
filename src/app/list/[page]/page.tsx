'use client';
import { Pagination } from '@/components/Pagination';
import { PokemonGrid } from '@/components/PokemonGrid';

async function getPokemons(offset: number) {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=12`;
  const result = await fetch(url);
  return result.json();
}

export default async function List({ params: { page = '1' } }: { params: { page: string } }) {
  const offset = (Number(page) - 1) * 12;
  const data = await getPokemons(offset);

  return (
    <main className="flex flex-col p-12">
      <div>
        <PokemonGrid pokemons={data.results} />
        <Pagination page={page} />
      </div>
    </main>
  );
}
