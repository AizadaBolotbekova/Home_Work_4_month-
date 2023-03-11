import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PokemonCard = ({ pokemon })=> {

  const[image, setImage ] = useState('');

  useEffect (() => {
    axios.get(pokemon?.url).then((data) => {
      setImage(data.data.sprites.other.dream_world.front_default)
    })
  }, [pokemon]);

  return (
    <div className='pokemonCard'>
      {pokemon?.name}
      <img src={image} alt='pokemon images' />
    </div>
  )
}

export default PokemonCard