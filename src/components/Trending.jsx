import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import TopNav from './template/TopNav'
import DropDown from './template/DropDown'
import { useState } from 'react'
import axios from '../utils/axios';

function Trending() {
    const navigate = useNavigate()
    const[category, setCategory] = useState("all")
    const[duration, setduration] = useState("day")
    const[trending , setTrending] = useState(null)

    const getTrending = async () => {
  try {
    const res = await axios.get(`/trending/${category}/${duration}`);
    const results = res.data?.results || [];
    setTrending(results);
    console.log("Trending:", results);
  } catch (error) {
    console.log(error);
  }
};

useEffect(()=>{
    getTrending()
} , [duration , category])

  return (
<div className="px-[3%] w-full overflow-hidden">
     <div className="w-full flex items-center justify-between h-[10vh] space-x-4 overflow-x-auto">
    {/* Left - Title and Back Arrow */}
    <div className="flex items-center text-2xl text-zinc-400 font-semibold space-x-2 whitespace-nowrap">
      <i
        onClick={() => navigate(-1)}
        className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer"
      ></i>
      <span>Trending</span>
    </div>

    {/* Center - TopNav */}
    <div className="flex-1 min-w-[200px] mx-4">
      <TopNav />
    </div>

    {/* Right - Dropdowns */}
    <div className="flex items-center space-x-4 whitespace-nowrap">
      <DropDown title="Category" options={["movie", "tv", "all"]} func="" />
      <DropDown title="Timeframe" options={["week", "day"]} func="" />
    </div>
    </div>



</div>

  )
}

export default Trending