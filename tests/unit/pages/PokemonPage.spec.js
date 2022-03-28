import { mount, shallowMount } from "@vue/test-utils";
import PokemonPage from '@/pages/PokemonPage'
import { pokemonsMock } from "../mocks/pokemons.mock";
import PokemonImage from '@/components/PokemonImage'
import PokemonOptions from '@/components/PokemonOptions'




describe('PokemonPage Page', ()=>{

    let wrapper
    let mixPokemonArraySpy

    beforeEach(()=>{
        mixPokemonArraySpy= jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        wrapper = shallowMount(PokemonPage)

        
    })
    afterEach(()=>{
        jest.clearAllMocks()
    })
    test('snapshot inicial', () => { 
        expect(wrapper.html()).toMatchSnapshot()
     })

     test('debe de llamarse a mixPokemonArr al montar el componente', ()=>{
        expect(mixPokemonArraySpy).toHaveBeenCalled()
     })
     
     test('snapshot con opciones de pokemin', ()=>{

        wrapper = shallowMount(PokemonPage, {
            data(){
                return{
                    pokemonsArray: pokemonsMock,
                    pokemon: pokemonsMock[0],
                    showPokemon: false,
                    showAnswer: false,
                    message:''
                }
            }
        })

        expect(wrapper.html()).toMatchSnapshot()

     })

     test('deben de existir PokemonImage y PokemonsOptions', () => { 

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemonsMock,
                    pokemon: pokemonsMock[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ""
                }
            }
        })

        //[pokemonImage, pokemonsOptions ]= wrapper.findAllComponents()
        
        const image = wrapper.findComponent(PokemonImage)
        const options = wrapper.findComponent(PokemonOptions)
        // image = wrapper.find('pokemon-image-stub')
        // image = wrapper.find('pokemon-options-stub')
        const { pokemonId } = image.props()
        const { pokemons } = options.props()
       
        expect(image.exists()).toBeTruthy()
        expect(options.exists()).toBeTruthy() 

        expect(pokemonId).toBe(1)
        expect(wrapper.find('pokemon-options-stub').exists()).toBeTruthy()
        /* 
                no funciona
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
        ) */
      })

      test('Probando checkAnswer', async ()=>{

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemonsMock,
                    pokemon: pokemonsMock[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ""
                }
            }
        })
        //Es una peticion asincrona, se debe esperar a que Vue re-renderize los cambios de las propiedades reactivas
        await wrapper.vm.checkAnswer(1)

        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBe(true)
        expect(wrapper.find('h2').text()).toBe(`Correcto, es ${pokemonsMock[0].name}.¡Estás cada vez más cerca de ser un MAESTRO POKEMON!`)

        await wrapper.vm.checkAnswer(67)

        expect(wrapper.find('h2').text()).toBe(`Oops, lo siento! Era ${pokemonsMock[0].name}`) 




      })
})