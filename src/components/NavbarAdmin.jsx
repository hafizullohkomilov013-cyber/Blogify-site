import React from 'react'
import NavLogo from "../assets/img/NavLogo.svg"
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
function NavbarAdmin() {
  
  let logAOut =() => {
    localStorage.removeItem("token")
    return <Navigate to={"/login"}/>
  }
  return (
    <div className="flex flex-col justify-between border-r-2 w-64 h-screen border-[#E5E7EB]">
      <div className="p-6 w- border-b-2 border-[#E5E7EB]">
        <Link to="/admin">
          <img src={NavLogo} alt="blogiy-logo" />
        </Link>
        <h2 className="text-[14px] text-[#6B7280] mt-1">Admin Panel</h2>
      </div>
      <div className="flex flex-col gap-2 items-start p-4 grow">
        <NavLink
          to={"dashboard"}
          className={({ isActive }) =>
            `flex gap-3 py-3 px-4 w-full rounded-2xl text-[14px] font-medium items-center
            ${isActive ? "bg-[#4346EF1A] text-[#4346EF]" : "hover:bg-gray-100"}`
          }
        >
          <i className="text-[20px] fa-solid fa-grip"></i>
          Dashboard
        </NavLink>
        <NavLink
          to={"createPosts"}
          className={({ isActive }) =>
            `flex gap-3 py-3 px-4 w-full rounded-2xl text-[14px] font-medium items-center
              ${isActive ? "bg-[#4346EF1A] text-[#4346EF]" : "hover:bg-gray-100"}`
          }
        >
          <i className="fa-solid fa-plus"></i>
          Create Post
        </NavLink>
      </div>
      <div>
          <button onClick={logAOut()}  className="p-4  border-t-2 border-[#E5E7EB] ">
            <Link to={"/login"} className='flex items-center w-full py-3.5 px-6 rounded-2xl hover:bg-gray-100 gap-3'>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            Logout
          </Link>
          </button>
      </div>
    </div>
  );
}

export default NavbarAdmin
