import React from 'react'
import PostHero from '../../components/PostHero'
import PostCard from '../../components/PostCard'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import {PostContext} from "../../Context/PostProvider"

function PostPages() {
  let [inputValue, setInputValue] = useState("")
  let {posts} = useContext(PostContext)

  let filtr = posts?.filter((item) => {
    return(item.content.toLowerCase().includes(inputValue.trim().toLowerCase()))
  })

  return (
    <>
      <PostHero inputValue={inputValue} setInputValue={setInputValue} />
      <div className='container py-16'>
        <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtr?.map((post) => {
            return<PostCard key={post.id} post={post} />
          })}
        </div>
      </div>
    </>
  );
}

export default PostPages
