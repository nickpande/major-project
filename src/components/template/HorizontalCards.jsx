import React from 'react'
import { Link } from 'react-router-dom'
import noImage from '../../../public/download.jpg'

function HorizontalCards({ data }) {
  if (!Array.isArray(data) || data.length === 0) return null;

  return (
    <div className='w-full flex h-[35vh] overflow-y-hidden z-20 p-5 '>
      {data.length > 0 ? data.map((item, index) => (
        <Link
          to={`/${item.media_type}/details/${item.id}`}
          key={index}
          className='min-w-[15%] h-[40vh] mr-5 mb-5 bg-zinc-900 overflow-y-hidden'
        >
          <img
            className='w-full h-[45%] object-cover'
            src={`https://image.tmdb.org/t/p/original/${item.poster_path || item.profile_path}`}
            alt=""
          />
          <div className='text-white mt-1 p-3 h-[45%] overflow-y-auto' >
            <h1 className='text-xl font-semibold mt-2 mb-2'>
              {item.name || item.original_title || item.title || item.original_name}
            </h1>
            <p>
              {item.overview?.slice(0, 150)}...
              <span className='text-zinc-300 text-xs'>more</span>
            </p>
          </div>
        </Link>
      ))
    : <h1 className='text-3xl text-white font-black text-center mt-5'>Nothing to show</h1>
    }

    </div>
  );
}

export default HorizontalCards;
