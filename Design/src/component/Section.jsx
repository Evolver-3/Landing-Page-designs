import React from 'react'
import Container from './Container'
import {motion} from 'motion/react'

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
       
        <h2 className='text-5xl font-semibold'>Browse here </h2>
        <p className='text-xl leading-tight '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, quaerat. </p>

        <div className='grid grid-cols-2 gap-10 mx-4'>
        {dataItems.map((item,index)=>(
          <div key={index}>
            <motion.img
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{delay:.2,duration:.5,ease:"easeInOut"
            }}

             src={item.img} className='aspect-square rounded-md shadow-lg '>
            </motion.img>
            <motion.div
            initial={{opacity:0,y:10}}
            whileInView={{opacity:1,y:0}}
            transition={{delay:.6,duration:.6,ease:"easeInOut"}}
             className='flex flex-col relative z-40 w-40 md:w-80 -top-12 left-15 md:left-27 bg-gray-700'>
              <span className='text-white font-semibold'>{item.title}</span>
              <span className='text-orange-500'>{item.size}</span>
            </motion.div>
          </div>
        ))}
        </div>
      </div>
    </Container>
  )
}

export default Section