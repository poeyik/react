import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router'
import MainPage from './pages/MainPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='/a'></Route>
    </Routes>
  )
}

export default App
