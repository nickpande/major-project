import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
function SideNav() {
  return (
       <div className='w-[20%] h-full  border-r-2 border-zinc-200 p-10'>
        <h1 className='text-2xl text-white  font-bold'>
            <i className=" text-[#6565CD] ri-tv-fill text-2xl mr-2"></i>
            <span className='text-2xl '>
            NPDB.
            </span>
        </h1>
        <nav className='flex flex-col text-zinc-400 text-l  gap-3 '>
        <h1 className='text-white font-semibold text-xl mt-8 mb-3  '>
            New Feeds
        </h1>
        <Link to="/trending" className="hover:bg-[#6565CD] rounded-lg duration-300  hover:text-white  p-3">
        <i className=" mr-2 ri-fire-fill"></i>  Trending
        </Link>
        <Link className="hover:bg-[#6565CD] rounded-lg duration-300  hover:text-white  p-3">
        <i className="mr-2 ri-bard-fill"></i>   Trending Series 
        </Link>
        <Link className="hover:bg-[#6565CD] rounded-lg duration-300  hover:text-white  p-3">
        <i className=" mr-2 ri-movie-2-fill"></i>  Movies 
        </Link>
        <Link className="hover:bg-[#6565CD] rounded-lg duration-300  hover:text-white  p-3">
        <i className="mr-2 ri-slideshow-3-fill"></i> series 
        </Link>
        <Link className="hover:bg-[#6565CD] rounded-lg duration-300  hover:text-white  p-3">
        <i className="mr-2 ri-user-line"></i> People
        </Link>
        
        </nav>
        <hr className='border-node h-[1px] bg-zinc-400 mt-2' />
         <nav className='flex flex-col text-zinc-400 text-l  gap-3 '>
        <h1 className='text-white font-semibold text-xl mt-10 mb-5  '>
            WebSite Information
        </h1>
        <Link className="hover:bg-[#6565CD] rounded-lg duration-300  hover:text-white  p-3">
        <i className="mr-2 ri-information-line"></i>  About 
        </Link>
        <Link className="hover:bg-[#6565CD] rounded-lg duration-300  hover:text-white  p-3">
        <i className="mr-2 ri-phone-fill"></i>   Contact 
        </Link>
        
        </nav>
      
    </div>
  )
}

export default SideNav