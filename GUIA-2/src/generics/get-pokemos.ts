import axios from "axios"
import { Pokemons } from "../interfaces/pokemons"

export const getPokemons = async (pokemonId:number): Promise<Pokemons> => {
    //{data} hacemos esto para destructurar el objeto y acceder solo a los pokemones osea la data
   const {data} = await axios.get<Pokemons>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
   //console.log(data.abilities[2].ability?.name)
    return data
}