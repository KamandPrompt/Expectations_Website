import React from 'react'
import Navbar from './components/Navbar'
import About from './components/Card'
import About2 from './components/Card2'
import About3 from './components/Card3'
import About4 from './components/Card4'
import About5 from './components/Card5'
import About6 from './components/Card6'
import Header from './components/Hero'

import './App.css'
function App(){
  return(
    <div className='App'>
      <Navbar/>
      <Header/>
      <div className='main'>
        <About/>
        <About2/>
        <About3/>
        <About4/>
        <About5/>
        <About6/>
        
        
      </div>
    
      
      
    </div>
    
    
  )
}
        


export default App;