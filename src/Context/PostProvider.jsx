import { createContext, useState } from "react"
import React from 'react'
import { useEffect } from "react"
import { toast } from "react-toastify"

export const PostContext = createContext()

let Base = import.meta.env.VITE_BASE_URL;

function PostProvider({ children }) {
    let [posts, setPosts] = useState([])
 
    useEffect(() => {
        async function getPost() {
          try {
            let res = await fetch(`${Base}api/v1/articles/`);
            if (!res.ok) throw new Error("Xatolik!");
            let data = await res.json();
            
            setPosts(data);
          } catch (error) {
            toast.error(error.message);
          }
        }
        getPost();
      }, [])

    return <PostContext.Provider value={{posts, setPosts}}>{children}</PostContext.Provider>
}

export default PostProvider
