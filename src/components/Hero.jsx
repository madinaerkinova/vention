import React, { useEffect, useState } from "react";
import { FaCcPaypal } from "react-icons/fa";
import { SiCocacola } from "react-icons/si";
import { FaVimeoSquare } from "react-icons/fa";
import { SiIbm } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaIdeal } from "react-icons/fa";
import { FcWikipedia } from "react-icons/fc";
import { FcSignature } from "react-icons/fc";
import { FcCommandLine } from "react-icons/fc";
import Inc from "../../public/assets/inc5000.svg";
import Gptw from "../../public/assets/gptw.svg";
import Financial from "../../public/assets/financial_times.svg";
import Aws from "../../public/assets/aws.svg";
import GBE from "../../public/assets/GBE.svg";
import Staive from "../../public/assets/Stevie.svg";
import Image1 from "../../public/assets/image1.jpg";
import Image2 from "../../public/assets/image2.jpg";
import Image3 from "../../public/assets/image3.jpg";
import Image4 from "../../public/assets/image4.jpg";
import Slide from "./Slide";

const Hero = () => {
  const [slide, setSlide] = useState(1);
  const slideTitles = {
    1: "Engineering peace of mind",
    2: "International Invention Day",
    3: "AI innovation",
    4: "Expert software development",
  };

  const slideBtn = {
    1: "Get an estimate",
    2: "Enter the contest",
    3: "Read the report",
    4: "Schedule a call",
  };
  const slideImg = [Image1, Image1, Image2, Image3, Image4];

  const slideContent = {
    1: "Vention developers partner with innovative companies from startups to Fortune 500s, lending the AI engineering expertise to propel them to new heights and the edge to outpace the competition.",
    2: "On May 16, Vention kicks off International Invention Day, celebrating human creativity and game-changing inventions. Until June 30, you’ll also have a chance to join the In:Vention Incubator and win 12 weeks of our top-tier services worth $150K USD in in-house software development.",
    3: "As pioneers in AI engineering, we view it as more than a shiny tool: it's a pillar of the new business normal. Those companies that embrace and leverage AI will set the standard and lead in their category. In our new State of AI report, we look at funding, investment, and valuation trends across the AI market.",
    4: "Get it done right — the first time. Our proven software expertise and engagement flexibility mean you don’t have to worry about timelines, processes, or outcomes. Proficient in web, mobile, cloud, and advanced tech like AI and VR, we empower you to innovate and grow your business at the scale and speed of future trends.",
  };

  const slideBg = {
    1: "bg-[#ff6a47]",
    2: "bg-[#ff6fff]",
    3: "bg-[#ff6a47]",
    4: "bg-[#3155ff]",
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlide((prevSlide) => (prevSlide % 4) + 1);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="px-[30px] container mx-auto mt-[20px] pb-[60px] border-b">
        <div className="grid grid-cols-2 h-[200px]">
          <div className={`${slideBg[slide]} grid items-center dropDown`}>
            <h1 className="text-[70px] leading-[90%] pl-[30px] dropDown">
              {slideTitles[slide]}
            </h1>
          </div>
          <div className="flex items-end justify-end pb-[20px]">
            <ul className="flex w-[400px] justify-between gap-5">
              {[1, 2, 3, 4].map((num) => (
                <li
                  key={num}
                  onClick={() => setSlide(num)}
                  className={`text-[22px] cursor-pointer dropDown ${
                    slide === num
                      ? "border-[#39175b] text-[#39175b] grow"
                      : "border-[#d2d2d5] text-[#d2d2d5]"
                  } font-semibold p-2 border-t-[3px]`}
                >
                  {num.toString().padStart(2, "0")}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 h-[520px]">
          <div className="flex flex-col justify-end items-end pr-[20px] pb-[30px]">
            <div className="max-w-[400px]">
              <p className="mb-[50px] text-[22px] leading-7 font-thin">
                {slideContent[slide]}
              </p>
              <button
                className={`w-full flex p-[20px] justify-between items-center h-[70px] ${slideBg[slide]} hover:bg-[#52002d] hover:text-white dropDown`}
              >
                <span className="text-[28px] font-medium">
                  {slideBtn[slide]}
                </span>
              </button>
            </div>
          </div>

          <div className="pb-[30px] relative overflow-hidden">
            <Slide slide={slide} setSlide={setSlide}>
              {slideImg.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt="image"
                  className="max-h-[500px] w-full min-h-[500px] relative z-0"
                />
              ))}
            </Slide>
          </div>
        </div>
      </div>

      <div className="border-l border-b py-[30px]">
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>
        <h1 className="text-4xl font-semibold mt-[180px] mx-[100px]">
          With 20+ years of providing software development services for
          technological enterprises, successful startups, and AI-empowered
          companies worldwide, our developers demonstrate exceptional efficiency
          and expertise.
        </h1>
        <p className="ml-[890px] mt-[20px] text-lg mb-[40px]">
          On average, Vention clients benefit $600,000+ from annual savings as a
          result of <br /> our collaboration.
        </p>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>
      </div>

      <div className="border-l border-b py-[30px]">
        <div className="mx-[110px] flex gap-[650px] items-center">
          <h1 className="text-3xl font-semibold text-pink-900">Key Stats</h1>
          <div className="flex gap-[150px]">
            <span className="text-pink-900 text-8xl font-sans">500+</span>
            <span className="text-pink-900 text-8xl font-sans">$15B+</span>
          </div>
        </div>
        <div className="flex ml-[830px] mt-[20px] mb-[40px]">
          <h1 className="text-xl">award-winning clients</h1>
          <h1 className="ml-[190px] text-xl">in client acquisitions</h1>
        </div>
      </div>

      <div className="border-l border-b py-[30px]">
        <div className="flex gap-[260px] mx-[100px] w-full">
          <span className="text-7xl text-pink-900 font-sans">36</span>
          <span className="text-7xl text-pink-900 font-sans">20+</span>
          <div className="flex gap-[250px]">
            <span className="text-7xl text-pink-900 font-sans">20+</span>
            <span className="text-7xl text-pink-900 font-sans">3K+</span>
          </div>
        </div>
        <div className="flex gap-[90px] mx-[100px] my-[40px]">
          <span className="text-xl font-sans">month average engagement</span>
          <span className="text-xl font-sans">client IPOs supported</span>
          <div className="ml-[110px] flex gap-[200px]">
            <span className="text-xl font-sans">years of experience</span>
            <span className="text-xl font-sans">world-class engineers</span>
          </div>
        </div>
      </div>

      <div className="border-l border-b py-[30px]">
        <h1 className="text-2xl text-[#020c27] font-semibold mx-[110px]">
          Vention teams work with forward-thinking brands and industry leaders
          across the globe.
        </h1>
        <div className="flex mx-[100px] mt-[20px] gap-[100px] mb-[40px]">
          <SiPostman size={60} />
          <FaIdeal size={60} />
          <SiCocacola size={60} />
          <SiIbm size={60} />
          <FaCcPaypal size={60} />
          <FaVimeoSquare size={60} />
          <FcWikipedia size={60} />
          <FcSignature size={60} />
          <FcCommandLine size={60} />
        </div>
      </div>

      <div className="border-l border-b py-[30px] mb-20">
        <h1 className="text-2xl text-[#020c27] font-semibold mx-[110px]">
          Vention is recognized as a great place to work and a leader in
          software development.
        </h1>
        <div className="grid grid-cols-3 mx-[100px] mt-[20px] gap-[70px]">
          <img src={Inc} alt="inc5000" className="h-[50px]" />
          <img src={Gptw} alt="gptw" className="h-[50px]" />
          <img src={Financial} alt="financial_times" className="h-[50px]" />
          <img src={Aws} alt="aws" className="h-[50px]" />
          <img src={GBE} alt="GBE" className="h-[50px]" />
          <img src={Staive} alt="Stevie" className="h-[50px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
