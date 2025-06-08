import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from './template/TopNav';
import DropDown from './template/DropDown';
import axios from '../utils/axios';
import Cards from './template/Cards';
import Loading from '../components/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const People = () => {
      const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [Person, setPerson] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false); // To avoid concurrent fetches
  document.title = "NPDB | Person " + category.toLocaleUpperCase()  ;  // Fetch Person Data for the current page and filters
  const fetchPerson = async () => {
    if (loading) return; // Prevent overlapping requests
    setLoading(true);
    try {
      const res = await axios.get(`/person/${category}?page=${page}`);
      const results = res.data?.results || [];

      if (page === 1) {
        // Initial page: replace data
        setPerson(results);
      } else {
        // Append new page results
        setPerson(prev => [...prev, ...results]);
      }

      if (results.length === 0 || results.length < 20) {
        // Assuming API page size ~20, if less returned then no more data
        setHasMore(false);
      } else {
        setHasMore(true);
        setPage(prevPage => prevPage + 1); // Prepare for next page load
      }
    } catch (error) {
      console.error("Error fetching Person:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  // When filters change, reset everything and load first page immediately
  useEffect(() => {
    setPerson([]);
    setPage(1);
    setHasMore(true);
  }, [category]);

  // When page or filters reset to 1, fetch data immediately
  useEffect(() => {
    fetchPerson();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, category]); 

  // Dropdown change handlers simplified: just update filter states
  // Pag
  return Person.length > 0 ? (
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
          <span className='mr-2'>Trending</span>
        </div>
          <TopNav />

       
      </div>

      <InfiniteScroll
        dataLength={Person.length}
        next={fetchPerson}
        hasMore={hasMore}
        loader={<h4 className="text-center text-[#6556CD] font-semibold mt-4">Loading...</h4>}
        endMessage={<p style={{ textAlign: 'center', margin: '16px 0' }}>No more results</p>}
        scrollableTarget={null}
      >
        <Cards data={Person} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default People
