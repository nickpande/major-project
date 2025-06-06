import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from './template/TopNav';
import DropDown from './template/DropDown';
import axios from '../utils/axios';
import Cards from './template/Cards';
import Loading from '../components/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import Trending from './Trending';
function Popular() {

    const navigate = useNavigate();
    const [category, setCategory] = useState("movie");
    const [popular, setPopular] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    document.title = "NPDB | Popular";
    const fetchPopular = async () => {
    try {
        const res = await axios.get(`${category}/popular?page=${page}`);
        const results = res.data?.results || [];

    if (results.length > 0) {
        setPopular (prev => [...prev, ...results]);
        setPage(prevPage => prevPage + 1); // Increment page only if results are found
    } else {
        setHasMore(false); // No more results to fetch
    }
    } catch (error) {
        console.error("Error fetching popular:", error);
        setHasMore(false);
    }
    };
    useEffect(() => {
        setPopular ([]);
        setPage(1);
        setHasMore(true);
    }, [category]);
    
      // Fetch new data when page changes
    useEffect(() => {
        fetchPopular();
    }, [page]);
    


  return popular.length > 0 ? (
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
          <span>Popular</span>
        </div>

        <div className="flex-1 min-w-[200px] mx-4">
          <TopNav />
        </div>

        <div className="flex items-center space-x-4 whitespace-nowrap">
          <DropDown title="Category" options={["movie", "tv", ]} func={(e) => setCategory(e.target.value)} />
        </div>
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={fetchPopular}
        hasMore={hasMore}
        loader={<h4 className="text-center text-[#6556CD] font-semibold mt-4">Loading...</h4>}
        endMessage={<p style={{ textAlign: 'center', margin: '16px 0' }}>No more results</p>}
        scrollableTarget={null}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Popular