import React from 'react'
import MainPage from './pages/MainPage'
import { Route, Routes } from "react-router-dom"
import AboutPokemons from './components/AboutPokemons'
import Menu from './components/Menu'


function App() {
  return (
    <>
      <Menu/>
      <Routes>
        <Route path='/main' element={<MainPage/>}/>
        <Route path='/about' element={<AboutPokemons/>}/>
      </Routes>
    </>
  )
}

export default App
