import React from 'react'
import loader from '../../public/Icosa_Unravel.gif'


function Loading() {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-black'>
        <img className='h-[50%] object-cover' src={loader} alt="" />
    </div>
  )
}

export default Loading