import React from 'react'
import Navbar from "@/components/Navbar";
import { left } from 'inquirer/lib/utils/readline';

const Hero = () => {
  return (
    <div id="Hero" className="min-h-screen bg-no-repeat bg-[url(/banner-bg.png)]  bg-cover"
    style={{backgroundSize: "38%" , backgroundPosition: "left 100px top 100px"}}>
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[90px] sm:text-[110px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-in-up">Hey there,</p>
            <p data-aos="zoom-in-up">I'm</p>
            <p data-aos="zoom-in-up">Qudsia Imran</p>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Hero
