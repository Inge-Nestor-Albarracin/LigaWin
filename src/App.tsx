import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router'
import Informativa from './informativa'
import Original from './original'
import Usuario from './usuario'
import Home from './home'
import Favoritos from './favoritos'
import Equipo from './equipo'
import './App.css'

function App() {
  return (
    <div >
      
      <Router>
        <nav className='c-menu'>
          <Link to ="/Home">Home</Link>
          <p></p>
          <Link to ="/Favoritos">Favoritos</Link>
          <p></p>
          <Link to ="/Usuario">Usuario</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Favoritos' element={<Favoritos/>}/>
          <Route path='/Usuario' element={<Usuario/>}/>
        </Routes>
      </Router>
      <h1>Mi Aplicación</h1>

      <Home />
      <Informativa />
      <Original />
      <Usuario />
      <Favoritos />
      <Equipo />
    </div>
  )
}

export default App