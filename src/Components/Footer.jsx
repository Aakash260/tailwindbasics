import React from 'react'
import {Link} from 'react-scroll'
 
const Footer = () => {
    return (
       
            <footer id="footer" className='p-20 text-center bg-gray-900 text-white'>
                <i className='fas fa-star mb-4'></i>
                <h1 className='my-3 text-2xl md:text-4xl'>akashnirwan26@gamil.com</h1>
                <div className='my-10 text-sm '>
 
                    <a href="https://www.facebook.com/aakash.nirwan.52" className='p-3 hover:text-gray-300' target='_blank'><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/akash_nirwan26/" className='p-3 hover:text-gray-300' target='_blank'><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/aakash-nirwan-208865167/" className='p-3 hover:text-gray-300' target='_blank'><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
                 
            </footer>
            
   
         
    )
}

export default Footer