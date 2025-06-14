import React, { useEffect ,useState } from 'react';
import Loading from '../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { asyncloadperson , removeperson } from '../store/actions/personAction';
import HorizontalCards from '../components/template/HorizontalCards'
import Dropdown from './template/DropDown'


const PeopleDetails = () => {
      const navigate = useNavigate();
      const { id } = useParams();
      const dispatch = useDispatch();
      const { info } = useSelector((state) => state.person);
      console.log(info);
      const {pathname} = useLocation()
      const [category, setcategory] = useState("movie")
    
      useEffect(() => {
        dispatch(asyncloadperson(id));
        return () =>{
          dispatch(removeperson)
        }
      }, [dispatch, id]);
  return  info ? (
    <div className='px-[10%] w-screen bg-[#1F1E24] h-[150vh]'>
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
              </nav>



              <div className='w-full flex'>
                {/* part2 left poster */}
                <div className='w-[20%]'> 
              <img
                className="w-[40vh] object-cover"
                src={`https://image.tmdb.org/t/p/original/${
                  info.detail.profile_path
              }`} 
              alt="Poster"
            />  
              <hr className=' mt-5  mb-5 border-none h-[2px] bg-zinc-500' />
              <div className='text-2xl text-white flex gap-x-10'>
              
        
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
                  href={`https://www.instagram.com/${info.externalid.instagram_id}`}
                >
                 <i class="ri-instagram-fill"></i>
                </a> 


                  <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.facebook.com/${info.externalid.facebook_id}`}
                >
                  <i class="ri-facebook-circle-fill"></i>
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.twitter.com/${info.externalid.twitter_id}`}
                >
                <i class="ri-twitter-x-line"></i>                </a> 
              </div>     
              <div>
                      <h1 className='text-2xl text-zinc-400 font-semibold  my-5'>
                    personal info
                  </h1>
                      <h1 className='text-lg text-zinc-400 font-semibold  my-5'>
                    Known for 
                  </h1>
                      <h1 className=' text-zinc-400 font-semibold '>
                      {info.detail.known_for_department}
                  </h1>
                      <h1 className='text-lg text-zinc-400 font-semibold  mt-3'>
                    Gender 
                  </h1>
                      <h1 className=' text-zinc-400 font-semibold '>
                      {info.detail.gender ==2 ? "Male" : 
                      "Female" }
                  </h1>
                      <h1 className='text-lg text-zinc-400 font-semibold  my-5'>
                    Birthday
                  </h1>
                      <h1 className=' text-zinc-400 font-semibold '>
                      {info.detail.birthday}
                  </h1>
                      <h1 className='text-lg text-zinc-400 font-semibold  my-5'>
                    Death Day 
                  </h1>
                      <h1 className=' text-zinc-400 font-semibold '>
                      {info.detail.deathday ?info.detail.deathday : "Fucking Alive" }
                  </h1>
                       <h1 className='text-lg text-zinc-400 font-semibold  my-5'>
                    Place of Birt 
                  </h1>
                      <h1 className=' text-zinc-400 font-semibold '>
                      {info.detail.place_of_birth }
                  </h1>
                       <h1 className='text-lg text-zinc-400 font-semibold  my-5'>
                        Also Known as 
                   </h1>
                      <h1 className=' text-zinc-400 font-semibold '>
                      {info.detail.also__know_as }
                  </h1>
              </div>
                </div>


                {/* detaile and info */}
                <div className='w-[80%] ml-[5%]'>
                   <h1 className='text-6xl text-zinc-400 font-black  my-5'>
                    {info.detail.name}
                  </h1>
                      <h1 className='text-xl text-zinc-400 font-semibold  my-5'>
                     Overview
                  </h1>
                  <p className='text-zinc-400 mt-5'> 
                    {info.detail.biography}
                  </p>
                       <h1 className=' text-lg mt-5 text-zinc-400 font-semibold '>
                        Summary
                  </h1>
                  <HorizontalCards data={info.combinedCredits.cast} />
                  <div className='w-full flex justify-between '>
                   <h1 className=' text-xl mt-5 text-zinc-400 font-semibold '>
                        Acting
                  </h1>
                  <Dropdown title="Category" options={["tv","movie"]} func={(e)=> setcategory(e.target.value)} />

                      
                  </div>
                  <div className='w-full text-zinc-400 h-[50vh] overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255 ,.3)] border-2 p-5 border-zinc-700 mt-5 '>
                   {
                    info[category + "Credits"].cast.map((i,c)=>(
                    <li className='hover:text-white duration-300 cursor-pointer'>
                      <Link to={`/${category}/details/${i.id}`}>
                      <span>
                        {" "}
                        {i.name || i. original_title || i.title || i.original_name } 
                      </span>
                      <span className='block mb-4 ml-5'> character name :{
                        i.character
                        }</span>
                      </Link>
                    </li>
                    ))
                   }
                  
                  </div>
                </div>
              </div>


        
           
        
    </div>
  )  : <Loading />
}

export default PeopleDetails
