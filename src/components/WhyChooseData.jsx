import React from "react";

function WhyChooseCard({ item }) {
  let { text, title, icon } = item;

  return (
    <div className="w-full duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl rounded-2xl border-2 border-gray-200 p-8">
      <img src={icon} alt="icon" />
      <h2 className="mt-4 mb-2 text-[20px] font-bold text-[#0F1729]">
        {title}
      </h2>
      <p className="text-[#6B7280] ">{text}</p>
    </div>
  );
}

export default WhyChooseCard;
