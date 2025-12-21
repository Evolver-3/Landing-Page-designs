import React from 'react'

const Footer = () => {
  return (

    <div className='bg-gray-700 flex flex-col items-center md:flex-row justify-center py-10 text-start text-white gap-8 md:gap-15'>
      <div className='flex flex-col gap-5'>
        <h2 className='text-4xl'>SquareSells</h2>
        <p className='text-lg'>Copyright ©2025 <br>
        </br> All rights reserved.</p>
        <div className='flex mx-5 gap-5'>
          <img src='/insta.svg' alt="insta" className='w-10 rounded-md bg-white'></img>
          <img src='/facebook.svg' alt="facebook" className='w-10 rounded-md bg-white'></img>
          <img src='/twitter.svg' alt='twitter' className='w-10 rounded-md bg-white'></img>

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
          <button className='cursor-pointer hover:text-black'><i class='bx  bx-send'></i> </button>
        </div>
      </div>


    </div>
  )
}

export default Footer