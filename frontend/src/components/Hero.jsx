import React from 'react'
import { assets } from '../assets/assests'

const Hero = () => {
  return (
    <div className='my-6 flex justify-center items-center '>
        <img src={assets.hero} alt="" className='w-[80%]' />
    </div>
  )
}

export default Hero