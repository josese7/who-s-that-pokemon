<template>
      <h1 v-if="!pokemon">Espere un momento...</h1>
      <div v-else>
        <h1>¿Quien es este pokemon?</h1>
        <PokemonImage  :pokemon-id="pokemon.id" :showPokemon="showPokemon"/>
        <PokemonOptions 
        :pokemons="pokemonsArray"
        @selection="checkAnswer"

        />
        <template v-if="showAnswer">
          <h2>{{message}}</h2>
          <button
          @click="newGame"
          >Jugar de nuevo</button>
        </template>
        
      </div>
     

 
</template>

<script>

import PokemonImage from '../components/PokemonImage.vue'
import PokemonOptions from '../components/PokemonOptions.vue'

import getPokemonsOptions from '@/helpers/getPokemonsOptions.js'



export default {
  components: {
    PokemonImage,
    PokemonOptions
  },
  data(){
    return{
      pokemonsArray: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message:''
   
    }
  },
  methods:{
    async mixPokemonArray() {
      this.pokemonsArray = await getPokemonsOptions()
      //console.log(this.pokemonsArray)
      const  randPokemon = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonsArray[randPokemon]
      //console.log(this.pokemon)
    },
    checkAnswer(pokemonId){

      this.showPokemon = true
      this.showAnswer = true
      this.message= pokemonId === this.pokemon.id? `Correcto, es ${this.pokemon.name}.¡Estás cada vez más cerca de ser un MAESTRO POKEMON!`
      : `Oops, lo siento! Era ${this.pokemon.name}`;
      return
    },
    async newGame(){
  
      await this.mixPokemonArray()
      this.showPokemon= false
      this.showAnswer=false
      this.message=''
    }
  },
  mounted(){
    this.mixPokemonArray()
  }

}
</script>

<style>

</style>