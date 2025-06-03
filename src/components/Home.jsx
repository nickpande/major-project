import React, { useEffect, useState } from 'react'
import SideNav from './template/SideNav'
import TopNav from './template/TopNav'
import axios from '../utils/axios';
import Headers from './template/Headers';
import HorizontalCards from './template/HorizontalCards';
import DropDown from '../components/template/DropDown'
import Loader from '../components/Loading'


function Home() {
  document.title  = "NPDB | HOMEPAGE";
   const [wallpaper, setWallpaper] = useState(null);
   const[Trending , setTrending] = useState(null);
   const[category , setCategory] = useState("all");



 const getHeaderWallpaper = async () => {
  try {
    const res = await axios.get(`/trending/all/day`);
    const results = res.data?.results || [];
    const random = results[Math.floor(Math.random() * results.length)];
    setWallpaper(random || {});
    console.log("Header wallpaper:", random);
  } catch (error) {
    console.log(error);
  }
};

const getTrending = async () => {
  try {
    const res = await axios.get(`/trending/${category}/day`);
    const results = res.data?.results || [];
    setTrending(results);
    console.log("Trending:", results);
  } catch (error) {
    console.log(error);
  }
};



 useEffect(() => {
  getTrending();
  if (!wallpaper) getHeaderWallpaper();
}, [category]);



  return wallpaper && Trending ? (
    <>
    <SideNav />
    <div className='w-[80%] h-full overflow-auto overflow-x-hidden '>
    <TopNav />
    <Headers  data={wallpaper}/>
      <div className=' flex justify-between p-5'>
        <h1 className=' text-zinc-400 text-3xl font-semibold '>Trending </h1>
        <DropDown title="filter" options={["tv", "movie", "all"]} func={(e)=>setCategory(e.target.value)} />
        </div>
    <HorizontalCards data = {Trending} />
    </div>
    </>
  ) : (
    <Loader />
  )
}

export default Home