import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from './template/TopNav';
import DropDown from './template/DropDown';
import axios from '../utils/axios';
import Cards from './template/Cards';
import Loading from '../components/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';


const TvShows = () => {


    const navigate = useNavigate();
    const [category, setCategory] = useState("airing_today");
    const [tv, settv] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    document.title = "NPDB | tv_shows";
    const fetchtv = async () => {
    try {
        const res = await axios.get(`/tv/${category}?page=${page}`);
        const results = res.data?.results || [];

    if (results.length > 0) {
        settv (prev => [...prev, ...results]);
        setPage(prevPage => prevPage + 1); // Increment page only if results are found
    } else {
        setHasMore(false); // No more results to fetch
    }
    } catch (error) {
        console.error("Error fetching tv:", error);
        setHasMore(false);
    }
    };
    useEffect(() => {
        settv ([]);
        setPage(1);
        setHasMore(true);
    }, [category]);
    
      // Fetch new data when page changes
    useEffect(() => {
        fetchtv();
    }, [page]);
    




  return tv.length > 0 ? (
    <div className="px-[3%] w-full overflow-hidden overflow-y-auto">
    <div className="w-full  px-[5%] flex items-center justify-between  space-x-4">
        <div className="flex items-center text-2xl text-zinc-400 font-semibold space-x-2 whitespace-nowrap">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] mr-3 ri-arrow-left-line cursor-pointer"
            aria-label="Go Back"
            role="button"
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter') navigate(-1); }}
          ></i>
          <span className='mr-2'>TvShows</span>
        </div>
          <TopNav />

        <div className="flex items-center space-x-4 whitespace-nowrap">
          <DropDown title="Category" options={["airing_today", "top_rated", "on_the_air", "popular" ]} func={(e) => setCategory(e.target.value)} />
        </div>
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        next={fetchtv}
        hasMore={hasMore}
        loader={<h4 className="text-center text-[#6556CD] font-semibold mt-4">Loading...</h4>}
        endMessage={<p style={{ textAlign: 'center', margin: '16px 0' }}>No more results</p>}
        scrollableTarget={null}
      >
        <Cards data={tv} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}
export default TvShows
