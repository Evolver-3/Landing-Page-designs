import {motion,useScroll,useTransform} from 'motion/react'
import Container from './Container';
import { useRef } from 'react';


const text="Tiles are one of the most important Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sequi deleniti corrupti nam fuga at non cum quia voluptatum impedit?"

const animateText={
  hidden:{opacity:0},
  visible:{
    opacity:1,
    transition:{staggerChildren:0.08,delay:.2}
  }
}

const word={
  hidden:{opacity:0,y:30},
  visible:{opacity:1, y:0}
}

const animateImg={
  hidden:{opacity:0,x:200},
  visible:{
    opacity:1,x:0,
    transition:{delay:.1,duration:.3}
  }
}


const Body = () => {

const ref=useRef(null)

const {scrollYProgress}=useScroll({
  target:ref,
  offset:["start end","end start"]
})

const bgShine=useTransform(
  scrollYProgress,[0,.1,.2,.3,4.,.6,.7,.8,.9,1],["0% 10%","20% 40%","40% 60%","60% 80%","80% 100%","100% 10%","120% 20%","140% 30%","160% 40%","200% 50%"]
)

  return (

    <Container className=''>
     
     <div className=' flex flex-col mx-10 gap-10 pt-28 items-center z-10'>
        <motion.h2
         ref={ref}
        className='text-7xl font-bold text-center text-neutral-700 relative'>We{" "}
          <motion.span
          
          style={{backgroundPosition: bgShine}}
          className='dark:bg-gradient-to-r from-lime-400 via-white to-lime-400 dark:text-transparent dark:bg-clip-text dark:bg-[length:200%] text-lime-400'>Sell Tiles</motion.span>{" "}For Building Things</motion.h2>

        <motion.p
        variants={animateText}
        initial='hidden'
        whileInView="visible"
        viewport={{once:true}}
         className='text-2xl text-center'>

          {text.split(" ").map((w,i)=>(
            <motion.span
            key={i}
            variants={word}
            className='inline-block mr-4'>
              {w}

            </motion.span>
          ))}
          
          
          </motion.p>
        <motion.button
        whileHover={{scale:1.045}}
        whileTap={{scale:.985}}
         className='text-3xl text-white bg-lime-500 items-left w-56 h-20 rounded-sm relative cursor-pointer'>Registration
          
            <svg 
            className='w-60 h-20 absolute top-0 -left-2 inset-0' width="158" height="55" viewBox="0 0 158 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
              initial={{pathLength:0}}
              whileInView={{pathLength:1}}
            
              animate={{
              stroke:["#13FFAA","#1E67C6","#CE84CF","#DD335C"] 
              }}
            transition={{
              duration:4,
              repeat:Infinity,
              ease:"linear"
            }}
            
              d="M1 1H157V53.5H1V1Z" 
              strokeWidth={3}/>
            </svg>

          
        </motion.button>

        <div>
          <motion.img
          variants={animateImg}
          initial='hidden'
          whileInView='visible'
           src='/tiles.jpg' alt='tiles' className='rounded-lg'></motion.img>
        </div>
     </div>
    </Container>
  )
}

export default Body