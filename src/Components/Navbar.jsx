import React from 'react'
import { useState } from 'react'
const Navbar = () => {
  const [isopen, setIsopen] = useState(false)
  return (
    <nav className='bg-blue-200 border-b border-blue-700'>
    <div className="hidden largemenu md:block">
      <div className="flex justify-between items-center h-24">
        {/* leftnav */}
        <div className='grid grid-cols-3 md:gap-x-3 lg:gap-x-4  ml-4'>
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
        {/* middlenav */}
        <div>
          <img className='h-20 w-20' src="./images/new-sudo.png" alt="" srcset="" />
        </div>
        {/* rightnav */}
        <div className='flex gap-x-5 mr-4'>
          <a href=""><i class="fa-brands fa-twitter"></i></a>
          <a href=""><i class="fa-brands fa-facebook"></i></a>
          <a href=""><i class="fa-brands fa-instagram"></i></a>
          <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>

    <div className="mobilemenu block md:hidden">
      <div className="flex items-center justify-between h-24">
        {/* mobile left */}
        <div className="image ml-4">
          <img className='h-20 w-20' src="./images/new-sudo.png" alt="" srcset="" />
        </div>
        {/* mobile right */}
        <div className='mr-4'>
          <button onClick={()=>setIsopen(!isopen)} > {isopen?<i className="fas fa-times"></i>:<i className="fas fa-bars"></i>} </button>
        </div>
      </div>
      <div className={` ${isopen?'block':'hidden'} `}>
        <div className='flex flex-col text-xl ml-4'>
        <a href="#" className='p-3'>Home</a>
        <a href="#" className='p-3'>Blog</a>
        <a href="#" className='p-3'>Contact</a>
        </div>
        <div className='flex ml-4 gap-x-4'>
        <a href="" className='p-3'><i class="fa-brands fa-twitter"></i></a>
          <a href="" className='p-3'><i class="fa-brands fa-facebook"></i></a>
          <a href="" className='p-3'><i class="fa-brands fa-instagram"></i></a>
          <a href="" className='p-3'><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar