
import Container from './Container'

const Body = () => {
  return (
    <Container className=''>
     

     <div className=' flex flex-col mx-10 gap-10 mt-20 items-start'>
        <h2 className='text-7xl font-bold '>We <span className='text-lime-400'>Sell Tiles</span> For Building Things</h2>

        <p className='text-3xl '>Tiles are one of the most important</p>

        <button className='text-3xl text-white bg-lime-500 items-left w-60 h-20 rounded-sm'>Registration</button>

        <div>
          <img src='/tiles.jpg' alt='tiles' className='rounded-lg'></img>
        </div>
     </div>
    </Container>
  )
}

export default Body