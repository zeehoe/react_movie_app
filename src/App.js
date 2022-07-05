import React, { useState,useEffect } from 'react'
import * as Constants from './utils/Constants'
import './css/main.css'
import SearchBar from './components/search_bar'
import CardMovie from './components/card_movie'

const App = () =>{
    const [movies,setMovies] = useState([])

    const searchMovies = async (title) => {
        const response = await fetch(`${Constants.API_URL_GET_MOVIE_LIST}&s=${title}`)
        const data = await response.json()
        console.log(data)
        setMovies(data.Search)
    }
    
    useEffect(()=>{
        searchMovies('Zootopia')
    },[])

    return (
        <div className='app'>
            <h1>My Movie Template</h1>
            <SearchBar searchAction={(inputMovieName)=>{searchMovies(inputMovieName)}}/>
            {
                movies.length > 0
                ? (
                    <div className='container'>
                        {movies.map((movie)=>(
                            <CardMovie movie={movie}/>
                        ))}
                    </div>
                ):(
                    <div className='empty'>
                        <h2>
                            Temperory No movies found
                        </h2>
                    </div>
                )
            }
        </div>
    )
}

export default App;