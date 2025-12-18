import Body from './component/Body'
import Navbar from './component/Navbar'
import Testimonials from './component/Testimonials'

const App = () => {
  return (
    <div className=' h-screen w-screen'>
      <Navbar/>
    <div className=' bg-neutral-500 '>
    <Body/>
    <Testimonials/>
    </div>
    </div>
  )
}

export default App