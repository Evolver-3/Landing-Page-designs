import React from 'react'
import Container from './Container'
import {motion} from 'motion/react'

const Contact = () => {
  return (
    <Container>
      <div className='flex flex-col justify-center gap-10' id='contact'>
        <h2 className='text-5xl text-center font-semibold'>Contact us for more details</h2>

        <form className='flex flex-col items-center gap-5 mt-5 dark:text-white justify-center border border-lg py-10 m-10 rounded-lg'>
          <input type='text'  placeholder="Your Full Name" className='px-2 py-1 border rounded-md border-lime-400 w-100'></input>
          <input type='password' placeholder='Your Email Address' className='px-2 py-1 border rounded-md border-lime-400 w-100' ></input>
          <textarea rows={4} placeholder='Write any business related Query here ...' className='px-2 py-1 border rounded-md border-lime-400 w-100'></textarea>

          <motion.button
          whileHover={{scale:1.02}}
          whileTap={{scale:.98}}
          className='px-2 py-2 w-100 rounded-lg text-lg font-bold bg-lime-400'>Contact Us</motion.button>
        </form>
      
      </div>
    </Container>
  )
}

export default Contact