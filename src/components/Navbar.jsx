import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";

import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navgate = useNavigate();


  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <MdOutlineKeyboardArrowLeft onClick={()=>navgate(-1)} className="w-8 h-8  bg-black rounded-2xl cursor-pointer" />
          <RiArrowRightSLine onClick={()=>navgate(1)} className="w-8 h-8 bg-black rounded-2xl cursor-pointer" />
        </div>

        <div className=" flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hinden md:block cursor-pointer">Explore Premium</p>
          <p className="bg-black py-1 px-3 rounded text-[15px] cursor-pointer">Install App</p>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">P</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer"> Music</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Podcasts</p>
      </div>
    </>
  );
}

export default Navbar;
