import React from 'react'
import NavLogo from "../assets/img/NavLogo.svg"
import { Link } from 'react-router-dom'
import BarLinks from '../Pages/public/BarLinks'
import { useState } from 'react'


function Navbar() {
    const [open, setOpen] = useState(false) 

    return (
    <nav className='pt-4 z-30 pb-4 fixed right-0 left-0 top-0 backdrop-blur-md bg-white/70'>
        <div className='container   flex justify-between items-center'>
            <Link to={"/"}><img src={NavLogo} alt="Bilogyfay-logo" /></Link>
            <div className='hidden md:flex gap-8 justify-center items-center'>
                <Link className='font-medium link-cursor text-[16px] text-[#0F1729] ' to="/">Home</Link>
                <Link className='font-medium link-cursor text-[16px] text-[#0F1729] ' to="/PostPages">Posts</Link>
                <Link className='font-medium text-4 text-white rounded-xl w-16 h-9 rounded-1xl bg-[#4346EF] flex justify-center items-center' to="/login">Login</Link>
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
