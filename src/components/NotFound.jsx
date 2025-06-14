import React from 'react'
import Notfound from '../../public/2RNE.gif'

function NotFound() {
  return (
        <div className=' w-screen bg-[rgba(0,0,0,.9)]  h-screen flex items-center justify-center top-0 left-0'>
            <img className='h-[50%] object-cover' src={Notfound} alt="" />
        </div>
  )
}  

export default NotFound