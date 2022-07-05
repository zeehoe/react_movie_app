import IconSearch from './../assets/search.svg'
import React, { useState } from 'react'

const SearchBar = ({searchAction})=>{
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div className="search">
            <input placeholder="Search for movies" onChange={(e)=>{setSearchTerm(e.target.value)}} value={searchTerm}/>
            <img src={IconSearch} alt="search" onClick={()=>{searchAction(searchTerm)}}/>
        </div>
    )
}

export default SearchBar