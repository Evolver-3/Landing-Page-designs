import Body from './component/Body'
import Contact from './component/Contact'
import Footer from './component/Footer'

import Navbar from './component/Navbar'
import Testimonials from './component/Testimonials'


const App = () => {
  return (
    <div className='w-full dark:bg-neutral-500 overflow-x-hidden '>
      <Navbar/>
    
    <div className=' flex items-center flex-col gap-10'>
     
    <Body/>
    <Testimonials/>
    <Contact/>
    
    
    </div> 
    <Footer/>
    </div>
  )
}

export default App 