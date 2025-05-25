import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function TopNav() {
    const[query,setQuery] = useState('')
  return (
    <div className='w-full h-[10vh]  relative flex justify-start ml-[15%] items-center '>
        <i className=" text-zinc-200 text-3xl ri-search-fill"></i>
        <input
            onChange={(e)=> setQuery(e.target.value)}
            value={query}
        className='w-[50%] text-white mx-10 p-5 text-xl outline-none border-none bg-transparent' type="text" placeholder='search anything' />
        {
            query.length > 0 &&  (<i onClick={()=> setQuery("")} className= " text-zinc-200 text-3xl ri-close-line"></i>

        )}
        <div className='w-[50%] max-h-[50vh] overflow-auto absolute top-[90%] bg-zinc-200'>
           
        </div>
    </div>
  )
}

export default TopNav