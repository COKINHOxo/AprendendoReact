import { usePokemons } from "../shared/hooks/usePokemons";
import { Pokemon } from "../shared/types/pokemon.type";

function Pokemons() {
  const { pokemonsFiltrados, setFilter} = usePokemons()


  return (
    <div className="">
      <h1>Lista de Pokemons</h1>
      <input type="text" placeholder="Pesquisar.." onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {
          pokemonsFiltrados?.map((pokemon: Pokemon) => (
              <li>{pokemon.name}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default Pokemons;
