import React, { Component, useState } from 'react'
import Container from './Container'
import {motion} from 'motion/react'

const Navbar = () => {
    const NavItems=[
        {
            id:1,
            title:"Home",
            href:"/home"
        },
        {
            id:2,
            title:"About",
            href:"/about"
        },
        {
            id:3,
            title:"Services",
            href:"/services"
        },
        {
            id:4,
            title:"Contact",
            href:"/contact"
        }
    ]
    const [hovered,setHovered]=useState();
  return (
    <Container>
    <div className='relative z-40 w-4xl flex flex-row  items-center justify-around mx-10'>
        <img src="/profile.jpg" width="100px" height="50px" className='w-10 h-10 rounded-full '></img>
        <div className=''>
        {NavItems.map((item,index)=>(
           
                <a href={item.href} key={index} className='relative '
                onMouseEnter={()=>setHovered(index)}
                onMouseLeave={()=>setHovered(null)}>

                    {hovered === index && 
                    (<motion.span layoutId='hovered-rover' className='h-full w-full absolute  bg-white inset-0'>
                    </motion.span>)}

                    <span className='z-10 relative '>{item.title}</span>
                    </a>
               
        
        ))}
        </div>
    </div>
    </Container>
    
  )
}

export default Navbar