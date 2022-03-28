import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";
import { pokemonsMock } from "../mocks/pokemons.mock";

describe("PokemonOptions Componetn", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons: pokemonsMock,
      },
    });
  });

  test("snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.html()).toMatchInlineSnapshot(`
      <div class="options-container">
        <ul>
          <li>Bulbasaur</li>
          <li>Ivysaur</li>
          <li>Venusaur</li>
          <li>Charmander</li>
        </ul>
      </div>
    `);
  });

  test(' debe de mostrat las opciones', ()=>{
        const liTags = wrapper.findAll('li')

        expect(liTags.length).toBe(4)

        expect(liTags[0].text()).toBe('Bulbasaur')
        expect(liTags[3].text()).toBe('Charmander')
        /* expect(opciones).toEqual([
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
        ]) */
  })

  test('debe emitir "selection-pokemon" con sus respectivos parametros al hacer click', () => { 

    const [li1, li2, li3, li4 ] = wrapper.findAll('li')
    
    li1.trigger('click')
    li2.trigger('click')
    li3.trigger('click')
    li4.trigger('click')

    const emitido = wrapper.emitted('selection')

    console.log(emitido)

    expect(emitido.length).toBe(4)
   /*  expect(emitido.toEqual).toBe([5]) */
    expect(emitido[0]).toEqual([1])
    expect(emitido[0]).toStrictEqual([1])

    expect(emitido[1]).toEqual([2])
    expect(emitido[2]).toEqual([3])
    expect(emitido[3]).toEqual([4])
   })
});
