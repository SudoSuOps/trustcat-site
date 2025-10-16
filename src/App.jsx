import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ProviderProfile from './pages/ProviderProfile'
import SalesTerminal from './pages/SalesTerminal'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/provider/:id" element={<ProviderProfile />} />
        <Route path="/terminal" element={<SalesTerminal />} />
      </Routes>
    </Router>
  )
}

export default App
