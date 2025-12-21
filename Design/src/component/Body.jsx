import {motion} from 'motion/react'
import Container from './Container';


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

const animateFont={
  initiail:{}
}

const Body = () => {

  return (

    <Container className=''>
     
     <div className=' flex flex-col mx-10 gap-10 pt-30 items-center z-10'>
        <h2 className='text-7xl font-bold text-center bg-gradient-to-br from-white to gray-500 bg-clip-text text-transparent'>We
          <motion.span 
          
          className='text-lime-400 relative'> Sell Tiles</motion.span> For Building Things</h2>

        <motion.p
        variants={animateText}
        initial='hidden'
        whileInView="visible"
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
              stroke-width={3}/>
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