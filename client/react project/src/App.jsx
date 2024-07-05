import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import "./style.css"

import Books from './components/Books'
import Update from './components/Update'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books />} />
          <Route path='/Add' element={<Add />} />
          <Route path='/Update/:id' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
      
    </>
  )
}

export default App
