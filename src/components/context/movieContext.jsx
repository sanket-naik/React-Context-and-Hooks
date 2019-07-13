import React, {useState, createContext} from 'react'


export const MovieContext=createContext();

export const MovieProvider=props=>{
    const [movies, setMovies]=useState(
        [{
                name:"sanket",
                price:120,
                id:1
            },
            {
                name:"sudheer",
                price:100,
                id:2 
            },
            {
                name:"sunil",
                price:10,
                id:3
            }]
    );
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}