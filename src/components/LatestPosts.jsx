import React from 'react'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import Button from './Button'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from "uuid";

function LatestPosts() {
    let [post, setPost] = useState([])

    useEffect(() => {
        async function GetPost() {
            try {
                let res = await fetch('https://alijonov0901.pythonanywhere.com/api/v1/articles/')

                if(!res.ok){
                    throw new Error('Apida muammo')
                }
                let data = await res.json()
                setPost(data)
            } catch (error) {
              toast(error.message)  
            }
        }
        GetPost()
    }, [])
console.log(post);


  return (
    <section className="container py-32">
      <div className="flex mb-12 justify-between items-start">
        <div>
          <h2 className="text-[#0F1729] mb-2 text-[36px] font-bold">
            Latest Posts
          </h2>
          <p className="text-[#6B7280] text-[18px]">
            Check out our most recent articles
          </p>
        </div>
        <Button variant={"secendary"}>
          View all <i className="fa-solid fa-arrow-right"></i>
        </Button>
      </div>
      <div className="grid  grid-cols-[repeat(auto-fit,minmax(293px,1fr))]  gap-8">
        {post.slice(0, 3).map((post) => {
          return (
            <div
              key={uuidv4()}
              className="border-2 group border-gray-300 rounded-2xl duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative rounded-t-2xl overflow-hidden">
                <h2 className="bg-[#4346EF] z-2 py-0.5 px-2.5 rounded-2xl text-white absolute top-5 left-4">
                  {post.category.name}
                </h2>
                <img className="rounded-t-2xl z-1 w-full h-full object-cover  transition-transform duration-500 group-hover:scale-110 " src={post.image} alt="" />
              </div>
              <div className="p-6">
                <div className="text-[#6B7280] mb-12px flex gap-2 items-center">
                  <i className="fa-regular fa-calendar"></i>
                  <p>{post.updated_at.slice(0, 10)}</p>
                </div>
                <h2 className="text-[#0F1729] group-hover:text-[#4346EF] transition text-[20px] font-bold mb-2">
                  {post.title}
                </h2>
                <p className="text-[#6B7280] mb-4">{post.content}</p>
                <div className="text-[#4346EF] ">
                  <Link className='flex justify-start items-center gap-1 group-hover:gap-2.5' to={"/"}>
                    Read more{" "}
                    <i className="text-[16px] fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default LatestPosts
