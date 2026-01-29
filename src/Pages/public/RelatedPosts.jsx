import React from 'react'
import { useContext } from 'react';
import { PostContext } from '../../Context/PostProvider';
import PostCard from '../../components/PostCard';


function RelatedPosts({id}) {
    let { posts } = useContext(PostContext);
    
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 gap-8">
      {posts &&
        posts?.slice(id, id + 2).map((post) => {
          console.log(post);

          return <PostCard post={post} />;
        })}
    </div>
  );
}

export default RelatedPosts
