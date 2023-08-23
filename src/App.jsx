import React from 'react'

const App = () => {
  return (
    <div className='bg-gray-100 h-screen w-full'>
      <nav className='bg-blue-200'>
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

<div className="mobilemenu">
  <div className="flex items-start justify-center h-24">
    
  </div>
</div>
      </nav>
    </div>
  )
}

export default App