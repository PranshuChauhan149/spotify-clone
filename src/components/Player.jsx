import React, { useContext } from "react";
import { songsData } from "../assets/assets";
import { FaShuffle } from "react-icons/fa6";
import { MdOutlineSkipPrevious } from "react-icons/md";
import { IoPlayOutline } from "react-icons/io5";
import { MdOutlineSkipNext } from "react-icons/md";
import { MdLoop } from "react-icons/md";
import { IoPlaySharp } from "react-icons/io5";
import { FaMicrophoneSlash } from "react-icons/fa";
import { MdQueue } from "react-icons/md";
import { LuMonitorSpeaker } from "react-icons/lu";
import { FaVolumeHigh } from "react-icons/fa6";
import { CgMiniPlayer } from "react-icons/cg";
import { MdOutlineZoomInMap } from "react-icons/md";
import { PlayerContext } from "../context/PlayerContext";
import { CiPause1 } from "react-icons/ci";


function Player() {

const {track,seekBar, seekBg,playStatus,play,pause,time,previous,next,seekSong} = useContext(PlayerContext);

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <FaShuffle className="w-4 h-8" />

          <MdOutlineSkipPrevious className="w-8 h-8" onClick={previous} />


          {playStatus ?  <CiPause1 className="w-8 h-8" onClick={pause} />
:  <IoPlayOutline className="w-8 h-8" onClick={play}/>}
         
         
          <MdOutlineSkipNext className="w-8 h-8" onClick={next} />
          <MdLoop className="w-5 h-8" />
        </div>
        <div className="flex items-center gap-5">
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg}   onClick={seekSong}  className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr ref={seekBar} className="h-1 border-none w-0 bg-green-800 rounded-full " />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <IoPlaySharp />
        <FaMicrophoneSlash />
        <MdQueue />
        <LuMonitorSpeaker />
        <FaVolumeHigh />

      <div className="w-20 bg-slate-50 h-1 rounded">


        
      </div>

        <CgMiniPlayer />
        <MdOutlineZoomInMap />


      </div>
    </div>
  );
}

export default Player;
