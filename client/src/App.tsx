// import { useState } from 'react'

import './App.css'
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Backroom from './pages/Backroom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/backroom' element={<Backroom/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
