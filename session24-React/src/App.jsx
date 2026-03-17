// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Products } from './pages/Products'
import { Route } from './Router/router'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
  
    {/* <Home/>
    <Products/>
    <Login/> */}

    <RouterProvider router={Route}/>
 
    </>
  )
}

export default App
