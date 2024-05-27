import React from "react";

const Pages1 = ({ handleMouseEnter, handleMouseLeave, isMouseOver }) => {
    return (
        <div
            className={`container w-full backdrop-filter backdrop-blur-sm flex z-10 justify-end h-[95vh] transition-transform duration-300 absolute top-14 ${
                isMouseOver ? "top-14" : "top-[-95vh]"
            }`}
        >
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="bg-white h-full transition-all duration-300 absolute border-l z-10"
            >
                <div className="grid grid-cols-3 gap-10 pr-24 border-b pl-8 py-5">
                    <p className="text-lg text-[#52002d] font-medium">Services</p>
                    <div className="flex flex-col gap-3">
                        <p className="cursor-pointer text-lg underline">Software Development</p>
                        <p className="cursor-pointer text-lg underline">Web Development</p>
                    </div>
                    <div className="ml-6 flex flex-col gap-3">
                        <p className="cursor-pointer text-lg underline">Mobile App Development</p>
                        <p className="cursor-pointer text-lg underline">IT Services for Startups</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-10 pr-24 border-b pl-8 py-5">
                    <p className="text-lg text-[#52002d] font-medium">Industries</p>
                    <div className="flex flex-col gap-3">
                        <p className="cursor-pointer text-lg underline">Fintech</p>
                        <p className="cursor-pointer text-lg underline">Healthtech</p>
                        <p className="cursor-pointer text-lg underline">Edtech</p>
                        <p className="cursor-pointer text-lg underline">Gamedev</p>
                    </div>
                    <div className="ml-6 flex flex-col gap-3">
                        <p className="cursor-pointer text-lg underline">Real Estate</p>
                        <p className="cursor-pointer text-lg underline">Ecommerce</p>
                        <p className="cursor-pointer text-lg underline">Marketing / Adtech</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-10 pr-24 border-b pl-8 py-5">
                    <p className="text-lg text-[#52002d] font-medium">Expertise</p>
                    <div className="flex flex-col gap-3">
                        <p className="cursor-pointer text-lg underline">Cloud</p>
                        <p className="cursor-pointer text-lg underline">AR / VR</p>
                        <p className="cursor-pointer text-lg underline">Blockchain</p>
                        <p className="cursor-pointer text-lg underline">Salesforce</p>
                    </div>
                    <div className="ml-6 flex flex-col gap-3">
                        <p className="cursor-pointer text-lg underline">Internet of Things</p>
                        <p className="cursor-pointer text-lg underline">AI</p>
                        <p className="cursor-pointer text-lg underline">Big Data</p>
                        <p className="cursor-pointer text-lg underline">Cybersecurity</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pages1;
