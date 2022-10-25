import React from 'react'
import { useEffect, useState } from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import GamesContainer from './GamesContainer'
import NewGameForm from './NewGameForm'

function App() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/games")
            .then((r) => r.json())
            .then((games) => setGames(games));
    }, []) 

    function handleDeleteClick(id) {
       // debugger
      fetch(`http://localhost:9292/games/${id}`, {
          method: "DELETE"
      })
      .then((r) => r.json())
      .then((data) => {
        let gamesCopy = JSON.parse(JSON.stringify(games))
        gamesCopy = gamesCopy.filter(game => {
            return game.id !== id
        })
        setGames(gamesCopy)
         // onDeleteGame(game);
      });
  }


  return (
    <div className='App'>
        <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/games" element={<GamesContainer games={games} onDeleteClick={handleDeleteClick}/>}/>
        </Routes>
    </div>
  )
}

export default App