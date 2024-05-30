// for practice only its in home component

import { useEffect, useState } from 'react'
import { getPokemon } from '../../../common/utility/apiCall'

const limit =18
const PokeApi = (name: any, images: any ,offset:any) => {
  const [pokemonData, setPokemonData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const limitPage =(currentPage -1)*limit
        const response = await getPokemon(name, images,limit,limitPage)
        console.log(response) 
        setPokemonData(response) 
      } catch (error) {
        console.log(error, 'sumit')
      }
    }
    if (name) {
      fetchData()
    }

  }, [currentPage,name])

  const handelNextPage =()=>{

      setCurrentPage(currentPage+1)
    
  }

  const handelPrevPage =()=>{

    setCurrentPage(currentPage-1)
    
    
}
console.log(handelPrevPage)
         
  return (
    <>
    <input placeholder='search' className="md:ml-[200px] mt-5 border-2 border-black w-[300px]"/>
    <div className="md:ml-[200px] grid grid-cols-6 gap-[50px]  mt-[50px]">
      {pokemonData.map((pokemon: any, index) => (
        <div className="">
          <div key={index} 
          className="flex flex-col items-center  p-2 w-[80px]">
            <img src={pokemon.spriteUrl} className=" " />
            <div>{pokemon.name}</div>
          </div>
        </div>
      ))}
    </div>
    <button 
    className="md:ml-[200px] border-2 border-black p-1 cursor-pointer" 
    onClick={handelPrevPage}
    disabled={currentPage ===1}>
    prevPage
    </button>
   <button className="md:ml-[200px] border-2 border-black p-1 cursor-pointer" onClick={handelNextPage}>
    nextPage
    </button>

    </>
  )
}

export default PokeApi