import React from 'react'
import Container from './Container'
import {motion} from 'motion/react'


const Testimonials = () => {

  const textAni="We have worked with over 20+ customers, who just love over Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sint eveniet veniam dolore ipsam ipsa mollitia soluta eaque, tempora dicta fuga officia omnis impedit obcaecati alias incidunt deserunt numquam nobis?"

  const animateText={
    hidden:{opacity:0},
    visible:{
      opacity:1,
      transition:{staggerChildren:0.08,delay:.2}
    }
  }

  const wordAnimate={
    hidden:{opacity:0,y:20},
    visible:{opacity:1,y:0}
  }

  
  const tesDatas=
  [
    {
      id:1,title:"Classicals Houses",desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sint eveniet veniam dolore ipsam ipsa mollitia soluta eaque, tempora dicta fuga officia omnis impedit obcaecati alias incidunt deserunt numquam nobis?"
    },
    {
      id:2,title:"Modern Houses",desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sint eveniet veniam dolore ipsam ipsa mollitia soluta eaque, tempora dicta fuga officia omnis impedit obcaecati alias incidunt deserunt numquam nobis?"
    },
    {
      id:3,title:"Extravagant places",desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sint eveniet veniam dolore ipsam ipsa mollitia soluta eaque, tempora dicta fuga officia omnis impedit obcaecati alias incidunt deserunt numquam nobis?"
    }
  ]

  return (
    <Container>
    <div className=' mt-40'>
      <div className='flex flex-col items-center justify-center gap-10 mx-30'>
        <h2 className='text-5xl '>Our Clients</h2>

        <motion.p
        variants={animateText}
        initial='hidden'
        whileInView='visible'
         
         className='text-2xl leading-tight text-center'>
          {textAni.split(" ").map((t,i)=>(
            <motion.span
            variants={wordAnimate}
           
            className='inline-block mr-4' key={i}>
              {t}
          </motion.span>
          ))}
         </motion.p>

        <span className='border border-b border-gray-700 w-100'></span>
      </div>

      <div className='flex flex-col items-center justify-center mt-30 gap-10'>
        <h2 className='text-5xl '>Why we are needed?</h2>
        <p className='text-2xl '>Who doesn't like furnished houses</p>

        <div className='grid grid-cols-2 lg:grid-cols-3 '>
          {tesDatas.map((item,index)=>(
            <motion.div
            initial={{rotateY:180}}
            whileInView={{rotateY:0}}
            transition={{duration:1,delay:.2}}
             key={index} className=' px-10 py-10 flex flex-col m-10 items-center justify-center dark:bg-lime-400 bg-white rounded-md text-white gap-4 dark:text-gray-500 '>
              
              <h2 className='text-2xl font-bold text-gray-600 text-center'>{item.title}</h2>
              <p className='text-sm text-bold text-center'>{item.desc}</p>
            </motion.div>
            
          ))}
          
        </div>
        <span className='border border-b border-gray-700 w-100'></span>
      </div>
       
    </div>
    </Container>
  )
}

export default Testimonials