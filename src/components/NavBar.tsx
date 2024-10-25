interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar({ pokemonList, setPokemonIndex }: NavBarProps) {
  const handleClick = (index: number) => setPokemonIndex(index);

  return (
    <div>
      {pokemonList.map((pokemon, index) => {
        return (
          <button key={pokemon.name} type="button" onClick={() => handleClick(index)}>
            {pokemon.name}
          </button>
        );
      })}
    </div>
  );
}

export default NavBar;
