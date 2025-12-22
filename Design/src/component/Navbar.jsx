import React, { useState } from 'react'
import {motion} from 'motion/react'


const Navbar = () => {

  const varient={
    hidden:{opacity:0,x:100},
    visible:{opacity:[.1,.2,.3,.4,.5,.6,.7,.8,.9,1],x:0,
      transition:{
        delay:.2,duration:.5,ease:"easeOut"
      }
    }
  }

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
      title:"Contact",
      href:"/contact"
    },
    {
      id:5,
      title:"Pricing",
      href:"/pricing"
    }
  ]
  const [hovered,setHovered]=useState(false);
  
  return (
    
    <motion.div

    variants={varient}
    initial="hidden"
    whileInView='visible'
  
    className=' top-0 z-50 bg-lime-400 '>
      
        <div className=' flex justify-around items-center'>

          <h2 className='text-xl font-semibold'>SquareSells</h2>

          <motion.nav
           className='flex gap-1 lg:gap-20 px-2 py-2 '>

            {Navitems.map((item,index)=>(

              <a href={item.href} key={index} className='relative'
              onMouseEnter={()=>setHovered(index)}
              onMouseLeave={()=>setHovered(null)}>

                {hovered===index &&(
                  <motion.span layoutId="hovered-span" className='w-full h-full inset-0 absolute bg-lime-300 rounded-md '></motion.span>
                )}
                <span className='text-2xl lg:text-3xl z-10 relative'>{item.title}</span>
                
              </a>
            ))}
          </motion.nav>

        </div>
    </motion.div>

   
  )
}

export default Navbar