import React from 'react'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import Button from './Button'

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
    <section className='container'>
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-[#0F1729] mb-2 text-[36px] font-bold">Latest Posts</h2>
          <p className='text-[#6B7280] text-[18px]'>Check out our most recent articles</p>
        </div>
        <Button variant={"secendary"}>
          View all <i className="fa-solid fa-arrow-right"></i>
        </Button>
      </div>
      <div>{post.map((item) => {})}</div>
    </section>
  );
}

export default LatestPosts
