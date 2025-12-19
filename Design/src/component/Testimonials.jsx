import React from 'react'
import Container from './Container'

const Testimonials = () => {
  return (
    <Container>
    <div className=' mt-40'>
      <div className='flex flex-col items-center justify-center gap-10 mx-30'>
        <h2 className='text-5xl '>Our Clients</h2>

        <p className='text-2xl leading-tight'>We have worked with over 20+ customers, who just love over Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sint eveniet veniam dolore ipsam ipsa mollitia soluta eaque, tempora dicta fuga officia omnis impedit obcaecati alias incidunt deserunt numquam nobis?</p>

        <span className='border border-b border-gray-700 w-full'></span>
      </div>

      <div className='flex flex-col items-center justify-center mt-30 gap-10'>
        <h2 className='text-5xl '>Why we are needed?</h2>
        <p className='text-2xl '>Who doesn't like furnished houses</p>

        <div className=''></div>
      </div>
    </div>
    </Container>
  )
}

export default Testimonials