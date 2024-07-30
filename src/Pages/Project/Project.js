import React from 'react'
import { Link } from 'react-router-dom'

import flashcard from "../../images/flashcard.png"
import todoimage from "../../images/todoimage.png"
import Iphone from "../../images/Iphone.png"
import nike from "../../images/nike.png"



const myProject=[
  {id:1,link:"https://nike-page-pi.vercel.app/",name:"Nike Page",img:nike},
  {id:2,link:"https://generator-flashcard-two.vercel.app/",name:"Generate Flashcard",img:flashcard},
  {id:3,link:"https://todoappwithfirebase.vercel.app/",name:"ToDo App",img:todoimage},
  {id:4,link:"https://apple-app-mu.vercel.app/",name:"Iphone-Website",img:Iphone},
]

const Project = () => {
  return (
    <div id="project" className='flex flex-col justify-center items-center m-auto '>
<div>
  <h1 className='font-bold text-4xl text-[#1cbdb2] m-7'>Projects</h1>
</div>
   
    <div  className='flex gap-4 flex-wrap m-auto
     justify-center items-center max-md:mt-10 max-md:flex-wrap'>
{
  myProject.map((project)=>{
    return (
      <div className='border-2 w-[45%] h-2/5 text-white flex justify-center items-center relative max-md:w-[90vw]'>
     <img src={project.img} alt="img" className='w-[100%] h-[100%] opacity-50' /> 
     <Link to={project.link} target='_blank' className='absolute font-bold text-2xl'>{project.name}</Link>
    </div>
    ) 
  })
}
   

     
    </div>
    </div>
  )
}

export default Project
