import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarAdmin from '../components/NavbarAdmin'

function AdminLayout() {
  return (
    <div className='flex'>
      <div>
        <NavbarAdmin/>
      </div>
      <div className='flex grow-2'>
        <Outlet/>   
      </div>
    </div>
  )
}

export default AdminLayout
