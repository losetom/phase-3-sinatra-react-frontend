import React, { useEffect, useState } from 'react'

function SignUpForm() {
        const [user, setUser] = useState({
            username: "",
            password: ""
        })

    const handleSubmit = (e) => {
        e.preventDefault()

        const config = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        }
        
        // fetch to POST users
        fetch("http://localhost:9292/users", config)
            .then((r) => r.json())
            .then(data => console.log(data))
    }

    const handleChange = ({target}) => {
        // Create copy of current state
        // debugger
        const stateCopy = JSON.parse(JSON.stringify(user))
        // Update target prop value on copy
        stateCopy[target.name] = target.value
        // Update state
        setUser(stateCopy)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" name='username' onChange={handleChange} value={user.username}></input>
            <label>Password</label>
            <input type="password" name='password' onChange={handleChange} value={user.password}></input>
            <input type="submit"></input>
        </form>
    </div>
  )
  }
export default SignUpForm