import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ProviderProfile from './pages/ProviderProfile'
import SalesTerminal from './pages/SalesTerminal'
import InquireCompute from './pages/InquireCompute'
import BrokerLogin from './pages/BrokerLogin'
import Docs from './pages/Docs'
import SudoHashProfile from './pages/SudoHashProfile'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/inquire" element={<InquireCompute />} />
        <Route path="/brokers" element={<BrokerLogin />} />
        <Route path="/terminal" element={<SalesTerminal />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/provider/:id" element={<ProviderProfile />} />
        <Route path="/provider/sudohash" element={<SudoHashProfile />} />
      </Routes>
    </Router>
  )
}

export default App
