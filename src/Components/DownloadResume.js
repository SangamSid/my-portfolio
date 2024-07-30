
import React from 'react'
import { Button } from 'react-bootstrap';

const DownloadResume = () => {
    const fileUrl = 'https://drive.google.com/file/d/1ICAYd2GZV99thwiienrpNGjNkpWFAD9J/view?usp=sharing';
    const downloadFile=(fileUrl)=>{
     
      window.location.href = fileUrl;

    }

  return (
    <div className='text-white mt-2 '>
     <Button onClick={()=>downloadFile(fileUrl)} className='bg-[#0ff1f2]'>Download Resume</Button>
    </div>
  )
}

export default DownloadResume

