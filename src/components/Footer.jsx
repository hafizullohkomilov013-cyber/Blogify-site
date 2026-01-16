import React from 'react'
import NavLogo from "../assets/img/NavLogo.svg"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t-2 border-gray-300">
      <section className="container gap-8 pt-12 pb-8 border-b-2 mb-10 flex flex-col border-gray-200 md:flex-row justify-between">
        <div className="flex flex-col h-full min-h-34  gap-4 w-full max-w-148 items-start">
          <img src={NavLogo} alt="Footer-Logo" />
          <p className="text-[#6B7280] w-full max-w-[384px] text-[16px]">
            Create, read, and inspire. Discover amazing stories written by
            talented creators from around the world.
          </p>
        </div>
        <div className="flex w-full max-w[280px] flex-col">
          <h2 className="text-[#0F1729] text-[24px] mb-4 font-bold">
            Quick Links
          </h2>
          <div className="flex flex-col gap-2 text-[#6B7280]">
            <Link className="link-cursor" to={"/"}>
              Home
            </Link>
            <Link className="link-cursor" to={"/PostPages"}>
              Posts
            </Link>
            <Link className="link-cursor" to={"/"}>
              Login
            </Link>
          </div>
        </div>
        <div className="w-full max-w-70 ">
          <h2 className="text-[#0F1729] text-[24px] mb-4 font-bold">Connect</h2>
          <div className="flex gap-3">
            <i className="text-2xl cursor-pointer link-cursor  fa-brands fa-twitter"></i>
            <i className="text-2xl cursor-pointer link-cursor  fa-brands fa-github"></i>
            <i className="text-2xl cursor-pointer link-cursor  fa-brands fa-linkedin"></i>
          </div>
        </div>
      </section>
      <div className="text-center pt-8 mb-12">
        <p className="text-[#6B7280] text-[16px]">© 2026 Blogify. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer
