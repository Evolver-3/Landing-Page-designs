import React from 'react'

const Navbar = () => {
    const NavItems=[
        {
            id:1,
            title:"Home",
            href:"/home"
        },
        {
            id:2,
            title:"About",
            href:"/about"
        },
        {
            id:3,
            title:"Services",
            href:"/services"
        },
        {
            id:4,
            title:"Contact",
            href:"/contact"
        }
    ]
  return (
    
    <div className='w-4xl flex flex-row gap-10'>
        {NavItems.map((item,index)=>(
            <div key={item.id} >
                <a href={item.href} >{item.title}</a>
               
            </div>
        ))}
    </div>
    
  )
}

export default Navbar