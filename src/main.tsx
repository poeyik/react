import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import AGGridPage from './pages/AGGridPage'
import Crud from './pages/Crud'
import Leaflet from './pages/Leaflet'
import MainPage from './pages/MainPage'
import NotFound from './pages/NotFound'
import Terminal from './pages/Terminal'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Todo from './pages/Todo'
import Tree from './pages/Tree'
import InnoTemplate from './pages/InnoTemplate'

const queryClient = new QueryClient();

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
      },
      {
        path: "crud",
        element: <Crud/>
      },
      {
        path: "todo",
        element: <Todo/>
      },
      {
        path: "tree",
        element: <Tree/>
      },
      {
        path: "inno-template",
        element: <InnoTemplate/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
)
