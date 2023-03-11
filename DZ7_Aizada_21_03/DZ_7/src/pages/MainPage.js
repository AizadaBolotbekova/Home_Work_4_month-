import { useEffect, useState } from "react";
import { fetchPokemons } from "../api/fetchPokemons";
import Paginiation from "../components/Pagination/Paginiation";
import PokemonCard from "../components/PokemonCard/PokemonCard";

const MainPage = () => {
  const [theme, setTheme] = useState('dark');
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const toogleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }
  const limit = 10

  useEffect(() => {
    fetchPokemons(limit, offset)
      .then((data) => {
        setPokemonList(data?.results);
      });
  }, [offset])

  const handleChangePage = (type) => {
    if (type === 'next') {
      if (offset <= 10)
        setOffset(prev => prev += 10)
      setPage(prev => prev += 1);
    }
    else {
      setOffset(prev => prev - 10)
    }
  }
  return (
    <div className={`app ${theme}`}>

      <button
        onClick={toogleTheme}
        className="button">
        Change Theme
      </button>
      <div className="container">
        <div className="pokemonList">
          {pokemonList?.map(pokemon => <PokemonCard pokemon={pokemon} />)}
        </div>
      </div>
      <Paginiation
        changeOffset={handleChangePage}
        page={page}
      />
    </div>
  );
}

export default MainPage;
