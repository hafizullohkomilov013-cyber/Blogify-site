  import React, { useContext } from "react";
  import { PostContext } from "../../Context/PostProvider.jsx";
  import Stats from "../../data/DashboardData.js";
  import { toast } from "react-toastify";
  import { useState } from "react";

  let Base = import.meta.env.VITE_BASE_URL;

  function DashBoardPage() {
    const [showModal, setShowModal] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    let { posts, setPosts } = useContext(PostContext);

    let token = JSON.parse(localStorage.getItem('token'))

    async function deletePost(id){
      console.log(id);
      try {
        let res = await fetch(`${Base}api/v1/articles/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token.access}`,
          },
        });
        if(!res.ok){
          throw new Error('Xatolik')
        }
          setPosts((prev) => prev.filter((post) => post.id !== id));
          toast.success("Post muvaffaqiyatli o‘chirildi");

      } catch (error) {
        toast(error.message)
      }
    }

    return (
      <div className="p-8 min-h-screen m-auto w-full max-w-7xl">
        <div className="mb-5">
          <h1 className="text-[#0F1729] text-[30px] font-bold mb-2">Dashboard</h1>
          <p className="text-[#6B7280] text-sm">
            Welcome back! Here's an overview of your blog.
          </p>
        </div>
        <div className="flex gap-6 mb-3">
          {Stats.map((item) => (
            <div
              key={item.id}
              className="mb-4 w-full sm:w-70 p-4 border border-gray-200 rounded-lg"
            >
              <div className="flex items-center mb-4 justify-between">
                <img src={item.image} alt={item.title} />
                <h2 className="text-[#21C45D] text-[14px] font-medium">
                  {item.change}
                </h2>
              </div>
              <h2 className="text-[24px] text-[#0F1729] font-bold mb-1">
                {item.value}
              </h2>
              <p className="text-[#6B7280] text-[14px]">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="w-full bg-white rounded-xl shadow-sm border-2 border-gray-200 p-6">
          <div className="mb-3">
            <h2 className="text-[20px] mb-1 font-semibold text-[#0F1724]">
              Recent Posts
            </h2>
            <p className="text-sm text-gray-500">
              Manage and monitor your latest content
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="table w-full table-fixed">
                <tr className="border-b  text-left text-sm text-gray-500">
                  <th className="p-4 text-start font-medium">Title</th>
                  <th className="p-4 text-center font-medium">Category</th>
                  <th className="p-4 text-center font-medium">Date</th>
                  <th className="p-4 text-start font-medium">Status</th>
                  <th className="p-4 font-medium text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="text-sm block max-h-58 overflow-y-auto">
                {posts.length === 0 ? (
                  <tr className="table w-full">
                    <td colSpan="5" className="py-6 text-center text-gray-500">
                      No posts found
                    </td>
                  </tr>
                ) : (
                  posts.map((post) => (
                    <tr
                      key={post.id}
                      className="border-b hover:bg-gray-50 table w-full table-fixed"
                    >
                      <td className="p-4 font-medium text-gray-900">
                        {post.title}
                      </td>

                      <td className="p-4 text-center">
                        <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600">
                          {post.category?.name}
                        </span>
                      </td>

                      <td className="p-4 text-center text-gray-500">
                        {post.updated_at?.slice(0, 10)}
                      </td>

                      <td className="p-4">
                        <span
                          className={`px-3 py-1 text-xs rounded-full ${
                            post.is_active
                              ? "bg-green-100 text-green-600"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {post.is_active ? "Published" : "Draft"}
                        </span>
                      </td>

                      <td className="p-4 text-right space-x-3">
                        <button className="text-blue-600 cursor-pointer  hover:underline">
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            setSelectedPost(post);
                            setShowModal(true);
                          }}
                          className="text-red-500 cursor-pointer hover:underline"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
              </table>
              {showModal && selectedPost && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                  <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-lg">
                    <h2 className="text-lg font-semibold mb-4">
                      Rostan ham <b>{selectedPost.title}</b> postni
                      o‘chirmoqchimisiz?
                    </h2>

                    <div className="flex justify-end gap-3">
                      <button
                        onClick={() => setShowModal(false)}
                        className="px-4 py-2 cursor-pointer rounded-xl border"
                      >
                        Yo‘q
                      </button>

                      <button
                        onClick={async () => {
                          await deletePost(selectedPost.id);
                          setShowModal(false);
                        }}
                        className="px-4 py-2 cursor-pointer rounded-xl bg-red-500 text-white"
                      >
                        Ha
                      </button>
                    </div>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    );
  }

  export default DashBoardPage;
