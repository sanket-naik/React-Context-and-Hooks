import React from 'react'


const Movies=({movie})=>{
    return(
        <div className="text-left m-2">
           <h4>Name: {movie.name}</h4>
           <h6>Price: {movie.price}</h6> 
        </div>
    )
}

export default Movies