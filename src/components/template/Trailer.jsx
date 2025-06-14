import React from 'react'
import ReactPlayer from "react-player";
import {useLocation ,useNavigate , Link}  from "react-router-dom"
import {useSelector} from "react-redux"
import NotFound from '../NotFound';

const Trailer = () => {

const navigate = useNavigate();
const { pathname } = useLocation()
const category = pathname.includes("movie") ? "movie" : "tv"
  const ytVideo = useSelector(state=>state[category].info.videos)
  console.log();

  return  (
    <div className='absolute w-screen bg-[rgba(0,0,0,.9)]  h-screen flex items-center justify-center top-0 left-0'>
     <Link
          onClick={() => navigate(-1)}
           className="hover:text-[#6556CD] text-3xl text-white rigt-[5%] top-[5%] absolute ri-close-fill cursor-pointer"
          aria-label="Go Back"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') navigate(-1);
          }}
        ></Link>
        {
          ytVideo ?(
        <ReactPlayer
        height={800}
         width={1500}
         url={`https://www.youtube.com/watch?v=${ytVideo.key}` }/>
          ):<NotFound />
          
        }

    </div>
  ) 
}

export default Trailer