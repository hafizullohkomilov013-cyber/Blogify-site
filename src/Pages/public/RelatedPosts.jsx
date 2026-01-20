import React from 'react'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import PostCard from '../../components/PostCard';

let Base = import.meta.env.VITE_BASE_URL;

function RelatedPosts({id,}) {
    console.log(id);
    
    let [posts, setPost] = useState([])
    console.log(posts);
    

    useEffect(() => {
        async function getPost() {
            try {
                let res = await fetch(`${Base}api/v1/articles/`);
                if (!res.ok) {
                  throw new Error("Xatolik !");
                }
                let data = await res.json();
                setPost(data);
            } catch (error) {
                toast.error(error.message)
            }
        }
        getPost()
    }, [id])
    
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 gap-8">
      {posts &&
        posts.slice(id, id + 2).map((post) => {
          console.log(post);

          return <PostCard post={post} />;
        })}
    </div>
  );
}

export default RelatedPosts
