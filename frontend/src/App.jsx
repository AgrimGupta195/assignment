import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Module1 from './pages/Module1'
import Module3 from './pages/Module3'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/module1" element={<Module1 />} />
      <Route path="/module3" element={<Module3 />} />
    </Routes>
  )
}

export default App