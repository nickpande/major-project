import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from '../../utils/axios';
import download from '../../../public/download.jpg'

function TopNav() {
    const[query,setQuery] = useState('')
        const [searches , setSearches] = useState([])
        const GetSearches =  async()=>{
        try {
          const res  = await axios.get(`/search/multi?query=${query}`);
          setSearches(res.data?.results || []);

        } catch (error) {
            console.log(error);
            
            
        }
    }
    useEffect(()=>{
        GetSearches()
    },[query])
  return (
    <div className='w-full h-[10vh]  relative flex justify-start ml-[15%] items-center '>
        <i className=" text-zinc-200 text-2xl ri-search-line"></i>
        <input
            onChange={(e)=> setQuery(e.target.value)}
            value={query}
        className='w-[50%] text-white mx-10 p-5 text-xl outline-none border-none bg-transparent' type="text" placeholder='search anything' />
        {
            query.length > 0 &&  (<i onClick={()=> setQuery("")} className= " text-zinc-200 text-3xl ri-close-line"></i>

        )}
        <div className='w-[50%] max-h-[50vh] overflow-auto absolute top-[90%] bg-zinc-200'>
        {searches.map((s,i)=>(
          <Link key={i} className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 justify-start flex items-center b-2 border-zinc-100">
          <img className='w-[10vh] h-[10vh] object-cover rounded-md mr-5 shadow-lg' src={ s.backdrop_path || s.profile_path ? `  https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : download} alt="" />
          <span> {s.name || s. original_title || s.title || s.original_name } </span>
          </Link>
        ))
        }
     </div>
    </div>
  )
}

export default TopNav