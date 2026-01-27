import React from 'react'
import { useState, useEffect } from 'react';
import Stats from "../../data/DashboardData.js"

let Base = import.meta.env.VITE_BASE_URL;

function DashBoardPage() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    async function getPost() {
      try {
        let res = await fetch(`${Base}api/v1/articles/`);
        if(!res.ok){
          throw new Error("Failed to fetch posts");
        }
        let data = await res.json();
        setPost(data);
      } catch (error) {
        console.log(error.message);
        
      }
    }
    getPost()
}, []);

console.log(post);

  return (
    <div className="p-8 h-screen m-auto w-screen max-w-7xl">
      <div className='mb-8'>
        <h1 className="text-[#0F1729] text-[30px] font-bold  mb-2 ">Dashboard</h1>
        <p className='text-[#6B7280] text-4 '>Welcome back! Here's an overview of your blog.</p>
      </div>
      <div className='flex flex-wrap gap-6'>
          {Stats.map((item) => (
            <div key={item.id} className="mb-4 w-full max-w-70 p-4 border-2 border-gray-200 rounded-lg">
              <div className='flex items-center mb-4 justify-between '>
                <img src={item.image} alt={item.title}/>
                <h2 className="text-[#21C45D] text-[14px] font-medium">{item.change}</h2>
              </div>
              <h2 className='text-[24px] text-[#0F1729] font-bold mb-1'>{item.value}</h2>
              <p className='text-[#6B7280] text-[14px]'>{item.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default DashBoardPage
