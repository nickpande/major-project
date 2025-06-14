import React from 'react'
import { Link } from 'react-router-dom'
import noImage from '../../../public/download.jpg'


function Cards({data , title}) {
  
  return (
    <div className='grid grid-cols-5 gap-x-6 gap-y-8 mt-10 w-full  p-4'>
      {
        data.map((c,i)=>(
            <Link to={`/${data.media_type || title}/details/${c.id}`} className=' relative shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-[30vh] mr-[5%] mb-[5%] ' key={i}>
            <img className='w-[40vh] object-cover ' src={
               c.poster_path || c.backdrop_path ||c.profile_path ?
              `https://image.tmdb.org/t/p/original/${ c.poster_path || c.backdrop_path ||c.profile_path }`
            : noImage
            } alt="" />
            <h1 className='text-xl text-zinc-300 mt-3 font-semibold'>
                {c.name || c. original_title || c.title || c.original_name } 
            </h1>
            {
              c.vote_average && (  <div className=' absolute right-[-10%] bottom-[25%] text-white text-xl font-semibold  w-[5vh] h-[5vh] flex justify-center items-center bg-yellow-600 rounded-full'>
              {(c.vote_average * 10).toFixed()} <sup>%</sup>
            </div>)
            }
          
          </Link>
        ))
      }
    </div>
  )
}

export default Cards