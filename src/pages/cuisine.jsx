import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
function Cuisine() {

  const [cuisine,setCuisine] = useState([])

  const params = useParams()

  const getCuisine =  async(name)=>{
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=2ff0952a4a7b4c69a6056a0b0b9af49b&cuisine=${name}&number=6`)
    const data = await api.json()
    
    setCuisine(data.results)


  
  }

useEffect(()=>{
  getCuisine(params.type)
},[params.type])

let food =  <Grid>
{cuisine.map((item)=>(
  <Card key={item.id}>
    <Link to={'/recipe/' + item.id}>
    <img src={item.image} alt=""/>
    <h4>{item.title}</h4>
    </Link>

  </Card>
))}




</Grid>


  return (

  <div>
    {cuisine==0?<h4>Loading...</h4>:food}
  </div>

   
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

export default Cuisine