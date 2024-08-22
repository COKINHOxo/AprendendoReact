import { useEffect, useReducer } from "react";
import { Pokemon } from "../types/pokemon.type";
import { getAllPokemons } from "../services/pokemon.service";


type InitialStateProps = {
  pokemon: Pokemon
  pokemons: Pokemon[]
  filter: string
  pokemonsFiltrados: Pokemon[]
}

type ActionProps = {
  type: string,
  payload: any
}

const initialState: InitialStateProps = {
  pokemon: {} as Pokemon,
  pokemons: [],
  filter: '',
  pokemonsFiltrados: []
}


const reducer = (state: InitialStateProps, action: ActionProps) => {
  switch (action.type) {
    case "SET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
        pokemonsFiltrados: action.payload,
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
        pokemonsFiltrados: state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(action.payload.toLowerCase()))
      };
    default: 
      return state
  }
};


export function usePokemons() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPokemons = async () => {
    const data = await getAllPokemons()
    
    dispatch({
      type: "SET_POKEMONS",
      payload: data?.results
    })
  }


  const setFilter = (name: string) => {
    dispatch({
      type: 'SET_FILTER',
      payload: name
    })
  }


  useEffect(() => {
    getPokemons()
  }, []);

  return { ...state, setFilter };
}
