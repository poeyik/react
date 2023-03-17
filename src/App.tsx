import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes } from 'react-router-dom'
import { Outlet, Route } from 'react-router'
import MainPage from './pages/MainPage'

function App() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default App
