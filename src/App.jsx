import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter } from 'react-router-dom'
import Home from "./pages/home"
import Pages from './pages/Pages'
import Category from './components/category'
import Search from './components/Search'

function App() {
  
  return (
    <BrowserRouter>
      <Search/>
       <Category/>
      <Pages/> 
    </BrowserRouter>
  )
}

export default App
