import React from 'react'
import { Link } from 'react-router-dom'

function Headers({data}) {    
  return  (
    <div style={{
        background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.6), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'

    }} 
    className='w-full h-[50vh] flex flex-col justify-center items-start p-[10%] '>
        <h1 className='w-[70%] text-5xl font-black text-white ' > {data.name || data. original_title || data.title || data.original_name } </h1>
        <p className=' mb-3 text-white w-[70%] mt-3'>{data.overview.slice(0,201)}...<Link className='text-blue-400'>more</Link></p>
        <p className='text-white'>
            <i className=" text-yellow-500 ri-mic-line"></i>{data.release_date  || "no information" }  <i className= "  ml-5 text-yellow-500 ri-album-line"></i> 
            {data.media_type.toUpperCase()}
        </p>
        <Link to={`/${data.media_type}/details/${data.id}/trailer`} className='p-4 rounded text-white  mt-5 bg-[#6565CD]'>
        watch trailer</Link>
    </div>
  )
}

export default Headers