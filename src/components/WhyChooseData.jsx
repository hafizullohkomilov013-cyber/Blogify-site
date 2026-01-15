import React from "react";

function WhyChooseCard({ item }) {
  let { text, title, icon } = item;

  return (
    <div className="w-full max-w-[384px] h-60 items-center justify-center rounded-2xl border border-gray-600 p-8">
      <img src={icon} alt="icon" />
      <h2 className="mt-4 mb-2 text-[20px] font-bold text-[#0F1729]">
        {title}
      </h2>
      <p className="text-[#6B7280] ">{text}</p>
    </div>
  );
}

export default WhyChooseCard;
