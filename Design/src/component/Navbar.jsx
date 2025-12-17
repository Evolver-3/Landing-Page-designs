import React, { useState } from 'react'
import {motion} from 'motion/react'

const Navbar = () => {
  const Navitems=[
    {
      id:1,
      title:"Home",
      href:"/home"
    },
    {
      id:2,
      title:"About",
      href:"/about"
    }
    ,{
      id:3,
      title:"Contact",
      href:"/contact"
    },
    {
      id:4,
      title:"Testimonials",
      href:"/testimonial"
    }
  ]
  const [hovered,setHovered]=useState();
  

  return (

    <div className='w-auto top-0 relative z-10 '>
      
        <div className='bg-transparent flex justify-around items-center'>
          <i className='bx bx-user bx-lg'></i> 
          <motion.nav
           className='flex sm:gap-10 lg:gap-20'>
            {Navitems.map((item,index)=>(
              <a href={item.href} key={index} className='relative'
              onMouseEnter={()=>setHovered(index)}
              onMouseExit={()=>setHovered(null)}>
                {hovered===index &&(
                  <motion.span layoutId="hovered-span" className='w-full h-full inset-0 absolute bg-neutral-300 rounded-md px-1 py-2 '></motion.span>
                )}
                <span className='text-5xl lg:text-5xl z-10 relative'>{item.title}</span>
                
              </a>
            ))}
          </motion.nav>

        </div>
        </div>
   
  )
}

export default Navbar