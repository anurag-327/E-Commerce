import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './pages/Home'
import Product from './pages/Product'
import Products from './pages/Products'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router=createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/products/:id",
    element:<Products />
  },
  {
    path:"/product/:id",
    element:<Product />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
