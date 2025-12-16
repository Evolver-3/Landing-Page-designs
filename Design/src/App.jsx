import Content from "./component/Content"
import Navbar from "./component/Navbar"

const App=()=>{
  return(
    <>
    <Navbar/>
  <div className="min-h-screen flex  bg-neutral-400 dark:bg-gray-800">
    <Content/>
  </div>
  </>
  )
}

export default App