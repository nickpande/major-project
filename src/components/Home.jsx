import React from 'react'
import SideNav from './template/SideNav'
import TopNav from './template/TopNav'

function Home() {
  return (
    <>
    <SideNav />
    <div className='w-[80%] h-full '>
    <TopNav />
    </div>
    </>
  )
}

export default Home