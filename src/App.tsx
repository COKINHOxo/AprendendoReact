import "./App.css"
import { useEffect, useState } from "react";

type ResponsePokemon = {
  count: number
  next: string | null
  previous: string | null
  results: Pokemon[]
}

type Pokemon = {
  name: string
  url: string
}


function App() {
  const [listaPokemons, setListaPokemon] = useState<ResponsePokemon>();
  const [pesquisar, setPesquiser] = useState<string>("")

  function getPokemons() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=101&offset=0')
      .then((response) => response.json())
      .then((data) => setListaPokemon(data))
  }

  useEffect(() => getPokemons(), [])

  return (
    <div className="container">
      <h1>Lista de Pokemons</h1>
      <input type="text" placeholder="Pesquisar.." onChange={(e) => setPesquiser(e.target.value)} />
      <ul>
        {
          listaPokemons?.results
          .filter(pokemon => pokemon.name.includes(pesquisar.toLowerCase()))
            .map(pokemon => (
              <li>{pokemon.name}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
