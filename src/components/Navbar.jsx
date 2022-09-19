import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl hover:text-indigo-600 cursor-pointer">BRAND.</h1>

          <ul className="hidden md:flex">
            <li className=" p-4 hover:text-indigo-600 cursor-pointer">Home</li>
            <li className=" p-4 hover:text-indigo-600 cursor-pointer">About</li>
            <li className=" p-4 hover:text-indigo-600 cursor-pointer">Support</li>
            <li className=" p-4 hover:text-indigo-600 cursor-pointer">Platforms</li>
            <li className=" p-4 hover:text-indigo-600 cursor-pointer">Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className="md:hidden " onClick={handleClick}>
          {!nav ? (
            <AiOutlineMenu className="text-3xl" />
          ) : (
            <AiOutlineClose className="text-3xl" />
          )}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Support</li>
        <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
        <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
