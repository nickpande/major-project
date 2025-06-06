import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from './template/TopNav';
import DropDown from './template/DropDown';
import axios from '../utils/axios';
import Cards from './template/Cards';
import Loading from '../components/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

function Trending() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false); // To avoid concurrent fetches
  document.title = "NPDB | Trending " + category.toLocaleUpperCase()  ;  // Fetch Trending Data for the current page and filters
  const fetchTrending = async () => {
    if (loading) return; // Prevent overlapping requests
    setLoading(true);
    try {
      console.log("Fetching page:", page);
      const res = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      const results = res.data?.results || [];

      if (page === 1) {
        // Initial page: replace data
        setTrending(results);
      } else {
        // Append new page results
        setTrending(prev => [...prev, ...results]);
      }

      if (results.length === 0 || results.length < 20) {
        // Assuming API page size ~20, if less returned then no more data
        setHasMore(false);
      } else {
        setHasMore(true);
        setPage(prevPage => prevPage + 1); // Prepare for next page load
      }
    } catch (error) {
      console.error("Error fetching trending:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  // When filters change, reset everything and load first page immediately
  useEffect(() => {
    setTrending([]);
    setPage(1);
    setHasMore(true);
  }, [category, duration]);

  // When page or filters reset to 1, fetch data immediately
  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, category, duration]); 

  // Dropdown change handlers simplified: just update filter states
  // Page and hasMore will be reset by useEffect on category/duration change

  return trending.length > 0 ? (
    <div className="px-[3%] w-full overflow-hidden overflow-y-auto">
      <div className="w-full px-[5%] flex items-center justify-between h-[10vh] space-x-4 overflow-x-auto">
        <div className="flex items-center text-2xl text-zinc-400 font-semibold space-x-2 whitespace-nowrap">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer"
            aria-label="Go Back"
            role="button"
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter') navigate(-1); }}
          ></i>
          <span>Trending</span>
        </div>

        <div className="flex-1 min-w-[200px] mx-4">
          <TopNav />
        </div>

        <div className="flex items-center space-x-4 whitespace-nowrap">
          <DropDown title="Category" options={["movie", "tv", "all"]} func={(e) => setCategory(e.target.value)} />
          <DropDown title="Timeframe" options={["week", "day"]} func={(e) => setDuration(e.target.value)} />
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={fetchTrending}
        hasMore={hasMore}
        loader={<h4 className="text-center text-[#6556CD] font-semibold mt-4">Loading...</h4>}
        endMessage={<p style={{ textAlign: 'center', margin: '16px 0' }}>No more results</p>}
        scrollableTarget={null}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Trending;

