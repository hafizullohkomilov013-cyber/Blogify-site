import React from 'react'
import Puplic from './Layouts/Public'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/public/HomePage'
import PostDetailsPage from './Pages/public/PostDetailsPage'
import PostPages from './Pages/public/PostPages'

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
          path:"/PostDetailsPages", 
          element:<PostDetailsPage/>
        }
      ]
    }
  ])
  return(
    <RouterProvider router = {routes}/>
  )
}

export default App
