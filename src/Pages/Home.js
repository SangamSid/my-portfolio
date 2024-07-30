import React from 'react';
import sangamImage from "../images/sangamImage.jpg"
import { FaGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import DownloadResume from '../Components/DownloadResume';


const Home = () => {
  return (
    <div id="home" className='mt-5'>
      <div className='flex gap-4 w-4/5 m-auto justify-items-center items-center
       max-md:flex max-md:flex-col'>

      <div className="flex-1 leading-7 max-md:text-center text-white">
              <p className='text-lg font-bold'>Hello. I am</p>
              <h1 className='text-4xl font-extrabold name'>Sangam Agrawal</h1>
              <h4 className='text-lg font-bold' >And I am a <span style={{color:"#0ff1f2"}}>Web Developer</span> </h4>
              <p >with experience of 2 years. My expertise spans across both frontend and backend development,
                  where I have honed my skills in crafting dynamic and responsive websites that meet the highest
                  standards of performance and usability.</p>
      <div className='flex max-md:justify-center'>
      <Link to="https://github.com/SangamSid" target="_blank"><FaGithub className='icon '/></Link>  
      <Link to="https://www.facebook.com/sangam.agrawal.7" target="_blank"><FaFacebookSquare className='icon' /></Link> 
      <Link to="https://www.instagram.com/sid_sangam142/" target="_blank"><FaInstagram className='icon'/></Link> 

      </div>
      <DownloadResume/>
              </div>

        <div className="flex-1">
        <img src={sangamImage} alt="profile" className='w-80 h-80 rounded-full m-auto border-2 border-red-600'
         style={{boxShadow: "0 0 50px 30px #0ff1f2"}}/>
        </div>
      </div>
  
    </div>
  );
}

export default Home;
