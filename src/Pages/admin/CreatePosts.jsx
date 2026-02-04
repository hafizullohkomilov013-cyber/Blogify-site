import React, { useState, useRef } from "react";
import FileImg from "../../assets/img/FileIcon.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


let Base = import.meta.env.VITE_BASE_URL;


function CreatePosts() {
  const TitleRef = useRef();
  const ContentRef = useRef();
  const ImgRef = useRef();
  const CatecoryRef = useRef()

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token.access);



    const formData = new FormData();
    formData.append("title", TitleRef.current.value);
    formData.append("content", ContentRef.current.value);
    formData.append("category", CatecoryRef.current.value);
    formData.append("image", ImgRef.current.files[0]);
    try {
      const res = await fetch(
        `${Base}/api/v1/articles/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token.access}`,
          },
          body: formData,
        },
      );
      console.log(res);
      
      if (!res.ok) {
        throw new Error("Post yaratishda xato");
      }
      toast.success("Post muvaffaqiyatli yaratildi");
      TitleRef.current.value = "";
      ContentRef.current.value = "";
      ImgRef.current.value = "";
      CatecoryRef.current.value = ""
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
    }
  }  

  return (
    <div className="mx-auto w-full max-w-225">
      <div className="mb-8">
        <h2 className="text-[#0F1729] text-[30px] mb-2 font-bold">
          Create New Post
        </h2>
        <p className="text-[#6B7280] text-[16px]">
          Fill in the details to create a new blog post
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex gap-6 w-full">
          <div className="border-2 flex flex-col gap-4 w-full max-w-147.5 p-6 rounded-2xl border-gray-300">
            <label className="flex flex-col gap-3">
              <span>Post Title</span>
              <input
                required
                ref={TitleRef}
                className="outline-none border-gray-300 border-2 rounded-2xl p-3"
                type="text"
                placeholder="Enter post title..."
              />
            </label>
            <label className="flex flex-col gap-3">
              <span>Content</span>
              <textarea
                required
                ref={ContentRef}
                className="outline-none h-100 border-gray-300 border-2 rounded-2xl p-3"
                placeholder="Write your post content here..."
              ></textarea>
            </label>
          </div>

          <div className="w-70 flex flex-col gap-6">
            <div className="border-2 w-full flex flex-col p-6 rounded-2xl border-gray-300">
              <h2 className="text-[#0F1729] text-[30px] font-semibold mb-4">
                Post Settings
              </h2>
              <label className="flex flex-col gap-3">
                <span>Category</span>
                <select
                  ref={CatecoryRef}
                  className="
                w-full h-10
                rounded-[10px]
                border border-[#D1D5DB]
                px-4
                text-[14px] leading-3.5 font-medium text-[#111827]
                focus:outline-none focus:ring-2 focus:ring-[#3B82F6]
              "
                >
                  <optgroup>Select category</optgroup>
                  <option value="1">test 1</option>
                  <option value="2">test 2</option>
                </select>
              </label>
            </div>

            <div className="border-2 w-full h-75.5 flex flex-col p-6 rounded-2xl border-gray-300">
              <h2 className="text-[#0F1729] text-[30px] font-semibold mb-4">
                Featured Image
              </h2>
              <div className="text-center flex h-full flex-col justify-center items-center">
                <label className="text-center border-gray-400 border-2 border-dashed rounded-2xl w-full h-full cursor-pointer flex flex-col justify-center items-center">
                  <img className="mb-4" src={FileImg} alt="" />
                  <input required ref={ImgRef} className="w-50" type="file" />
                </label>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => console.log(formData)}
                type="submit"
                disabled={loading}
                className={`text-white cursor-pointer rounded-2xl w-full py-3 bg-[#4346EF] flex justify-center items-center ${
                  loading ? "opacity-70" : ""
                }`}
              >
                {loading ? (
                  <i className="fa-solid fa-circle-notch fa-spin text-white"></i>
                ) : (
                  "Publish Post"
                )}
              </button>
              <button className="border-2 border-[#E5E7EB] rounded-2xl py-2.5 px-6 cursor-pointer">cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePosts;
