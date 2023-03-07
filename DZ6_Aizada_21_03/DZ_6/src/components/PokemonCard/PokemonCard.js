import React, { useEffect } from 'react'
import axios from "axios"

const PokemonCard = ({children, pokemon}) => {

  useEffect(()=>{
    const pokeInfo = axios.get(pokemon.url).then()
    console.log(pokeInfo.json.data);
  }, [])

  return (
    <div>{children}</div>
  )
}

export default PokemonCard