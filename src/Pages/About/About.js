import React from 'react'
import sangam from "../../images/sangam.jpg"
import "./about.css"


const About = () => {
    
  return (
    <div className='flex w-[80%] mt-25 gap-5 max-md:flex max-md:flex-col max-md:mt-7 '>
      
      <div className="flex-1 ">
      <img src={sangam} alt="profile" className='w-80 h-80 rounded-full m-auto border-2 border-red-600 aboutImage max-md:hidden '
         style={{boxShadow: "0 0 50px 30px #0ff1f2"}}/>
      </div>

      <div className="flex-1 aboutText justify-center max-md:text-center text-white " >
        <h1  className='font-bold text-5xl'> About Me</h1>
        <p  className='font-bold text-xl mt-2 text-[#0ff1f2]'> Full Stack Developer</p>
        <p className="mt-4  max-md:text-center">I bring a proactive and self-motivated approach 
        to my work, consistently demonstrating a strong work ethic and dedication to meeting project timelines.
        my commitment to continuous learning not only enhances my value as a professional but
        also enables me to make meaningful contributions to the success and innovation of the teams
         and organizations I work with.
        </p>
        </div>

    </div>
  )
}

export default About
