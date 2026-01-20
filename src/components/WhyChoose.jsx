import React from 'react'
import { v4 as uuidv4 } from "uuid";
import WhyChooseData from './WhyChooseData';
import { whyChooseData } from '../data/WhyChooseData';

function WhyChoose() {
  return (
    <section className="container pt-32">
      <div className="text-center">
        <h2 className="text-[#0F1729] text-[36px] mb-3 font-bold tracking-tight">
          Why Choose Blogify?
        </h2>
        <p className="w-full max-w-2xl m-auto text-[18px] text-gray-500">
          Built with modern technologies and best practices to provide the best
          blogging experience.
        </p>
      </div>
      <div className=" mt-16 mb-32 grid  grid-cols-[repeat(auto-fit,minmax(293px,1fr))]  gap-8">
        {whyChooseData.map((item) => {
          return <WhyChooseData key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
}

export default WhyChoose
