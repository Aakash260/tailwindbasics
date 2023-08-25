
import React from 'react'
 
const BlogSection = () => {
 const blog=[
  {
    img:'/images/blog1.jpg',
    title:'Learn HTML',
  },
  {
    img:'/images/blog2.jpg',
    title:'Learn CSS',
  },
  {
    img:'/images/blog3.jpg',
    title:'Learn JavaScript',
  },
  {
    img:'/images/blog4.jpg',
    title:'Learn React',
  },
  {
    img:'/images/blog5.jpg',
    title:'Learn CSS FrameWork',
  }
 ]
  return (
   <section  id="blogsection" className=' p-10'>
<div className='mb-10'>
  <h2 className='text-5xl'>Blogs</h2>
</div>

{/* bloglist */}

<div className=" bloglistcontainer grid lg:grid-cols-4 md:grid-cols-3 gap-5">
{blog.map((item,i)=>{

const {img,title}=item
  return <div className='wow animate__animated animate__zoomIn rounded-xl bg-blue-200 p-8 hover:scale-105'>
   <img className='rounded-xl' src={img} alt="blogimg" />
   <h1 className='text-2xl mt-6 font-bold'>{title}</h1>
   <p className='mt-3 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, tempore.</p>
 </div>
})}   
 
 
</div>

{/* third part of blog */}
<div className='grid grid-cols-1 md:grid-cols-2 mt-10 rounded-xl p-8 bg-blue-200'>
  <div>
<img src="images/blog1.jpg" alt="" className='rounded-xl'/>
  </div>
  <div className='flex flex-col justify-center align-middle p-8'>
<h1 className='text-2xl'>Learn HTML</h1>
<p className='text-sm mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, unde.</p>
<p>By <span className='font-bold'>Aakash Nirwan</span></p>
<h5>Date:30/8/2023</h5>
  </div>
</div>
   </section>
  )
}

export default BlogSection

