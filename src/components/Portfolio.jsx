import React from 'react';
import images from "../../public/WhatsApp Image 2024-01-30 at 10.47.21.jpeg"
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className="bg-gray-900 text-white overflow-y-auto h-full w-full">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center md:items-stretch md:h-[400px]">
        <div className="bg-gray-900 md:w-1/2 flex flex-col justify-center px-6 md:px-20 py-16 md:py-0">
          <p className="text-gray-400 text-sm mb-2">Hello</p>
          <h1 className="text-yellow-400 font-extrabold text-3xl md:text-5xl leading-tight mb-2">I’m Michael</h1>
          <p className="text-white text-base md:text-lg font-normal mb-6 max-w-xs md:max-w-sm">
            Freelance web Designer <br />& Developer
          </p>
          <button className="border border-yellow-400 text-yellow-400 text-xs md:text-sm font-semibold px-5 py-1.5 md:py-2 rounded-md w-max hover:bg-yellow-400 hover:text-gray-900 transition">
            HIRE ME
          </button>
        </div>
        <div className="h-[420px]  w-[700px] mt-10 rounded-md    flex justify-center">
        <div  className= " bg-gray-900  relative w-1/2">
              <img
            src={images}
            alt="Smiling man in white t-shirt with arms crossed standing in front of yellow background"
            className="object-cover  absolute top-[6%] left-[65%] h-[90%] w-[100%]"
          />
        </div>
          <div className= "w-1/2 h-full  border-8 border-yellow-400  "></div>
        </div>
        
      </section>

      {/* About Me Section */}
      <section className="px-6 md:px-20 py-16 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
        <div className="relative">
          <img
            src={images}
            alt="Portrait of smiling man in white t-shirt with arms crossed"
            className="relative z-20 w-72 md:w-80"
          />
          <div className="border-4 border-yellow-400 absolute  top-6 left-6 w-72 md:w-80 h-[400px] md:h-[450px] -z-10"></div>
        </div>
        <div className="max-w-xl text-left">
          <h2 className="text-white font-extrabold text-2xl md:text-3xl mb-2 border-b-4 border-yellow-400 inline-block pb-1">About Me</h2>
          <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu pariatur excepturi sint occaecat.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-yellow-400 text-gray-900 font-semibold text-xs md:text-sm px-5 py-2 rounded-md hover:bg-yellow-300 transition">HIRE ME</button>
            <button className="border border-yellow-400 text-yellow-400 font-semibold text-xs md:text-sm px-5 py-2 rounded-md hover:bg-yellow-400 hover:text-gray-900 transition">DOWNLOAD CV</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 md:px-20 pb-20 max-w-7xl mx-auto">
        <h3 className="text-white font-extrabold text-xl md:text-2xl mb-2 border-b-4 border-yellow-400 inline-block pb-1">Services</h3>
        <p className="text-gray-400 text-xs md:text-sm mb-8 max-w-3xl leading-relaxed">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative rounded-md p-6 text-white" style={{ background: 'linear-gradient(135deg, #3ac7f3 0%, #0a9edb 100%)' }}>
            <img
              src="https://placehold.co/400x250/png?text=UX+Research+background+image+with+desk+and+laptop"
              alt="Desk with laptop and coffee cup, blue overlay background for UX Research"
              className="absolute inset-0 w-full h-full object-cover rounded-md opacity-30"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="mb-3">
                <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8a9 9 0 100-18 9 9 0 000 18z"></path>
                </svg>
                <span className="text-lg font-semibold">UX Research</span>
              </div>
              <p className="text-xs md:text-sm leading-snug">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
            </div>
          </div>
          <div className="relative rounded-md p-6 text-white" style={{ background: 'linear-gradient(135deg, #f5b62f 0%, #f2a900 100%)' }}>
            <img
              src="https://placehold.co/400x250/png?text=Web+Development+background+image+with+desk+and+laptop"
              alt="Desk with laptop and coffee cup, yellow overlay background for Web Development"
              className="absolute inset-0 w-full h-full object-cover rounded-md opacity-30"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="mb-3">
                <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6"></path>
                </svg>
                <span className="text-lg font-semibold">Web Development</span>
              </div>
              <p className="text-xs md:text-sm leading-snug">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
            </div>
          </div>
          <div className="relative rounded-md p-6 text-white" style={{ background: 'linear-gradient(135deg, #e94ed9 0%, #d13ad1 100%)' }}>
            <img
              src="https://placehold.co/400x250/png?text=App+Design+background+image+with+desk+and+laptop"
              alt="Desk with laptop and coffee cup, pink overlay background for App Design"
              className="absolute inset-0 w-full h-full object-cover rounded-md opacity-30"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="mb-3">
                <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8a9 9 0 100-18 9 9 0 000 18z"></path>
                </svg>
                <span className="text-lg font-semibold">App Design</span>
              </div>
              <p className="text-xs md:text-sm leading-snug">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
            </div>
          </div>
          <div className="relative rounded-md p-6 text-white" style={{ background: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)' }}>
            <img
              src="https://placehold.co/400x250/png?text=Web+Design+background+image+with+desk+and+laptop"
              alt="Desk with laptop and coffee cup, green overlay background for Web Design"
              className="absolute inset-0 w-full h-full object-cover rounded-md opacity-30"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="mb-3">
                <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18"></path>
                </svg>
                <span className="text-lg font-semibold">Web Design</span>
              </div>
              <p className="text-xs md:text-sm leading-snug">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
            </div>
          </div>
        </div>
      </section>
      <Link to="/">
         <button className="border border-purple-400 text-purple-400 text-xs md:text-sm font-semibold px-10 py-10 left-[45%] absolute bottom-2   md:py-2 rounded-md w-max hover:bg-purple-400 hover:text-gray-900 transition">
            Back to website
          </button>
      </Link>
      
    </div>
  );
};

export default Portfolio;
