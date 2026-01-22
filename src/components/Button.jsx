import React from "react";

function Button({ children, variant }) {
  let variants = {
    primary:
      "max-w-50 rounded-2xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl  bg-linear-65 from-[#4346EF] to-[#8524E5] pt-3 pr-7 pb-3 pl-7 text-white",
    secendary:
      "rounded-2xl hover:border-blue-600 transition-all max-w-[157px] border-[2px] border-gray-300 duration-300 ease-in-out hover:-translate-y-1 bg-white py-3 px-7",
  };
  return <button className={variants[variant]}>{children}</button>;
}

export default Button;
