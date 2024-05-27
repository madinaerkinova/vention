import React from "react";

const Footer = () => {
  return (
    <div className="border-l bg-gray-900">
      <div className="grid grid-cols-[7fr_3fr] pl-[40px] border-b">
        <div className="border-r pt-[40px]">
          <p className="text-[28px] mb-[15px] text-white">
            Subscribe to our newsletter for industry <br /> insights and company
            news!
          </p>
          <span className="border-b block w-[300px] pb-[10px] mb-[15px]">
            <input
              className="bg-inherit text-[#b4b4b5] outline-none"
              type="email"
              placeholder="Enter email"
            />
          </span>
          <span className="flex gap-2">
            <input type="checkbox" />
            <p className="text-[14px] text-[#b4b4b5]">
              I agree to the{" "}
              <span className="underline text-[14px] text-[#b4b4b5]">
                Privacy Policy
              </span>{" "}
              and give my <br /> permission to process my personal data for the
              purposes specified in the Privacy Policy.
            </p>
          </span>
        </div>

        <div className="grid grid-cols-2 pt-[40px] pl-[30px] pb-[50px] justify-between">
          <ul className="flex flex-col gap-2">
            <li className="mb-[10px] text-[#b4b4b5]">About</li>
            <li className="hover:text-[#fe977e] cursor-pointer text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
              <a href="#company">Company</a>
            </li>
            <li className="hover:text-[#fe977e] cursor-pointer text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="hover:text-[#fe977e] cursor-pointer text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
              <a href="#partnership">Partnership</a>
            </li>
            <li className="hover:text-[#fe977e] cursor-pointer text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
              <a href="#newsroom">Newsroom</a>
            </li>
            <li className="hover:text-[#fe977e] cursor-pointer text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
              <a href="#media-kit">Media kit</a>
            </li>
            <li className="hover:text-[#fe977e] cursor-pointer text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
              <a href="#careers">Careers</a>
            </li>
            <li className="hover:text-[#fe977e] cursor-pointer text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-2">
            <li className="mb-[10px] text-[#b4b4b5]">Delivery Models</li>
            <li className="hover:text-[#fe977e] cursor-pointer text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
              <a href="#dedicated-teams">Dedicated development teams</a>
            </li>
            <li className="hover:text-[#fe977e] cursor-pointer text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
              <a href="#project-delivery">Project-based delivery</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-[7fr_3fr] pl-[40px]">
        <div className="pb-[50px]">
          <div className="grid grid-cols-2 justify-between pt-[40px] pl-[30px] pb-[50px]">
            <ul>
              <li className="hover:text-[#fe977e] cursor-pointer text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li className="hover:text-[#fe977e] cursor-pointer text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li className="hover:text-[#fe977e] cursor-pointer text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">X</a>
              </li>
              <li className="hover:text-[#fe977e] cursor-pointer text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
              </li>
            </ul>
            <ul>
              <li className="hover:text-[#fe977e] cursor-pointer text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
                +998 45039485-92
              </li>
              <li className="hover:text-[#fe977e] cursor-pointer text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="hover:text-[#fe977e] cursor-pointer text-white transition duration-300 ease-in-out transform hover:-translate-y-1">
                USA new york
              </li>
            </ul>
          </div>

          <p className="text-[14px] px-[30px] text-white">
            © 2002 - 2024. Vention All Rights Reserved{" "}
            <span className="underline">
              <a href="#privacy-policy">Privacy Policy</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
