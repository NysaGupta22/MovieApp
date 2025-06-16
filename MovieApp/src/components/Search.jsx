import React from 'react'

const search = ({searchTerm,setSearchTerm}) => {
  return (
    <div className="search">
        <div>
            <img src="Search-input.svg" alt="search"/>
            <input
            type="text"
            placeholder="search through thousands of movies"
            value={searchTerm}
            onChange={(event)=>setSearchTerm(event.target.value)}/>
        </div>
    </div>
  )
}

export default search
