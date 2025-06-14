import React, { useEffect } from 'react';
import Loading from '../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { asyncloadtv } from '../store/actions/tvActions';
import HorizontalCards from '../components/template/HorizontalCards'

const TvDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const { info } = useSelector((state) => state.tv);
    console.log(info);
    const {pathname} = useLocation()
  
    useEffect(() => {
      dispatch(asyncloadtv(id));
    }, [dispatch, id]);
  
return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.6), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || info.profile_path})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="w-screen relative h-[180vh] px-[10%]"
    >
      {/* Navigation Bar */}
      <nav className="w-full h-[10vh] items-center text-zinc-100 flex gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer"
          aria-label="Go Back"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') navigate(-1);
          }}
        ></Link>

        <a target="_blank" rel="noopener noreferrer" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          imdb
        </a>
      </nav>

      {/* Poster Section */}
      <div className="w-full flex">
        <img
          
          className="w-[38vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path || info.detail.profile_path
          }`} 
          alt="Poster"
        />

        <div className='content ml-10  text-white'>
          <h1 className='text-5xl font-black text-white'>
            {info.detail.name || info.detail. original_title || info.detail.title || info.detail.original_name } 
            <small className='text-2 xl font-bold text-zinc-300'> ({info.detail.first_air_date.split("-")[0]})</small>
          </h1>

          <div className='flex mt-3 mb-5 text-white items-center gap-x-5'>
           <span>
            {info.detail.vote_average && (  <div className='  text-white text-xl font-semibold  w-[5vh] h-[5vh] flex justify-center items-center bg-yellow-600 rounded-full'>
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
             </div>)} 
           </span>
           <h1 className='font-semibold text-2xl w-[60px] leading-6'>
            User Score
           </h1>
           <h1>
              Release date
           </h1>
           <h1>
             {info.detail.genres.map(g => g.name).join(",")}
           </h1>
           <h1>
            {info.detail.runtime}min
           </h1>
          </div>

          <h1 className='text-xl font-semibold italic text-zinc-200 '>
            {info.detail.tagline}
          </h1>

          <h1 className='text-2xl mt-5  '>overview   </h1>
          <p>{info.detail.overview}</p>
          
          <h1 className='text-2xl mt-5  '>tv translated   </h1>
          <p className='mb-10'> {info.translations.join(", ")}</p>
          
          <Link className=' py-5 px-5 bg-[#6556cd] rounded-lg' to={`${pathname}/trailer`}> 
          <i class="text-xl mr-3  ri-play-fill"></i>
          Play Trailer
          </Link>
            
       
        </div>
      </div>




      {/* Watch Providers */}
      <div className="w-[80%] flex flex-col gap-y-6 mt-5">
        {/* Flatrate Providers */}
        {info.watchproviders?.results?.IN?.flatrate && (
          <div className="flex items-center text-white gap-x-5">
            <h1>Watch Provider</h1>
            {info.watchproviders.results.IN.flatrate.map((w) => (
              <img
              title={w.provider_name}
                key={w.provider_id}
                className="w-[4vh] h-[4vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt={w.provider_name}
              />
            ))}
          </div>
        )}

        {/* Rent Providers */}
        {info.watchproviders?.results?.IN?.rent && (
          <div className="flex items-center text-white gap-x-5">
            <h1>Available for Rent</h1>
            {info.watchproviders.results.IN.rent.map((w) => (
              <img
               title={w.provider_name}
                key={w.provider_id}
                className="w-[4vh] h-[4vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt={w.provider_name}
              />
            ))}
          </div>
        )}

        {/* Buy Providers */}
        {info.watchproviders?.results?.IN?.buy && (
          <div className="flex items-center text-white gap-x-5">
            <h1>Buy From</h1>
            {info.watchproviders.results.IN.buy.map((w) => (
              <img
               title={w.provider_name}
                key={w.provider_id}
                className="w-[4vh] h-[4vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt={w.provider_name}
              />
            ))}
          </div>
        )}
      </div>


      {/* seasons */}

     <hr className=' mt-5  mb-5 border-none h-[2px] bg-zinc-500' />
    <h1 className='text-3xl font-bold text-white'>Seasons</h1>     
    <div className='w-full flex h-[39vh] overflow-y-hidden z-20 p-5 gap-14'>
      {info.detail.seasons.length > 0 ?
      info.detail.seasons.map((data , i)=>(
           <div className='w-[15vh] mr-[2%]'>
            <img key={i} className='min-w-[22vh] h-[30vh] object-cover ' src={`https://image.tmdb.org/t/p/original/${ data.poster_path  }`} alt="" />
            <h1 className='text-xl text-zinc-300 mt-3 font-semibold'>
                {data.name || data.original_title || data.title || data.original_name } 
            </h1>
            </div>
      ))
          : <h1 className='text-3xl text-white font-black text-center mt-5'>Nothing to show</h1>

    }
       
    </div>







    
     {/* part4 recommendatio */}
      <hr className=' mt-5  mb-5 border-none h-[2px] bg-zinc-500' />
    <h1 className='text-3xl font-bold text-white'>Recommendations and similar stuff</h1>     
    <HorizontalCards
    data={
    Array.isArray(info.recommendations?.results) && info.recommendations.results.length > 0
      ? info.recommendations.results
      : Array.isArray(info.similar?.results) && info.similar.results.length > 0
      ? info.similar.results
      : []
     }
/>

     
     <Outlet />


    </div>
  ) : (
    <Loading />
  );
};

export default TvDetails
