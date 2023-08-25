import React from 'react'

const ServiceSection = () => {
    const list=[
        {
            icon: <i className='fas fa fa-laptop-code text-2xl text-gray-100 '></i>,
            name:'Web Designing',
            dec:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, beatae?'
        },
        {
            icon:   <i className='fa fa-film text-2xl text-gray-100'></i>,
            name:'Web Development',
            dec:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, beatae?'
        },
        {
            icon:  <i className='fa fa-grav text-2xl text-gray-100'></i>,
            name:'UI/UX',
            dec:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, beatae?'
        },
        {
            icon:  <i className='fa fa-handshake-o text-2xl text-gray-100'></i>,
            name:'Logo Designing',
            dec:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, beatae?'
        },
        {
            icon:  <i className='fa fa-handshake-o text-2xl text-gray-100'></i>,
            name:'Digital Marketing',
            dec:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, beatae?'
        },
        {
            icon:    <i className='fa fa-ravelry text-2xl text-gray-100'></i>,
            name:'SEO',
            dec:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, beatae?'
        },
    ]
    return (
        <section id="service" className='bg-gradient-to-r from-blue-100 to-blue-300 md:p-5 lg:p-10 p-3'>
            <div className="mb-10">
                <h1 className='text-5xl'>Services</h1>
            </div>
      {/* services */}
            <div className="serviceContainer grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* grid-one */}
                {list.map((item,i)=>{
                    const {icon,name,dec}=item;
   return      <div key={i} className='hover:scale-105 grid grid-cols-12 bg-white rounded-xl'>
                    <div id='icon' className=' bg-blue-600 col-span-2 flex justify-center place-items-center text-white rounded-l-xl'>
                       {icon}
                    </div>
                    <div id="serviceDescription" className='px-3 py-5 col-span-10 '>
                        <h1 className='text-2xl '>{name}</h1>
                        <p className='text-sm mt-3'>{dec}</p>
                    </div>
                </div>
    
})}
 

            </div>
        </section>
    )
}

export default ServiceSection