import React from 'react'
import { Link } from 'react-router-dom'

function BarLinks() {
  return (
      <div className='container'>
        <div className='flex md:hidden  pt-7 mt-7 border-t  gap-7 justify-center border-gray-300 flex-col items-start'>
            <Link className='font-medium link-cursor text-[14px] text-[#0F1729] ' to="/">Home</Link>
            <Link className='font-medium link-cursor text-[14px] text-[#0F1729] ' to="/PostPages">Posts</Link>
            <Link className='font-medium text-[14px] text-white rounded-xl w-full h-9 rounded-1xl bg-[#4346EF] flex items-center justify-center' to="/login">Login</Link>
        </div>
      </div>
  )
}

export default BarLinks
