
import Select from "react-select";
import { useState } from "react";
import FileImg from "../../assets/img/FileIcon.svg";


function EditPage() {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);


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
       <form  className="flex gap-6 w-full">
         <div className="border-2 flex flex-col gap-4 w-full max-w-147.5 p-6 rounded-2xl border-gray-300">
           <label className="flex flex-col gap-3">
             <span>Post Title</span>
             <input
               required
               className="outline-none border-gray-300 border-2 rounded-2xl p-3"
               type="text"
               placeholder="Enter post title..."
             />
           </label>
           <label className="flex flex-col gap-3">
             <span>Content</span>
             <textarea
               required
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
                 required
                 value={category}
                 onChange={setCategory}
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
                 <input required  className="w-50" type="file" />
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

export default EditPage;
