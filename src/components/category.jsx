import {FaPizzaSlice,FaHamburger} from "react-icons/fa"
import { GiNoodles,GiChopsticks} from "react-icons/gi"
import styled from  "styled-components"
import { NavLink } from "react-router-dom"


function Category() {
  return (
    
        <Container>
       <Slink  to={'/cuisine/italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
       </Slink>
       <Slink to={'/cuisine/americana'}>
        <FaHamburger/>
        <h4>Americana</h4>
       </Slink>
       <Slink to={'/cuisine/africa'}>
        <GiNoodles/>
        <h4>Africa</h4>
       </Slink>
       <Slink to={'/cuisine/japan'}>
        <GiChopsticks/>
        <h4>Japan</h4>
       </Slink>
       <Slink to={'/'}>
        <h4>home</h4>
       </Slink>
    </Container>
    
  )
}

const Container = styled.div`
display:flex;
justify-content: center;
align-item:center;
margin: 2rem 0rem

`;

const Slink = styled(NavLink)`
dislpay:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-decoration:none;
backgroung-color:red;
margin-right:3rem;
border-radius:50%;
background-color:#000;
width:3rem;
height:3rem;
padding:2rem;
cursor:pointer;
transform:scale(0.8);

h4{
  font-size:0.8rem;
  color:white;
}

svg{
  color:white
}



&.active{
  background-color:red
}

`

export default Category