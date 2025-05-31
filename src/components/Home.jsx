import React, { useEffect, useState } from 'react'
import SideNav from './template/SideNav'
import TopNav from './template/TopNav'
import axios from '../utils/axios';
import Headers from './template/Headers';
import HorizontalCards from './template/HorizontalCards';


function Home() {
  document.title  = "NPDB | HOMEPAGE";
   const [wallpaper, setWallpaper] = useState(null);
   const[Trending , setTrending] = useState(null);



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
    const res = await axios.get(`/trending/all/day`);
    const results = res.data?.results || [];
    setTrending(results);
    console.log("Trending:", results);
  } catch (error) {
    console.log(error);
  }
};



 useEffect(() => {
  if (!wallpaper) getHeaderWallpaper();
  if (!Trending) getTrending();
}, []);



  return wallpaper && Trending ? (
    <>
    <SideNav />
    <div className='w-[80%] h-full overflow-auto overflow-x-hidden '>
    <TopNav />
    <Headers  data={wallpaper}/>
    <HorizontalCards data = {Trending} />
    </div>
    </>
  ) : (
    <h1>loading</h1>
  )
}

export default Home