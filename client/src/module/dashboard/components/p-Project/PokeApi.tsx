import { useEffect, useState } from 'react'
import {getPokemon} from '../../../../common/utility/apiCall'



const PokeApi = (name:any) => {
  const [pokemonData ,setPokemonData] = useState([])
  useEffect(()=>{
    const fetchData = async()=>{
      try{
      const response =await getPokemon(name)
      console.log(response)
      setPokemonData(response)
      }catch(error){
        console.log(error,'sumit')
      }
    }
    if(name){
      fetchData()
    }

  },[name])
  console.log(pokemonData)

  return (
    <div className="md:ml-[200px]">
      {pokemonData.map((pokemon:any) =>(
      <div>{pokemon.name}</div>
      ))}
      </div>
  )
}

export default PokeApi