import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./skills.css"

const Skills = () => {

const mySkills=[
{skill:"HTML",proficient:75},
{skill:"CSS",proficient:70,},
{skill:"Java Script",proficient:70},
{skill:"Node",proficient:65},
{skill:"Express",proficient:70,},
{skill:"React",proficient:70},
{skill:"SQL",proficient:60},
{skill:"MongoDB",proficient:60},

]



  return (
   
    <div className='flex flex-col justify-center gap-6 p-4 h-[80%] w-[80%] m-auto' >
   <div>
    <h1 className='font-bold text-center text-4xl text-[#0ff1f2]' style={{marginTop:"20px"}}>Technical Skills</h1>
    </div>
        <div className='flex flex-wrap justify-center max-md:flex-col max-md:w-full
         max-md:justify-center max-md:items-center max-md:border-2 skill '>
        {mySkills.map((myskill)=>{  
          
          return (
            <>
            <div className="left w-[40%] max-md:w-full" >
            <div className='m-4'>
            <p className='text-white'>{myskill.skill}</p>
            <ProgressBar now={myskill.proficient} label={`${myskill.proficient}%`}/>
            </div>
            </div>
            
            </>
          )
        })}
        </div>



    </div>
    
  )
}

export default Skills
