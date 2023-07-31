import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Clients from './components/Clients'
import Exit from './components/Exit'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Edit from './components/Edit'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Register/>}>
      </Route>
      <Route path='/clients' element={<Clients/>}>

      </Route>
      <Route path='/exit' element={<Exit/>}>

      </Route>
      <Route path='/edit/:id' element={<Edit/>}>

      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
