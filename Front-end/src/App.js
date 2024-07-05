import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Produto from './pages/Produto'
import Cesta from './pages/Cesta'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/produtos" element={<Produto/>} />
        <Route path="/cestaprodutos" element={<Cesta/>} />
      </Routes>
    </Router>
  )
}