import pokemonApi from "@/api/pokemonApi";

describe('pokemonApi', ()=>{

    test('axios debe estar configurado con baseURL', () => { 
        console.log(pokemonApi)
        expect(pokemonApi.default.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
     })
    
})