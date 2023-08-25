
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }


function Portfolio() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleNextArrow />,
        initialSlide: 0,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
        <section id="portfolio" className='p-10'>
            <div className="mb-10 ">
                <h1 className='text-5xl'>Samples</h1>

            </div>

            <div>
                {/* <h2> My work</h2> */}
                <Slider {...settings}>
                    <div>
                        <h3>  <li class="">
                            <div className="grid grid-cols-1 md:grid-cols-2 bg-white place-items-center">
                                <div id="webdescr" className='flex flex-col justify-center align-middle p-3'>
                                    <h1 className='text-3xl'>Freelancing Website</h1>
                                    <p className='mt-4 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, numquam.</p>
                                    <ul className='mt-8 text-sm'>
                                        <li> <i class='fas fa-chevron-right'></i> HTML5</li>
                                        <li> <i class='fas fa-chevron-right'></i> CSS</li>
                                        <li> <i class='fas fa-chevron-right'></i> JAVASCRIPT</li>
                                        <li className='mt-5'><button className=" w-full p-2 bg-blue-700 rounded text-white">✈️Visit</button></li>
                                    </ul>
                                </div>
                                <div id="websiteimage" className='p-3'>
                                    <img className='w-3/4 border-2 rounded-xl' src="images/freelancer-portfolio-740-600.jpg" alt="" />
                                </div>
                            </div>
                        </li></h3>
                    </div>
                    <div>
                        <h3><li class=""><div className="grid grid-cols-1 md:grid-cols-2 bg-white place-items-center">
                            <div id="webdescr" className='flex flex-col justify-center align-middle p-3'>
                                <h1 className='text-3xl'>React Website</h1>
                                <p className='mt-4 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, numquam.</p>
                                <ul className='mt-8 text-sm'>
                                    <li> <i class='fas fa-chevron-right'></i> HTML5</li>
                                    <li> <i class='fas fa-chevron-right'></i> CSS</li>
                                    <li> <i class='fas fa-chevron-right'></i> JAVASCRIPT</li>
                                    <li className='mt-5'><button className=" w-full p-2 bg-blue-700 rounded text-white">✈️Visit</button></li>
                                </ul>
                            </div>
                            <div id="websiteimage" className='p-3'>
                                <img className='w-3/4 border-2 rounded-xl' src="images/main-home-740-600.jpg" alt="" />
                            </div>
                        </div></li></h3>
                    </div>
                    <div>
                        <h3><li class=""><div className="grid grid-cols-1 md:grid-cols-2 bg-white place-items-center">
                            <div id="webdescr" className='flex flex-col justify-center align-middle p-3'>
                                <h1 className='text-3xl'>React Website</h1>
                                <p className='mt-4 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, numquam.</p>
                                <ul className='mt-8 text-sm'>
                                    <li> <i class='fas fa-chevron-right'></i> HTML5</li>
                                    <li> <i class='fas fa-chevron-right'></i> CSS</li>
                                    <li> <i class='fas fa-chevron-right'></i> JAVASCRIPT</li>
                                    <li className='mt-5'><button className=" w-full p-2 bg-blue-700 rounded text-white">✈️Visit</button></li>
                                </ul>
                            </div>
                            <div id="websiteimage" className='p-3'>
                                <img className='w-3/4 border-2 rounded-xl' src="images/main-home-740-600.jpg" alt="" />
                            </div>
                        </div></li></h3>
                    </div>

                </Slider>
            </div>
        </section>
    )
}

export default Portfolio