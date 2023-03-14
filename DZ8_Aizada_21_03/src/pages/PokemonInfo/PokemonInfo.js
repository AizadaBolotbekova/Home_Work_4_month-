import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPokemon } from '../../api/fetchPokemons';
const PokemonInfo = () => {
  const [pokemon, setPokemon] = useState();
  const { id } = useParams();

  useEffect(() => {
    getPokemon(id).then((data => setPokemon(data)));
  }, [id])
  console.log(pokemon);
  return (
    <div>
      <img src={pokemon?.sprites.other.dream_world.front_default} alt='fd' />
      <h4> Рост: {pokemon?.height}sm</h4>
      <h5> Вес: {pokemon?.weight}
        grams</h5>
      <p> Cпособности:
        {pokemon?.abilities.map(i=> i.ability.name)}
      </p>
      <p> Имя:
        {pokemon?.name}
      </p>
      <p> Формы:
        {pokemon?.forms[0].name}
      </p>
    <p> Прошлые типы:
      {pokemon?.past_types[0]}
    </p>
    <p> Статистика:
      {pokemon?.stats[0].name}
    </p>

  
    </div>
  )
}

export default PokemonInfo


/// rafce;