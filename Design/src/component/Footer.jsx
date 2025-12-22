import React from 'react'
import {motion,useScroll} from 'motion/react'
import { useRef } from 'react'


const hanimate={
  hidden:{opacity:0},
  shake:{opacity:1,
    transition:{staggerChildren:.04,delay:.7}
  }

}

const Footer = () => {

  const footerImg=[{id:1,img:"/insta.svg"},{id:2,img:"/facebook.svg"},{id:3,img:"/twitter.svg"}]
  return (

    <div className='bg-gray-700 flex flex-col items-center md:flex-row justify-center py-10 text-start text-white gap-8 md:gap-15'>
      <div className='flex flex-col gap-5'>
        <h2 className='text-4xl'>SquareSells</h2>
        <p className='text-lg'>Copyright ©2025 <br>
        </br> All rights reserved.</p>
        <div className='flex gap-10 '>
        {footerImg.map((foot,index)=>(
          <motion.img
          variants={hanimate}
          initial='hidden'
          whileInView='shake'
          src={foot.img} key={index} className='w-10 rounded-md bg-white'></motion.img>
        ))}
        </div>
      </div>


      <div className='grid grid-cols-2 gap-5'>
       <div className='flex flex-col gap-5'>
          <h2 className='text-3xl'>Company</h2>
          <ul className='text-xl'>
            <li>About Us
            </li>
            <li>Contact Us</li>
            <li>Pricing</li>
            <li>Testimaonials</li>
          </ul>
        </div>

        <div className='flex flex-col gap-5'>
          <h2 className='text-3xl'>
            Support
          </h2>
          <ul className='text-xl'>
            <li>Help Center
            </li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Status</li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col gap-5'>
        <h2 className='text-3xl'>Stay Up to date</h2>
        <div className='flex items-center justify-around bg-gray-500 py-2 px-1 rounded-lg outline-1 text-md'>
          <input type='email' placeholder='Your Email Address' className='outline-none'></input>
          <button className='cursor-pointer hover:text-black'><i className='bx  bx-send'></i> </button>
        </div>
      </div>


    </div>
  )
}

export default Footer