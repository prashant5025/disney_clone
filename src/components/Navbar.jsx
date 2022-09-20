import React, { useState } from "react";
import { Link} from 'react-scroll'
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
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl hover:text-indigo-600 cursor-pointer"><Link to='home' spy={true} smooth={true} offset={50} duration={1000}>BRAND.</Link></h1>

          <ul className="hidden md:flex">
          <li className=" p-4 hover:text-indigo-600 cursor-pointer"><Link to='home' spy={true} smooth={true} offset={50} duration={1000}>Home</Link></li>
          <li className=" p-4 hover:text-indigo-600 cursor-pointer"><Link to='about' spy={true} smooth={true} offset={50} duration={1000}>About</Link></li>
          <li className=" p-4 hover:text-indigo-600 cursor-pointer"><Link to='support' spy={true} smooth={true} offset={50} duration={1000}>Support</Link></li>
          <li className=" p-4 hover:text-indigo-600 cursor-pointer"><Link to='platforms' spy={true} smooth={true} offset={50} duration={1000}>Platforms</Link></li>
          <li className=" p-4 hover:text-indigo-600 cursor-pointer"><Link to='pricing' spy={true} smooth={true} offset={50} duration={1000}>Pricing</Link></li>
            
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
        <li className="border-b-2 border-zinc-300 w-full"><Link to='home' spy={true} smooth={true} offset={50} duration={1000}>Home</Link></li>
        <li className="border-b-2 border-zinc-300 w-full"><Link to='about' spy={true} smooth={true} offset={50} duration={1000}>About</Link></li>
        <li className="border-b-2 border-zinc-300 w-full"><Link to='support' spy={true} smooth={true} offset={50} duration={1000}>Support</Link></li>
        <li className="border-b-2 border-zinc-300 w-full"><Link to='platforms' spy={true} smooth={true} offset={50} duration={1000}>Platforms</Link></li>
        <li className="border-b-2 border-zinc-300 w-full"><Link to='pricing' spy={true} smooth={true} offset={50} duration={1000}>Pricing</Link></li>
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
