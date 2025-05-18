import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login"/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  )
}

export default App
