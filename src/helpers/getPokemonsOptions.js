import pokemonApi from "../api/pokemonApi"
import capitalizarPrimeraLetra from "@/helpers/stringManager"

const getPokemons = () =>{
    const pokemonsArray = Array.from(Array(650))

    return pokemonsArray.map((a, index)=> index+1)
}

const getPokemonsOptions  = async () => {
    const mixedPokemons = getPokemons().sort(()=> Math.random() - 0.5)

    const pokemons= await getPokemonsNames(mixedPokemons.splice(0,4))

    return pokemons

    //console.table(pokemons)
}
 
const getPokemonsNames = async ( [a,b,c,d] = []) => {
    //arreglo de promesas, para ser ejecutadas todas
    const promisesArr =[
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]

    const [p1, p2, p3, p4] = await Promise.all(promisesArr)
    //sconsole.log(p1, p2, p3, p4)
    return[
        {name: capitalizarPrimeraLetra(p1.data.name), id: p1.data.id},
        {name: capitalizarPrimeraLetra(p2.data.name), id: p2.data.id},
        {name: capitalizarPrimeraLetra(p3.data.name), id: p3.data.id},
        {name: capitalizarPrimeraLetra(p4.data.name), id: p4.data.id},
    ]
}

export default getPokemonsOptions;