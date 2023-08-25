import React from 'react'
import { useFormik } from 'formik'
import {signUpSchema} from '../models'
const initialValues={
  name:'',
  email:'',
  note:'',
}


const Contact = () => {
  const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit:(values,action) => {
     
     console.log(errors)
      action.resetForm();
    }
  })
  
  return (
   <section className='form-section w-full h-screen flex justify-center items-center  bg-gradient-to-r from-blue-300 to-blue-100'>
    <div className="formcontainer w-[60%] shadow-lg h-[80%] bg-white p-5">
    <h2 className='font-bold'>Contact Me</h2>
      <form className='grid gap-6 mt-5' action=""  onSubmit={handleSubmit} >
        <div className="namediv border-2 h-16 grid">
       
        <input id="name" placeholder='Name' type="text" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} />
        { errors.name && touched.name?(<p className='text-sm text-red-500'>{errors.name}</p>):null  }
        </div>
        <div className="namediv border-2 h-16 grid">
      
        <input placeholder='Email' id="email" type="email" name='email'  value={values.email} onChange={handleChange} onBlur={handleBlur} />
        { errors.email && touched.email?(<p className='text-sm text-red-500'>{errors.email}</p>):null  }
        </div>
        <div className="namediv border-2 h-42 grid">
       
        <textarea placeholder='Note' id="name" className='h-40' type="text" name='note'  value={values.note} onChange={handleChange} onBlur={handleBlur} />
        { errors.note && touched.note?(<p className='text-sm text-red-500'>{errors.note}</p>):null  }
        </div>
        <button  type='submit'className='bt w-20'>Submit</button>
      </form>
    </div>
 
   </section>
  )
}

export default Contact