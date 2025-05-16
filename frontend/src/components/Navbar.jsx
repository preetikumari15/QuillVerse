import React from 'react'
import { Link } from 'react-router-dom';
import { assets } from '../assets/assests';

const Navbar = () => {
  return (
    <nav className='bg-white p-4 sticky top-0'>
      <div className='flex container mx-auto justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <Link to={'/'}>
             <img src={assets.logo} alt="" />
          </Link>
          <p className='hidden sm:block text-2xl'>
            Quill 
            <span className='font-bold text-2xl'>Verse</span>
          </p>
        </div>
      
             { /*Centre*/}
      <ul className='hidden sm:flex gap-5 text-xl font-normal justify-center items-center text-gray-800'>
        <Link to='/' className='cursor-pointer hover:text-orange-500 duration-300'>Home</Link>
        <Link to='/blogs' className='cursor-pointer hover:text-orange-500 duration-300'>Blog</Link>
        <Link to='/about' className='cursor-pointer hover:text-orange-500 duration-300'>About</Link>
        <Link to='/contact' className='cursor-pointer hover:text-orange-500 duration-300'>Contact</Link>
      </ul>
      <Link to='/register' className='bg-blue-400 text-white px-8 py-2 rounded-full cursor-pointer hover:bg-blue-600 duration-300'>Register</Link>
      </div>
    </nav>
  )
}

export default Navbar;