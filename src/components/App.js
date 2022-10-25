import React from 'react'
import { useEffect, useState } from 'react'
import Home from './Home'
import { useNavigate, Route, Routes } from 'react-router-dom'
import GamesContainer from './GamesContainer'
import NewGameForm from './NewGameForm'
import SignUpForm from './SignUpForm'

function App() {

    const [games, setGames] = useState([]);
    // create state to hold current user
    const [currentUser, setCurrentUser] = useState(null)
    // pass the current user to the new game form
    // add user in new game form

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
        <p onClick={() => ("/games")}>Games</p>
        <a href='/signup'>Signup</a>
        <a href='/addgame'>Add Games</a>
        <a href='/home'>Home</a>
        
        <Routes>

            <Route path="/home" element={<Home />}/>
            <Route path="/signup" element={<SignUpForm setCurrentUser={setCurrentUser}/>}/>
            <Route path="/addgame" element={<NewGameForm />}/>
            <Route path="/games" element={<GamesContainer games={games} onDeleteClick={handleDeleteClick}/>}/>
        </Routes>
    </div>
    
  )
}

export default App