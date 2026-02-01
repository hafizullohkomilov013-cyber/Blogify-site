import React, { useState, useRef } from "react";
import FileImg from "../../assets/img/FileIcon.svg";
import Select from "react-select";
import { toast } from "react-toastify/unstyled";

let Base = import.meta.env.VITE_BASE_URL;

const options = [
  { value: "1", label: "Technology" },
  { value: "2", label: "Productivity" },
  { value: "3", label: "Design" },
  { value: "4", label: "Business" },
  { value: "5", label: "Lifestyle" },
];

function CreatePosts() {
  const TitleRef = useRef();
  const ContentRef = useRef();
  const ImgRef = useRef();

  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Token tekshirish
    const tokenString = localStorage.getItem("token");
    if (!tokenString) {
      toast.error("Avval login qiling");
      setLoading(false);
      return;
    }

    let token;
    try {
      token = JSON.parse(tokenString);
    } catch {
      toast.error("Token noto‘g‘ri");
      setLoading(false);
      return;
    }

    if (!token?.access) {
      toast.error("Avval login qiling");
      setLoading(false);
      return;
    }

    if (!category) {
      toast.error("Category tanlang");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", TitleRef.current.value);
    formData.append("content", ContentRef.current.value);
    formData.append("category", category.value); // backend kutgan format
    if (ImgRef.current.files[0]) {
      formData.append("image", ImgRef.current.files[0]);
    }

    try {
      const res = await fetch(`${Base}/api/v1/articles/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token.access}`,
        },
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Xatolik: Ma'lumot yuborilmadi");
      }

      const data = await res.json();
      console.log(data);
      toast.success("Post muvoffaqqiyatli joylandi");

      TitleRef.current.value = "";
      ContentRef.current.value = "";
      setCategory(null);
      ImgRef.current.value = "";
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

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
                ref={TitleRef}
                className="outline-none border-gray-300 border-2 rounded-2xl p-3"
                type="text"
                placeholder="Enter post title..."
              />
            </label>
            <label className="flex flex-col gap-3">
              <span>Content</span>
              <textarea
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
                <Select
                  value={category}
                  onChange={setCategory}
                  options={options}
                />
              </label>
            </div>

            <div className="border-2 w-full h-75.5 flex flex-col p-6 rounded-2xl border-gray-300">
              <h2 className="text-[#0F1729] text-[30px] font-semibold mb-4">
                Featured Image
              </h2>
              <div className="text-center flex h-full flex-col justify-center items-center">
                <label className="text-center border-gray-400 border-2 border-dashed rounded-2xl w-full h-full cursor-pointer flex flex-col justify-center items-center">
                  <img className="mb-4" src={FileImg} alt="" />
                  <input ref={ImgRef} className="w-50" type="file" />
                </label>
              </div>
            </div>

            <button
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePosts;
