import getPokemonsOptions, { getPokemons, getPokemonsNames } from "@/helpers/getPokemonsOptions"
import { pokemonsMock } from "../mocks/pokemons.mock"


describe('getPokemonsOptions helpers', ()=>{

    test('debe regresar un arreglo de numeros', () => { 
        const pokemons = getPokemons()

        expect( pokemons.length).toBe(650)
        
        expect(pokemons[0]).toBe(1)
        expect(pokemons[325]).toBe(326)
        expect(pokemons[649]).toBe(650)

     })
    test('debe retornar un arreglo de cuatro pokemons', async ()=>{

        const pokemons = await getPokemonsNames([1,2,3,4])

        expect(pokemons[0].name).toBe('Bulbasaur')
        expect(pokemons[1].name).toBe('Ivysaur')
        expect(pokemons[2].name).toBe('Venusaur')
        expect(pokemons[3].name).toBe('Charmander')


        expect(pokemons).toStrictEqual(pokemonsMock)
    })
    test('debe retornar las opciones de pokemones aleatoriamente', async () => { 

        const pokemons = await getPokemonsOptions()

        expect(pokemons).toEqual(
            [
                {
                    name: expect.any(String),
                    id: expect.any(Number)
                },
                {
                    name: expect.any(String),
                    id: expect.any(Number)
                },
                {
                    name: expect.any(String),
                    id: expect.any(Number)
                },
                {
                    name: expect.any(String),
                    id: expect.any(Number)
                },
            ]
        )
     })
})