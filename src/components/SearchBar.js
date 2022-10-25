import React from 'react'
import { useState } from 'react'

function SearchBar() {

    const [searchInput, setSearchInput] = useState("");

    fetch("http://localhost:9292/games")
      .then((r) => r.json())
      .then((games) => setSearchInput(games))

    const handleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
    };

  return (
    <div>
      <input 
        type="text"
        placeholder="Search here..."
        onChange={handleChange}
        value={searchInput} />
    </div>
  )
}

export default SearchBar