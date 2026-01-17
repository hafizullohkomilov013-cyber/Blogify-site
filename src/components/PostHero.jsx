import React from 'react'

function PostHero() {
  return (
    <section className="mt-16.25 bg-[#F1F1FE]">
      <div className="container py-24 text-center flex flex-col justify-center items-center">
        <h1 className="text-[36px] md:text-[60px] text-[#0F1729] font-bold">Explore Our Posts</h1>
        <p className='text-[#6B7280] text-[20px] mb-8'>
          Discover amazing content from talented writers across various topics
        </p>
        <div className='p-3.75 flex bg-white items-center gap-2 border-2 border-gray-300 rounded-2xl w-full max-w-xl'>
          <i className="text-gray-400 fa-solid fa-magnifying-glass"></i>
          <input className='outline-0 text-[16px]' type="text" placeholder="Search posts..." />
        </div>
      </div>
    </section>
  );
}

export default PostHero
