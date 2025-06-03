import React from 'react'

function HorizontalCards({data }) {
  return (
        <div className='w-[100%] flex h-[45vh] overflow-y-hidden  p-5 '>
            {
                data.map((item, index) =>(
                    <div key={index} className='min-w-[15%]  mr-5 mb-5 bg-zinc-900  overflow-y-hidden '>
                        <img className='w-full h-[45%]  object-cover ' src={`https://image.tmdb.org/t/p/original/${item.poster_path || item.profile_path})`} alt="" />


                        <div className='text-white mt-1 p-3 h-[55]%'>
                            <h1 className=' text-x l font-semibold mt-2 mb-2 ' > {item.name || item. original_title || item.title || item.original_name } </h1>
                        <p className=''>{item.overview.slice(0,30)}...<span className='text-zinc-300 text-xs '>more</span></p>
                        </div>
                        

                        
                    </div>
                ))
            }

        </div>
  )
}

export default HorizontalCards