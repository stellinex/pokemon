import Image from 'next/image';

export const PokemonCard = ({
  pokemonName,
  pokemonId,
}: {
  pokemonName: string;
  pokemonId: string;
}) => {
  return (
    <div
      key={pokemonName}
      className="inline-flex rounded-xl items-center border-gray-200 p-4 border"
    >
      <div className="inline-flex h-[72px] w-[72px] bg-[#00000022] rounded-full">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
          alt={pokemonName}
          width={100}
          height={100}
        />
      </div>
      <span className="ml-3">{pokemonName}</span>
    </div>
  );
};
