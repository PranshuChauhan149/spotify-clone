import React from "react";
import assets from "../assets/react.svg";
import { IoIosSearch } from "react-icons/io";
import { RiArrowLeftLine } from "react-icons/ri";
import { BsStack } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

  const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-2 gap-2 text-white lg:flex flex-col">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div onClick={()=>navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer">
          <IoHome className="w-6" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <IoIosSearch className="w-6" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 items-center flex justify-between">
          <div className="flex items-center gap-3">
            <BsStack className="w-8 h-6" />
            <p className="font-semibold">Your Libary</p>
          </div>
          <div className="flex items-center gap3">
            <RiArrowLeftLine className="w-5 h-full rotate-180" />
            <IoMdAdd className="w-5 h-full" />
          </div>
         
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start">
    <h1>Create your first playlist</h1>
    <p className="font-light">it's easy we will help you</p>
    <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Create Playlist</button>

          </div>
          <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start mt-4">
    <h1>Let's findsome podcast to follow </h1>
    <p className="font-light">we'll keep tou update on new episoides</p>
    <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Browse podcasts</button>

          </div>
      </div>
    </div>
  );
};

export default Sidebar;
