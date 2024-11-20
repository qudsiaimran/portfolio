import React from 'react'
import { FaMailBulk } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import {BsFillTelephoneFill} from "react-icons/bs"


import { FaStaylinked } from "react-icons/fa";


const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl  font-bold'>'Let's Keep In Touch'</h2>
                <p className='text-slate-200 text-[18px] pt-2 font-light'>
                "Feel free to reach out by filling out the form—whether you'd like to chat, call, or leave a message!"
                </p> 
                <div className='flex gap-3 items-center '>
                <FaMailBulk size={60}/> qudsiaimran127@gmail.com ,
                </div>
                <div className='flex gap-3 items-center '>
                <BsFillTelephoneFill size={60}/> (+92)3182283939 ,
                </div>
                 <div className='flex gap-3 items-center '>
                <IoLogoLinkedin  size={60}/> Linkedin.com ,
                </div> 

            </div>
            <div className='space-y-8'>
              <div className='flex flex-col gap-2  d'>
                <label htmlFor='name'>Full Name :</label>
                <input type="text" 
                className='h-[50px] bg-transparent border border-slate-200'
                id='name'/>
              </div>
              <div className='flex flex-col gap-2 '>
                <label htmlFor='email'>Email address :</label>
                <input type="text" 
                className='h-[50px] bg-transparent border border-slate-200'
                id='email'/>
              </div>
              <div className='flex flex-col gap-2 '>
                <label htmlFor='msg'>Message :</label>
                <textarea 
                className='bg-transparent border border-slate-200'
                id='msg' rows={10}>
                </textarea >
              </div>
              <button className='bg-slate-950 p-2 px-16 rounded-md'>Send Inquiry</button>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
