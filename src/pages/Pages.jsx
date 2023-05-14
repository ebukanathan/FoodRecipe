import React from 'react'
import Home from './home'
import Cuisine from './cuisine'
import Searched from './Searched'
import Recipe from './Recipe'
import { Routes,Route} from "react-router-dom"

function Pages() {
  return ( 
   
     <Routes>
      
       <Route path = "/" element={<Home/>}/>
       <Route path="/cuisine/:type" element={<Cuisine/>}/>
       <Route  path="/Searched/:search" element={<Searched/>}/>
       <Route  path="/recipe/:name" element={<Recipe/>}/>
     </Routes>

  )
}

export default Pages