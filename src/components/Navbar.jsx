import React from 'react'
import NavLogo from "../assets/img/NavLogo.svg"
import { Link } from 'react-router-dom'
import BarLinks from '../Pages/public/BarLinks'
import { useState } from 'react'


function Navbar() {
    const [open, setOpen] = useState(false) 

    return (
    <nav className='pt-4 pb-4'>
        <div className='container flex justify-between items-center'>
            <img src={NavLogo} alt="Bilogyfay-logo" />
            <div className='hidden md:flex gap-8 justify-center items-center'>
                <Link className='font-medium link-cursor text-4 text-[#0F1729] ' to="/">Home</Link>
                <Link className='font-medium link-cursor text-4 text-[#0F1729] ' to="/PostPages">Posts</Link>
                <Link className='font-medium text-4 text-white rounded-xl w-16 h-9 rounded-1xl bg-[#4346EF] flex justify-center items-center' to="/">Login</Link>
            </div>
            <div onClick={() => {setOpen(!open)}} className='md:hidden'>
                {open ? (<i className="text-2xl cursor-pointer fa-solid fa-x"></i>) : (<i className="text-2xl cursor-pointer fa-solid fa-bars"></i>)}
            </div>
        </div>
        {open && <BarLinks/>}
    </nav>
    )
    }

    export default Navbar
