import React from 'react'
import Button from './Button';
import HeroImg from "../../src/assets/img/HeroImg.png"

function Hero() {
  return (
    <section className="bg-[#F7F1FD]">
      <div className="container py-20 md:py-32 flex justify-between">
        <div className=" max-w-146px ">
          <div className="text-3xl leading-none ...">
            <h1 className="text-[#0F1729] text-[36px] md:text-[60px]  font-bold">
              Create, Read, <br />{" "}
              <span className="bg-[linear-gradient(65deg,#4346EF,#8524E5)] bg-clip-text text-transparent">
                Inspire
              </span>
            </h1>
          </div>
          <p className="w-full max-w-122.25 text-[18px] md:text-[20px] text-gray-500 py-6">
            Discover stories written by amazing people. Share your knowledge and
            inspire others with your unique perspective.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant={"primary"}>
              Explore Posts <i className="fa-solid fa-arrow-right"></i>
            </Button>
            <Button variant={"secendary"}>Get Started</Button>
          </div>
        </div>
        <div className="hidden lg:block   ">
          <img className="w-full max-w-146 h-82" src={HeroImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero
