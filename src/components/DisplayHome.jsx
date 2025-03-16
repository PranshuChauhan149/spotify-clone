import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbamItem from './AlbamItem'
import {albumsSong} from "../assets/assets"
import SongIitm from './SongIitm'

const DisplayHome = () => {
  return (
    <>
      <Navbar/>
      <div className='mb-4'>
        <h1 className='font-bold my-5 text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
        {albumsData.map((item,index)=>(<AlbamItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
        </div>
      </div>
     <div>
      <h1 className='font-bold my-5 text-2xl'>Today's biggest hits</h1>
      <div className='flex overflow-auto'>

    {albumsSong.map((item,index)=>(<SongIitm key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />))}
     </div>
     </div>
    </>
  )
}

export default DisplayHome
