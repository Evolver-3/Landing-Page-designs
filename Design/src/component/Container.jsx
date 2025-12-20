import React from 'react'


const Container = ({children,className=" "}) => {
  return (
    <div className={`max-w-6xl flex-col items-center justify-center ${className}`}>
      
      {children}
    </div>
  )
}

export default Container