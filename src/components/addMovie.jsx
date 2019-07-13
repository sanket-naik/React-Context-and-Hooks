import React, {useState, useContext} from 'react'
import {MovieContext} from './context/movieContext'

const AddMovie=()=>{

    const [movies, setmovies]=useContext(MovieContext)

    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [id,setid]=useState(4)
    // const name=useFormInput("ghjk")
    // const price=useFormInput("56")

    

    const updateName=(event)=>{
        setname(event.target.value)

    }

    const updatePrice=(event)=>{
        setprice(event.target.value)
       
    }

    const addMovie=(e,index)=>{
        e.preventDefault()
        setid(prev=>prev+1)
        console.log(name)
        setmovies(prevMovies=>[...prevMovies,{name:name,price:price,id:id}])
    }

    // function useFormInput(initialValue){
    //     const[value, setValue]=useState(initialValue)
    //     const handleChange=(event)=>{
    //         setValue(event.target.value)
    //     } 
    //     return{
    //         value,
    //         onChange:handleChange
    //     }
    // }

    return(
        <form onSubmit={addMovie} className="text-left m-3">
            <input type="text" name="name"  value={name} onChange={updateName} placeholder="Enter name"/>    {/*{name...} */}
            <input type="text"  name="price" value={price} onChange={updatePrice} placeholder="Enter price"/>
            <button>Submit</button>
        </form>
    )
}

export default AddMovie