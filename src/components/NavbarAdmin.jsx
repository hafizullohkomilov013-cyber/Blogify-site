import React, { useState } from "react";
import NavLogo from "../assets/img/NavLogo.svg";
import { NavLink, Link, useNavigate } from "react-router-dom";

function NavbarAdmin() {
  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  let logAOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="flex flex-col justify-between border-r-2 w-64 h-screen border-[#E5E7EB]">
        <div className="p-6 border-b-2 border-[#E5E7EB]">
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
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center w-full py-3.5 px-6 rounded-2xl hover:bg-gray-100 gap-3 border-t-2 border-[#E5E7EB]"
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            Logout
          </button>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-lg">
            <h2 className="text-lg font-semibold text-[#0F1729] mb-2">
              Rostan ham chiqmoqchimisiz?
            </h2>
            <p className="text-sm text-[#6B7280] mb-6">
              Agar chiqib ketsangiz, qayta login qilishingiz kerak bo‘ladi.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 cursor-pointer rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Yo‘q
              </button>
              <button
                onClick={logAOut}
                className="px-4 py-2 cursor-pointer rounded-xl bg-red-500 text-white hover:bg-red-600"
              >
                Ha
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavbarAdmin;
