import { pokemon } from "./decorators/depokemon";

/* import { getPokemons } from "./generics/get-pokemos";



getPokemons(17)
.then(pokemon => console.log(pokemon.sprites.front_default))
.catch(error => console.log(error))
.finally(() => console.log("finalizacion")) */

const charmander = new pokemon("Charmander")

//pokemon.prototype.name = "pika"
console.log(charmander)

charmander.savePokemonDB(20)