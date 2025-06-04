import React from 'react'
import { Link } from 'react-router-dom'

function Cards({data , title}) {
  return (
    <div className='grid grid-cols-5 gap-x-6 gap-y-8 mt-10 w-full  p-4'>
      {
        data.map((c,i)=>(
          <Link className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-[30vh] mr-[5%] mb-[5%] ' key={i}>
            <img className='w-[40vh] object-cover ' src={`https://image.tmdb.org/t/p/original/${ c.poster_path || c.backdrop_path }`} alt="" />
            <h1 className='text-xl text-zinc-300 mt-3 font-semibold'>
                {c.name || c. original_title || c.title || c.original_name } 
            </h1>
          </Link>
        ))
      }
    </div>
  )
}

export default Cards