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

  const getTrending = async () => {
    try {
      const res = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      const results = res.data?.results || [];

      // If less than expected, assume no more pages
      if (results.length === 0) {
        setHasMore(false);
      }

      setTrending(prev => [...prev, ...results]);
    } catch (error) {
      console.log(error);
    }
  };

  // Trigger on scroll (page changes)


  useEffect(() => {
    getTrending();
  }, [page]);

  // Reset when filters change
useEffect(() => {
  setTrending([]);
  setPage(1);
  setHasMore(true);
}, [category, duration]);

  return trending.length > 0 ? (
    <div className="px-[3%] w-full overflow-hidden overflow-y-auto">
      <div className="w-full px[5%] flex items-center justify-between h-[10vh] space-x-4 overflow-x-auto">
        <div className="flex items-center text-2xl text-zinc-400 font-semibold space-x-2 whitespace-nowrap">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer"
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
  next={() => setPage(prev => prev + 1)}
  hasMore={hasMore}
  loader={<h4>Loading...</h4>}
  endMessage={<p style={{ textAlign: 'center' }}>No more results</p>}
>
  <Cards data={trending} title={category} />
</InfiniteScroll>

    </div>
  ) : (
    <Loading />
  );
}

export default Trending;
