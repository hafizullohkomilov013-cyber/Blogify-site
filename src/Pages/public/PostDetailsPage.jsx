import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import RelatedPosts from './RelatedPosts';

let Base = import.meta.env.VITE_BASE_URL;

function PostDetailsPages() {
  let { hi } = useParams();
  let [post, setPost] = useState(null);
  let { category, title, image, id, updated_at } = post || {};


  useEffect(() => {
    async function getPost() {
      try {
        let res = await fetch(`${Base}api/v1/articles/${hi}/`);
        if (!res.ok) throw new Error("Xatolik!");
        let data = await res.json();
        console.log(data);
        
        setPost(data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    getPost();
  }, [hi]);

  if (!post) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className='py-24'>
      <div className='container '>
        <Link className='flex items-center text-[#0F1729] gap-2 font-medium py-3 px-6' to="/PostPages">
          <i className="fa-solid fa-arrow-left"></i> Back to Posts
        </Link>
        <div className='flex w-full mb-16 max-w-208 mx-auto flex-col justify-center'>
            <p className='text-white bg-[#4346EF] mb-4 py-0.5 px-2.5 rounded-2xl w-fit'>{category.name}</p>
            <h1 className='text-[#0F1729] mb-4 text-[60px] font-bold'>{title}</h1>
            <div className='flex gap-4 mb-8'>
              <div className='flex  items-center gap-2 text-[#6B7280]'>
                <i className="fa-regular fa-user"></i>
              </div>
              <div className='flex  items-center gap-2 text-[#6B7280]'>
                <i className="fa-regular fa-calendar"></i>
                <p>{updated_at.slice(0,10 )}</p>
              </div>
            </div>
            <img className='rounded-b-2xl' src={image} alt="" />
            <p className='text-[#6B7280] text-[20px] leading-7 mt-7'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore magnam vel, nemo numquam voluptatibus beatae blanditiis sequi voluptatem fugit saepe eum quidem dolores odit atque illo quam labore animi porro nesciunt natus repellendus harum inventore possimus aperiam! Ratione at ex porro minima voluptas dignissimos nobis nisi, atque, autem amet a! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis a, sunt ducimus, nemo adipisci sint unde autem vero maxime, esse eligendi expedita pariatur natus porro vitae consequuntur? Possimus nostrum provident impedit eligendi ullam explicabo dolor minima nobis quod corrupti expedita ipsam maiores eveniet incidunt, dolorum excepturi molestias id aspernatur eum.
            </p>
        </div>
      </div>
      <RelatedPosts post={post} id={id} />
    </section>
  );
}


export default PostDetailsPages;
