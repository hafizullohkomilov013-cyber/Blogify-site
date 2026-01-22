import React from 'react'
import Puplic from './Layouts/Public'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/public/HomePage'
import PostDetailsPage from './Pages/public/PostDetailsPage'
import PostPages from './Pages/public/PostPages'
import AuthLayouts from './Layouts/AuthLayouts'
import LoginPage from './Pages/auth/LoginPage'

function App() {
  let routes = createBrowserRouter([
    {
      path:"/",
      element:<Puplic/>,
      children:[
        {
          index: true, 
          element: <HomePage/>  
        },
        {
          path:"/PostPages", 
          element:<PostPages/>
        },
        {
          path:"/PostDetailsPages/:hi", 
          element:<PostDetailsPage/>
        }
      ]
    },
    {
      path:'/Login',
      element:<AuthLayouts/>,
      children:[
        {
          index: true,
          element:<LoginPage/>
        }
      ]
    }
  ])
  return(
    <RouterProvider router = {routes}/>
  )
}

export default App
