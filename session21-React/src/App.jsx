// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './Counter'
import {About, Contact} from './about'

function App() {

  let addresses = [
    "Nasr city" , "October" , "Maadi"
  ]

  return(
    <>
      <Counter/>
      <About userName='Ahmed' age={20} isGraduated={true} list={addresses}/>
      {/* <About userName='Mohamed' age={10} isGraduated={false}/> */}
      <Contact/>
    </>
  )
 
}

export default App
