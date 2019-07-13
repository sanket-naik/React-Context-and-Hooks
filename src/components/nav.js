import React,{useContext} from 'react'
import {MovieContext} from './context/movieContext'
 

const Nav=()=>{

    const [movies, setMovies]=useContext(MovieContext)


    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand" >Navbar</span>
        <span >Total Number of Movies: {movies.length}</span>
        </nav>
    )
}

export default Nav