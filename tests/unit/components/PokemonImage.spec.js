import { shallowMount } from "@vue/test-utils";
import PokemonImage from '@/components/PokemonImage'

describe('PokemonImage Component',()=>{

    test('snapshot', () => { 
        const wrapper = shallowMount(PokemonImage, {
            props:{
                showPokemon: false
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
     })
    test('debe mostrat la imagen oculta del pokemon 100', () => { 
        const wrapper = shallowMount(PokemonImage, {
            props:{
                showPokemon: false,
                pokemonId:100
            }
        })

        const [img1, img2] = wrapper.findAll('img')

        expect(img1.exists()).toBeTruthy()
        expect(img2).toBe(undefined)
        console.log(img1.clases)

        expect(img1.classes('pokemon-hidden')).toBeTruthy()

        expect(img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')

    })
    test('debe mostrar el pokemon, si showPokemon es true', () => { 

     })
})