import { usePokemons } from "../shared/hooks/usePokemons";

function Pokemons() {
  const { listaPokemons, setPesquisar } = usePokemons()

  return (
    <div className="">
      <h1>Lista de Pokemons</h1>
      <input type="text" placeholder="Pesquisar.." onChange={(e) => setPesquisar(e.target.value)} />
      <ul>
        {
          listaPokemons?.results
            .map(pokemon => (
              <li>{pokemon.name}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default Pokemons;
