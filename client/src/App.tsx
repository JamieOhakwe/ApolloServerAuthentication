// import { useState } from 'react'

import './App.css'
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/register' element={<Homepage/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
