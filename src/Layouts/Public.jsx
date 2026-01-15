import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function Puplic() {
  return (
    <div className='flex justify-between min-h-screen flex-col'>
      <header>
        <Navbar/>
      </header>
      <main className='grow'>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Puplic
