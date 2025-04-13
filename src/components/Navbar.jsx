import { useState } from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../constants'
import { Menu, X } from 'lucide-react'

const Navbar = () => {

const [isMobileButtonActive, setIsMobileButtonActive ]  = useState(false)

  return (
    <>
   <nav className='flex justify-between sticky top-0 w-full items-center py-3  border-b-2 border-neutral-500 text-white px-3 bg-gray-950 backdrop:blur-sm'>
    <div className='flex items-center gap-2'>
        <img src={logo} alt={logo} className='w-[42px]'/>
        <p className='text-[1.2rem]'>VirtualR</p>
    </div>
    <ul className='hidden ml-7 lg:flex gap-10'>
        {navItems.map((link, index) => (
            <li key={index}>
                <a href={link.href}>{link.label}</a>
            </li>
        ))}
    </ul>
    <div className='hidden lg:flex gap-4'>
        <a href="#" className='border-2 border-white rounded-md px-4 py-1'>Sign In</a>
        <a href="#" className='rounded-md px-4 py-1 bg-gradient-to-r from-orange-500 to-orange-900'>Create an account</a>
    </div>
    <button className='lg:hidden' onClick={()=> setIsMobileButtonActive(prevState => !prevState)}>{isMobileButtonActive ? <X size={28}/> : <Menu size={28}/>}</button>
   </nav>

    {isMobileButtonActive && (
        <div className='fixed w-full z-1 text-white bg-gray-950 pb-10'>
            <ul className=''>
                {navItems.map((link,index) => (
                <li key={index} className='text-center py-5'>
                    <a href={link.href}>{link.label}</a>
                </li>
            ))}
            </ul>
            <div className='lg:hidden flex justify-center gap-4 text-white mt-3'>
                <a href="#" className='border-2 border-white rounded-md px-4 py-2'>Sign In</a>
                <a href="#" className='rounded-md px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-900'>Create an account</a>
            </div>
        </div>
    )}
        




   </>
  )
}

export default Navbar