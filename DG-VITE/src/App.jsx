import { useState } from 'react'

import reactLogo from './assets/react.svg'

import NavBar from './components/NavBar/NavBar'
import HomeIndex from './components/HomeIndex/HomeIndex'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Titulo from './components/Titulo/Titulo'




function App() {
 
  return (
    <div>    
      
        <NavBar/>
        <Titulo titulo={"Soy titulo de este home"}/>
        <HomeIndex/> 
        
   
  </div>
   
  )
}

export default App
