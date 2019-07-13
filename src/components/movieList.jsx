import React,{useState, useContext} from 'react'
import Movies from './movies'

import {MovieContext} from './context/movieContext'

const MovieList=()=>{

    const [movies, setMovies]=useContext(MovieContext)
   
    return(
        <div className="m-2">
            {movies.map(movie=>(
                <Movies movie={movie}  key={movie.id}/>
            ))}
            
        </div>

    )
}

export default MovieList