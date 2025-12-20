import React from 'react'
import Container from './Container'

const Contact = () => {
  return (
    <Container>
      <div>
        <form className='grid grid-cols-10' >
          <span>First Name: </span><input type='text' className='bg-white rounded-lg px-2 p y-1'></input>

          <span>Last Name: </span><input type='text' className='bg-white rounded-lg px-2 p y-1'></input>

          <span>Email: </span><input type='email' className='bg-white rounded-lg px-2 p y-1'></input>

          <span>Password: </span><input type='password' required className='bg-white rounded-lg px-2 p y-1'></input>
        </form>
      </div>
    </Container>
  )
}

export default Contact