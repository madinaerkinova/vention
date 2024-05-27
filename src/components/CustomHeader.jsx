import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { GoGlobe } from "react-icons/go";

import Pages1 from "./Pages1";
import Pages2 from "./Pages2";

const CustomHeader = () => {
  const [isMouseHovering, setIsMouseHovering] = useState(false);
  const [isAboutHovering, setIsAboutHovering] = useState(false);
  const [isGlobeHovering, setIsGlobeHovering] = useState(false);

  const handleGlobeMouseEnter = () => {
    setIsGlobeHovering(true);
  };
  const handleGlobeMouseLeave = () => {
    setIsGlobeHovering(false);
  };

  const handleMouseEnter = () => {
    setIsMouseHovering(true);
  };
  const handleMouseLeave = () => {
    setIsMouseHovering(false);
  };

  const handleAboutMouseEnter = () => {
    setIsAboutHovering(true);
  };
  const handleAboutMouseLeave = () => {
    setIsAboutHovering(false);
  };

  const getCountryName = () => {
    if (isGlobeHovering) {
      return "USA";
    }

    return "RU";
  };

  return (
    <div className="relative">
      <nav className="flex container relative mx-auto pl-[30px] z-20 justify-between items-center border-b">
        <div>
          <h1 className="text-xl font-semibold">vention</h1>
        </div>

        <div className="flex items-center border-l">
          <ul className="flex items-center gap-[115px]">
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="cursor-pointer flex items-center py-4 gap-1 text-[18px] px-6 relative"
            >
              <span
                className={`${
                  isMouseHovering ? "block" : "hidden"
                } transition-all w-[110%] h-[3px] left-0 absolute bottom-[-2px] bg-black`}
              ></span>
              <span className="hover:text-[#52002d] transition-all">
                What we do
              </span>
              <IoChevronDownOutline
                className={`${
                  isMouseHovering ? "rotate-180" : ""
                } transition-all`}
              ></IoChevronDownOutline>
            </li>
            <li className="cursor-pointer transition-all hover:text-[#52002d] text-[18px] py-4">
              Portfolio
            </li>
            <li className="cursor-pointer transition-all hover:text-[#52002d] text-[18px] py-4">
              Insights
            </li>
            <li
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={handleAboutMouseLeave}
              className="cursor-pointer flex relative items-center px-6 text-[18px] py-4 gap-1"
            >
              <span
                className={`block w-[100%] h-[3px] ${
                  isAboutHovering ? "block" : "hidden"
                } left-0 absolute bottom-[-2px] bg-black`}
              ></span>
              <span className="hover:text-[#52002d] transition-all">
                About us
              </span>
              <IoChevronDownOutline
                className={`${
                  isAboutHovering ? "rotate-180" : ""
                } transition-all`}
              ></IoChevronDownOutline>
            </li>
          </ul>
          <button className="text-[18px] py-4 px-6 bg-[#ff6a47] transition-all hover:bg-[#52002d] hover:text-white">
            Contact us
          </button>
          <div
            onMouseEnter={handleGlobeMouseEnter}
            onMouseLeave={handleGlobeMouseLeave}
            className="px-12 relative z-40"
          >
            <span className="bg-[#ff6a47] transition-all globe-dot rounded-full w-2 h-2 absolute top-[-5px] right-[35%]"></span>
            <GoGlobe className="text-[24px]"></GoGlobe>
            {isGlobeHovering && (
              <span className="text-[#52002d] absolute top-[30px] left-[30px]">
                {getCountryName()}
              </span>
            )}
          </div>
        </div>
      </nav>
      <Pages1
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        isOpen={isMouseHovering}
      />
      <Pages2
        handleMouseEnter={handleAboutMouseEnter}
        handleMouseLeave={handleAboutMouseLeave}
        isOpen={isAboutHovering}
      />
    </div>
  );
};

export default CustomHeader;
