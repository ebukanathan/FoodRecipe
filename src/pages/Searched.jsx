import React  from 'react'
import { useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Searched() {

    const [searched,setSearched] = useState([])
    const params = useParams()

   const getSearched = async(name)=>{
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=2ff0952a4a7b4c69a6056a0b0b9af49b&query=${name}&number=4`)
    const data = await api.json()
    console.log(data.results)
    setSearched(data.results)

   }

   useEffect(()=>{
    getSearched(params.search)
   },[params.search])

    
  return (
    <Grid>
        {searched.map((item)=>(
            <Link to={"/recipe/" + item.id}>
            <Card key={item.id}>
            <img src={item.image} alt=""/>
            <h3>{item.title}</h3>
            </Card>
            </Link>
        ))}
    </Grid>
  )
}

const Grid = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
grid-gap:1rem;
margin:2rem 4rem
`;

const Card = styled.div`
img{
  width=100%;
  border-radius:2rem
}
a{
  text-decoration:none
}
h4{
  text-align:center;
  padding:1rem
}

`;

export default Searched