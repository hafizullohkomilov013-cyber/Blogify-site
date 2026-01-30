import React from 'react'
import { useContext } from 'react';
import Button from './Button'
import { Link } from 'react-router-dom'
import { PostContext } from '../Context/PostProvider';
import PostCard from './PostCard';



function LatestPosts() {

  let { posts } = useContext(PostContext);
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
          <Link to={"/PostPages"}>
            View all <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </Button>
      </div>
      <div className="grid  grid-cols-[repeat(auto-fit,minmax(293px,1fr))]  gap-8">
        {posts?.slice(0, 3).map((post) => {
          return <PostCard key={post.id} post={post} />
        })}
      </div>
    </section>
  );
}

export default LatestPosts
