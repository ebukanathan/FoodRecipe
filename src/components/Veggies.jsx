import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import { Splide,SplideSlide } from '@splidejs/react-splide'
import { Link } from 'react-router-dom'
import "@splidejs/splide/dist/css/splide.min.css"


function Veggie() {

    const[veggie,setVeggie]=useState([])


    useEffect(()=>{
        getVeggie()
    },[])


    const getVeggie =async ()=>{

        const check = localStorage.getItem("veggie")

        if(check){
            setVeggie(JSON.parse(check))
        }else{
            const  api = await fetch('https://api.spoonacular.com/food/products/search?apiKey=2ff0952a4a7b4c69a6056a0b0b9af49b&query=broccoli&number=9')
            const data = await api.json()
            
            localStorage.setItem("veggie",JSON.stringify(data.products))
            setVeggie(data.products)
            console.log(data.products)

        }
       
        
    }
  return (

    <div>
   
        <Wrapper>                                                                                                                                                                                                                                                                                                                                                                                                           
            <h3>Vegetables Cusiine</h3>
           <Splide options={{perPage:3,gap:"1rem",autoplay:true,rewind:true}}>
           {veggie.map((item=>(
                <SplideSlide>
                  <Link to={"/recipe/" + item.id}>
                  <Card key={item.id}>
                    <p>{item.title}</p>
                    <img src={item.image} alt={item.imageType}/>
                    
                    
            </Card>
                  </Link>

                </SplideSlide>
                
        
        )))}
           </Splide>
           
     
        </Wrapper>
    </div>
    
       
            
  )
}

const Wrapper=styled.div`
margin:4rem 1rem;




`;


const Card = styled.div`

min-height:15rem;
border-radius:2rem;
position:relative;




img{
    
    border-radius:2rem;
    position:absolute;
    left:0;
    height:100%;
    width:100%;
    object-fit:cover;

}

p{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    width:100%;
    color:white;
    transform:translate(-50%,0%);
    text-align:center;
    font-weight:600;
    font-size:1rem;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;

    
    
}

`;

const Gradient = styled.div`

position:absolute;
z-index:3;
width:100%;
height:100%;
background:linear-gradient(rgb(0,0,0,0), rgb(0,0,0,0.5))

`

export default Veggie