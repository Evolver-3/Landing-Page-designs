import React, { useState } from 'react'
import {motion} from 'motion/react'
import Container from './Container';

const Navbar = () => {
  const Navitems=[
    {
      id:1,
      title:"Home",
      href:"/home"
    },
    {
      id:2,
      title:"Features",
      href:"/features"
    }
    ,{
      id:3,
      title:"Community",
      href:"/community"
    },
    {
      id:4,
      title:"Blog",
      href:"/blog"
    },
    {
      id:5,
      title:"Pricing",
      href:"/pricing"
    }
  ]
  const [hovered,setHovered]=useState();
  

  return (
    <Container>

    <div className=' top-0 relative bg-orange-400 '>
      
        <div className=' flex justify-around items-center'>

          <i className='bx bx-user bx-sm '></i> 

          <motion.nav
           className='flex gap-5 lg:gap-20 px-2 py-2'>

            {Navitems.map((item,index)=>(

              <a href={item.href} key={index} className='relative'
              onMouseEnter={()=>setHovered(index)}
              onMouseLeave={()=>setHovered(null)}>

                {hovered===index &&(
                  <motion.span layoutId="hovered-span" className='w-full h-full inset-0 absolute bg-neutral-300 rounded-md  '></motion.span>
                )}
                <span className='text-2xl lg:text-5xl z-10 relative'>{item.title}</span>
                
              </a>
            ))}
          </motion.nav>

        </div>
        </div>

    </Container>
   
  )
}

export default Navbar