import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import styled from 'styled-components'

function Recipe() {

 

  const [details,setDetails]=  useState({})

 const params = useParams()

  const fetchDetails = async(name)=>{
    const api = await fetch(`https://api.spoonacular.com/recipes/${name}/information?apiKey=2ff0952a4a7b4c69a6056a0b0b9af49b`)
    const data =  await api.json()
    
    console.log(data)
    
    setDetails(data)
    
    console.log(details)
    
  }

  useEffect(()=>{
    fetchDetails(params.name)
  },[params.name]) 


  return (
    <div>
      <img src={details.image}/>
      <h4>{details.title}</h4>
      
    </div>
          
  )
}

const Detailedwrapper = styled.div`
 margin-top:10rem;
 margin-bottom:5rem;
 display:flex;
 
`;

export default Recipe