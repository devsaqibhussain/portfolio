import React from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
const NavBar = () => {
    

    const tabs = [
        {name: "About me", link: `aboutme`},
        {name: "Projects", link: `project`},
        {name: "Contact", link: `contact`},
    ]
    const [isOpen, setIsOpen] = useState(false)
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }
  return (
    <div className=' bg-stone-950/90 fixed w-[100%] md:sticky text-white top-0 z-10 '>
        <div className=' flex justify-between items-center py-4 relative'>
            <div className=' pl-4 md:relative md:px-10'>
                <Link to={"/portfolio/"}>
                    <p className=' hover:text-green-400 text-xl font-bold duration-500'>SaqibHussain <span className=' text-green-400 text-3xl'>.</span><span className=' text-green-400 text-sm'> DEV</span></p>
                </Link>
                
            </div>
            <div className=' relative' onClick={()=>setIsOpen(!isOpen)}>
                <div className='right-5 top-5 cursor-pointer z-20 md:hidden  fixed w-8'>
                    {!isOpen? <Bars3Icon/>: <XMarkIcon/>}
                </div>
                
            </div>
            
            <ul className={`fixed md:static w-full md:w-auto text-center top-0 pt-10 md:pt-0 md:flex gap-10 md:mr-10 md:opacity-100 text-xl md:pointer-events-auto bg-stone-950 md:bg-stone-950/0 z-10 md:h-full h-screen duration-500 ${isOpen? "opacity-100 pointer-events-auto": "opacity-0 pointer-events-none" }`}>
                {tabs.map((tab,index)=>(
                    <HashLink smooth scroll={scrollWithOffset} to={`#${tab.link}`} key={index}>
                        <li className=' hover:text-green-400 duration-500 font-semibold py-5 md:py-0 ' onClick={()=> setIsOpen(!isOpen)}>
                            {tab.name} <span className=' font-bold text-3xl text-green-400'>.</span>
                        </li>
                    </HashLink>
                   
                ))}
            </ul>
        </div>

    </div>
  )
}

export default NavBar