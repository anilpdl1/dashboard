import React from 'react'
import { useState } from 'react';
import { CiDark,CiLight } from 'react-icons/ci';
import {easeInOut, motion} from 'framer-motion'
const Navbar = () => {
  const [light,setLight]=useState(false);
  const toggletheme=()=>{
     setLight(!light)
    document.body.classList.toggle('light')
  }
  return (
    <nav className='fixed top-0 lg:left-70 md:left-40 w-2/3 '>
      <div className='px-6 py-6 flex items-center justify-center gap-20'>
      <button onClick={()=>toggletheme()} >{light?<CiLight size={30}/>:<CiDark size={30}/>}</button>
      <motion.h2
      initial={{y:20,scale:0.7,opaciity:0.7}}
      animate={{y:0,scale:1,opacity:1}}
      transition={{duration:0.6,ease:easeInOut,delay:0.2}}
      className='text-3xl'
      >Welcome Developer</motion.h2>

      </div>
    </nav>
  )
}

export default Navbar
