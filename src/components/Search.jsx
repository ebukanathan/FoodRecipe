import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Search() {

    
    const[input,setInput] = useState('')

    const navigate = useNavigate()

    

    const handleSubmit=(e)=>{
        e.preventDefault();
     navigate("/searched/" + input)
     setInput('')
    


    }



  return (

        <form action="" onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      
        </form>
        

  )
} 

export default Search