import React ,{useEffect,useRef,useState} from 'react'

const LazyImage = ({id,img}) => {
    const [inView, setInView] = useState(false)
    const ref=useRef();
    let callback=(entries,observer)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            setInView(true)
        }
    })    
    }

    useEffect(() => {
     let observer=new IntersectionObserver(callback);
     if(ref.current){
        observer.observe(ref.current);
     }
    
      return () => {
       observer.disconnect()
      }
    })
    
  return (
    inView ? <img className='rounded-xl' src={img} alt="blogimg" />: <div id={id} ref={ref} className='image-placeholder'></div>
  )
}

export default LazyImage