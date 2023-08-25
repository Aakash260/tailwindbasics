import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import BlogSection from './Components/BlogSection'
import ServiceSection from './Components/ServiceSection'
import Portfolio from './Components/Portfolio'
import Footer from './Components/Footer'
import {Link} from 'react-scroll'
import Contact from './Components/Contact'
const App = () => {

  return (
    <div className='bg-gray-100 h-screen w-full'>
      <Navbar />
      <HeroSection />
      <BlogSection/>
      <ServiceSection/>
      <Portfolio/>
                <Contact/>
      <Footer/>
      <div className='fixed right-0 bottom-0'>
                <Link to="home" className='cursor-pointer ' smooth duration={500}><i class="fas fa-arrow-alt-circle-up text-4xl"></i></Link>
                </div>
    </div>
  )
}

export default App