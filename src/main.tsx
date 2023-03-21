import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import AGGridPage from './pages/AGGridPage'
import Leaflet from './pages/Leaflet'
import MainPage from './pages/MainPage'
import NotFound from './pages/NotFound'
import Terminal from './pages/Terminal'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {
        index: true, 
        element: <MainPage/>
      },
      {
        path: "terminal",
        element: <Terminal/>
      },
      {
        path: "leaflet",
        element: <Leaflet/>,
      },
      {
        path: "aggrid",
        element: <AGGridPage/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
