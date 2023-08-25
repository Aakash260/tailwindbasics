import React from 'react'

const HeroSection = () => {
  return (
    <section id="home" className=' bg-gradient-to-r from-blue-300 to-blue-100 md:p-5 lg:p-10'>
      {/* leftsection */}
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className=' animate__animated animate__fadeInLeft flex flex-col justify-center align-middle p-2 md:p-5 lg:p-10 text-center md:text-left mb-5'>
          <h1 className='text-sm'>Hello,I am <i class='fas fa-code'></i> </h1>
          <h1 className='md:text-6xl lg:text-6xl mt-1 text-3xl'>Aakash Nirwan</h1>
          <h1 className='lg:text-4xl md:text-3xl mt-5 text-2xl'>Full Stack Developer</h1>
          <p className='text-sm mt-9 md:mt-14'>
            If you thing you can create a new things.
            <br />
            I am passionate about my work and always try to improve the things.
          </p>
          <div className='flex gap-x-5 mr-4 mt-5 justify-center md:justify-start'>
            <a href=""><i class="fa-brands fa-twitter"></i></a>
            <a href=""><i class="fa-brands fa-facebook"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
        {/* rightsection */}
        <div className="animate__animated animate__fadeInRight rightsection flex flex-col justify-center align-middle md:p-5 lg:p-10 p-3">
          <img className='' src="./images/undraw_on_the_office_fbfs.svg" alt="" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection