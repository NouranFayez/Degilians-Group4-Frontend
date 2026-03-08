// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import {Welcome} from './Welcome'
import { Counter } from './counter'
// jsx => javascript + xml
function App() {

  // return React.createElement("h1" , null , "React")

  return (
    // React Fragment
    <>

    <Counter/>

    {/* <Welcome></Welcome> */}
    {/* <Welcome/> */}
    
    {/* <div>
      <div>
        <h1>React</h1>
      </div>
      <div>
        <h1>React</h1>
      </div>
    </div>
     <div>
      <div>
        <h1>React</h1>
      </div>
      <div>
        <h1>React</h1>
      </div>
    </div>

    <h2>React Fragment</h2>
    <a href=''>React</a> */}
    
    </>

  )

}

export default App
