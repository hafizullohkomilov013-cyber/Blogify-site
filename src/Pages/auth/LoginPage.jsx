import React from 'react'
import { useNavigate } from "react-router-dom";
import LoginImg from "../../assets/img/LoginImg.png"
import LoginLogo from '../../assets/img/NavLogo.svg'
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { toast } from 'react-toastify';

let Base = import.meta.env.VITE_BASE_URL;

function LoginPage() {
  let emailRef = useRef('')
  let paswordRef = useRef('')
  let navigate = useNavigate()
  console.log(navigate);
  
  
  async function hendleSubmit (e) {
    e.preventDefault()
    try {
      let res = await fetch(`${Base}/auth/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
           email: emailRef.current.value,
            password: paswordRef.current.value,
        }),
      }); 
      
      if(res.ok){
        navigate("/admin")
        
      }else{
        throw new Error('Xatolik')
      }
      let data = await res.json()
      console.log(data);
      

    } catch (error) {
      toast.error(error.message)
    }
  }
  

  return (
    <div className="flex h-screen">
      <div className="flex-1 w-fit px-5 flex justify-center  h-full">
        <div className="flex  w-full max-w-md flex-col   h-full justify-center">
          <img className="h-7 mb-8 w-fit" src={LoginLogo} alt="login-icon" />
          <Link
            to={"/"}
            className="flex w-fit font-medium mb-8 items-center gap-4 text-[#0F1729] text-[12px] py-2.5 px-4"
          >
            <i className="fa-solid fa-arrow-left"></i>
            Back to Home
          </Link>
          <div className="border-2 border-[#E5E7EB] rounded-2xl py-6 px-8">
            <h2 className="text-[30px] text-[#0F1729] font-bold mb-2">
              Welcome Back
            </h2>
            <p className="text-[16px] text-[#6B7280] mb-6">
              Enter your credentials to access your account
            </p>
            <form onSubmit={hendleSubmit}>
              <label>
                <span className="text-[#0F1729]">Email</span> <br />
                <input
                  required
                  className="p-3.25 mb-4 mt-3 border-2 outline border-[#E5E7EB]  w-full rounded-2xl"
                  type="text"
                  placeholder="name@example.com"
                  ref={emailRef}
                />
              </label>
              <label>
                <span className="text-[#0F1729]">Pasword</span> <br />
                <input
                  required
                  className="p-3.25 mt-3 mb-4 border-2 outline border-[#E5E7EB]  w-full rounded-2xl"
                  type="pasword"
                  placeholder="******"
                  ref={paswordRef}
                />
              </label>
              <button
                className="text-white cursor-pointer rounded-2xl w-full py-3 bg-[#4346EF]"
                type="submit"
              >
                Login
              </button>
            </form>
            <div className="flex text-center justify-center mt-6">
              <p className="text-[#6B7280]">Don't have an account? </p>
              <Link to={"#"} className="text-[#4346EF]">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden flex-1 lg:flex bg-[#F2F1FD] h-full justify-center items-center">
        <div className="h-full text-center">
          <img
            className="w-full h-full max-h-144 max-w-xl"
            src={LoginImg}
            alt="Login-img"
          />
          <h2 className="text-[#0F1729] text-[30px] font-bold mb-4">
            Start Your Journey
          </h2>
          <p className="text-[#6B7280] text-[18px]">
            Join thousands of creators sharing their stories on Blogify
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage
