import { useEffect, useState } from "react";
import { fetchPokemons } from "./api/fetchPokemons";
import PokemonCard from "./components/PokemonCard/PokemonCard";
const App = () =>  {
  const [ theme, setTheme ] = useState('dark');
  const [ list, setList ] = useState([]);

  const toogleTheme  = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

useEffect(() => {
  fetchPokemons(setList)
}, [])
// console.log(list, 'list');
  return (
    <div className={`app ${theme}`}>
      App
      <button 
      onClick={toogleTheme}
      className="button">
        Change Theme
      </button>

      {
        list.map(pokemon=>
          <PokemonCard pokemon={pokemon}>{pokemon.name}</PokemonCard>
        )
      }

    </div>
  );
}

export default App;
