import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import  "./contact.css"
import Swal from 'sweetalert2'

const Contact = () => {

  const [state,setState]=useState({
    name:"",
    email:"",
    mobileNumber:"",
    message:""
  })

const handleChange=(e)=>{
  setState({...state,[e.target.name]:e.target.value})
  
}

const handleSubmit=(e)=>{
  e.preventDefault();
  if(state.name==="" || state.mobileNumber===""|| state.email===""){
    return  Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Please fill in all required fields.',
      showConfirmButton: true,
      confirmButtonText: 'OK'
    });
  }
  else{
    Swal.fire('Your contact has been saved!')
    setState({
      name:"",
      email:"",
      mobileNumber:"",
      message:""
     })
  }

}

  return (
    <div className='flex w-[4/5] gap-3  justify-center items-center
     max-md:flex-col m-6' >
     
      <div className='flex-1 ml-4 mb-5 contactText '>
        <h2 className='text-center text-2xl font-bold m-6 text-[#1cbdb2]'>Contact Me</h2>
        <p className='w-[80%] text-white'>
        Feel free to reach out to me via email at sangam142@gmail.com. I'm always eager to connect and discuss job
         opportunities. Let's innovate together and make a difference in the tech world!
        </p>
        <p className='font-bold flex items-center text-[#1cbdb2]'><span className='text-white m-2' ><MdEmail /></span> sangam142@gmail.com</p>
        <p className='font-bold flex items-center text-[#1cbdb2]'><span className='text-white m-2' ><FaPhoneAlt /></span>9098176190</p>
      </div>

      <div className='flex-1 flex flex-col justify-center items-center max-md:w-[80%]'>
        <form method='post' action="" onSubmit={handleSubmit}>
        <input placeholder='name' onChange={handleChange} value={state.name} name="name" />
        <input placeholder='email' onChange={handleChange} value={state.email} name="email"  />
        <input placeholder='number' onChange={handleChange} value={state.mobileNumber} name="mobileNumber"/>
        <textarea placeholder='your message'onChange={handleChange} value={state.message} name="message"/>
        <button type='submit'on>Submit</button>
        </form>
        </div>


    </div>
  )
}

export default Contact
