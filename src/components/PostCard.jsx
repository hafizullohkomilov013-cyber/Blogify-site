import React from "react";
import { Link } from "react-router-dom";


function PostCard({post}) {
    console.log(post);
    <h2>salom</h2>
    
  return (
    <div className="container py-16">
              <div
                className="border-2  group border-gray-300 rounded-2xl duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative rounded-t-2xl overflow-hidden">
                  <h2 className="bg-[#4346EF] z-2 py-0.5 px-2.5 rounded-2xl text-white absolute top-5 left-4">
                    {post.category?.name}
                  </h2>
                  <img
                    className="rounded-t-2xl z-1 w-full h-full object-cover  transition-transform duration-500 group-hover:scale-110 "
                    src={post.image}
                    alt=""
                  />
                </div>
                <div className="p-6">
                  <div className="text-[#6B7280] mb-12px flex gap-2 items-center">
                    <i className="fa-regular fa-calendar"></i>
                    <p>{post.updated_at?.slice(0, 10)}</p>
                  </div>
                  <h2 className="text-[#0F1729] group-hover:text-[#4346EF] transition text-[20px] font-bold mb-2">
                    {post.title}
                  </h2>
                  <p className="text-[#6B7280] mb-4">{post.content}</p>
                  <div className="text-[#4346EF]">
                    <Link
                      className="flex justify-start items-center gap-1 group-hover:gap-2.5"
                      to={`/PostDetailsPages/${post.id}`}
                    >
                      Read more{" "}
                      <i className="text-[16px] fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
    </div>
  );
}

export default PostCard;
