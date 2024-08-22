export const getAllPokemons = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=101&offset=0")
    const data = await response.json()

    return data
}

export const getPokemonByName = async (name: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()

    return data
}