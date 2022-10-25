import React, { useEffect, useState } from 'react'

function NewGameForm() {
        const [gameCreate, setGameCreate] = useState({
            title: "",
            platform: "",
            genre: "",
            price: ""
        })

    const handleSubmit = (e) => {
        e.preventDefault()

        const config = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(gameCreate)
        }
        
        // fetch to POST users
        fetch("http://localhost:9292/games", config)
            .then((r) => r.json())
            .then(data => console.log(data))
    }

    const handleChange = ({target}) => {
        // Create copy of current state
        // debugger
        const stateCopy = JSON.parse(JSON.stringify(gameCreate))
        // Update target prop value on copy
        stateCopy[target.name] = target.value
        // Update state
        setGameCreate(stateCopy)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" name='title' onChange={handleChange} value={gameCreate.title}></input>
            <label>Platform</label>
            <input type="text" name='platform' onChange={handleChange} value={gameCreate.platform}></input>
            <label>Genre</label>
            <input type="text" name='genre' onChange={handleChange} value={gameCreate.genre}></input>
            <label>Price</label>
            <input type="text" name='price' onChange={handleChange} value={gameCreate.price}></input>
            <input type="submit"></input>
        </form>
    </div>
  )
  }
export default NewGameForm