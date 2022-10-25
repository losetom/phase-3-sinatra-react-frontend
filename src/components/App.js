import React from 'react'
import { useEffect, useState } from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import GamesContainer from './GamesContainer'

function App() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/games")
            .then((r) => r.json())
            .then((games) => setGames(games));
    }, []) 


  return (
    <div className='App'>
        <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/games" element={<GamesContainer games={games}/>}/>
        </Routes>
    </div>
  )
}

export default App