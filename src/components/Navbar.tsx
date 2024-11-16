import React from 'react'

import { RiMenuSearchFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-normal'>QUDSIA IMRAN</div>
            <ul className='gap-10 lg:gap-20 md:flex text-slate-50'>
                <li className='menuLink'><a href='#hero'>Home</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li className='menuLink'><a href='#contact'>Contact</a></li>
                <li className='menuLink'><a href='#skills'>Skills</a></li>
                <li className='menuLink'><a href='#projects'>Projects</a></li>
            </ul>
            <RiMenuSearchFill className='md:hidden' size={30} />

        </div>
      
    </div>
  )
}

export default Navbar

