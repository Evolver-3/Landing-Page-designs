import React from 'react'
import Container from './Container'

const Section = () => {

  const dataItems=[
    {
      id:1,
      img:"/tile1.jpg",
      title:"BRECCIA AZURE",
      size:"120x240 cm"

    },
    {
      id:2,
      img:"/tile2.jpg",
      title:"ADMIRAL BROWN",
      size:"120x240 cm"
    },
    {
      id:3,
      img:"/tile3.jpg",
      size:"120x240 cm",
      title:"CHARCOAL NERO"
    },
    {
      id:4,
      img:"/tile4.jpg",
      size:"120x180 cm",
      title:"EMALI BEIGE"
    },
    {
      id:5,
      img:"/tile5.jpg",
      size:"120x180 cm",
      title:"JERICE OCRE"
    },
    {
      id:6,
      img:"/tile6.jpg",
      title:"KASHMIR MARFIL",
      size:"120x180 cm"
    }
  ]
  return (
    <Container>
      <div className='flex items-center justify-center flex-col text-center gap-10' >
        <h2 className='text-3xl font-semibold'>Browse here </h2>
        <p className='text-xl leading-tight '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, quaerat. </p>
        {dataItems.map((item,index)=>(
          <div key={index}>
            <img src={item.img} className='w-120 h-120 rounded-md shadow-lg '>
            </img>
            <div className='flex flex-col relative z-40 w-40 -top-13 left-40 bg-gray-700 '>
              <span className='text-white font-semibold'>{item.title}</span>
              <span className='text-orange-500'>{item.size}</span>
            </div>
          </div>
        ))}
         
      </div>
    </Container>
  )
}

export default Section