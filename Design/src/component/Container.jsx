import React from 'react'

const Container = ({children}) => {
  return (
    <div className=' flex items-center justify-center bg-neutral-700 dark:bg-gray-700'>
        {children}
    </div>
  )
}

export default Container