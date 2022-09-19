import React from 'react'

import "./SearchInput.css";

function SearchInput() {
  return (
    <input 
        className='searchInput' 
        type="text" 
        placeholder={"search ... "}
    />
  )
}

export default SearchInput