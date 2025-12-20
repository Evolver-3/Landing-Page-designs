import Body from './component/Body'
import Contact from './component/Contact'
import Navbar from './component/Navbar'
import Testimonials from './component/Testimonials'
import EffectPro from './EffectPro'

const App = () => {
  return (
    <div className=' h-screen w-screen '>
     
    <Navbar/>
    <div className=' bg-neutral-500 flex items-center flex-col'>
    <Body/>
    <Testimonials/>
    <Contact/>
    </div> 
    </div>
  )
}

export default App 