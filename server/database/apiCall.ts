import fetch from 'node-fetch'

async function pokemonDatabase(){
   const response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
      const data = await response.json()  
      return data.results
}

export default pokemonDatabase

