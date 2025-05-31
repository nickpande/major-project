import React from 'react'
import DropDown from './DropDown'

function HorizontalCards({data}) {
  return (
    <div className='w-full h-[45vh] p-5 '>
        <div className='mb-5 flex justify-between'>
        <h1 className=' text-zinc-400 text-3xl font-semibold '>Trending </h1>
        <DropDown title="filter"  />
        </div>
        <div className='w-[100%] flex h-full overflow-y-hidden'>
            {
                data.map((item, index) =>(
                    <div key={index} className='min-w-[15%]  mr-5 bg-zinc-900 mb-5 overflow-y-hidden '>
                        <img className='w-full h-[45%]  object-cover ' src={`https://image.tmdb.org/t/p/original/${item.poster_path || item.profile_path})`} alt="" />


                        <div className='text-white p-3 h-[55]%'>
                            <h1 className=' text-l font-semibold mt-3 ' > {item.name || item. original_title || item.title || item.original_name } </h1>
                        <p className=''>{item.overview.slice(0,35)}...<span className='text-zinc-300 text-xs '>more</span></p>
                        </div>
                        

                        
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default HorizontalCards