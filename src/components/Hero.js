import React from 'react'
import cloud from "../assets/digital.png"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='bg-[#e5e7eb] px-10 lg:px-24  md:py-10 py-28 '>

      <div className=' flex flex-col md:flex-row justify-center items-center '>

        <div className='flex flex-col   px-6 flex-1 gap-4 flex-grow'>
          <h2 className='text-3xl sm:text-4xl tracking-wider font-bold'>Welcome To <span className='text-4xl sm:text-5xl tracking-widest'>iNotebook</span></h2>
          <p className='max-md:text-sm'>Your ultimate solution for cloud-based note-taking. Streamline your work flow and stay organized with our intuitive platform  </p>

          <div className=' flex justify-start items-center gap-3 mt-5'>
            <Link to="/signup"><button className=' px-6 py-2.5 rounded-full bg-[#0f8ded] text-white font-medium text-[13px] text-center '>Sign Up</button></Link>
            <Link to="/login"><button className=' px-6 py-2.5 rounded-full bg-[#fffcfc] text-black font-medium text-[13px] text-center '>Login</button></Link>
          </div>

        </div>
        <div className='md:flex-1  hidden md:block'>
          <img src={cloud} alt="cloud" className='w-[500px] h-[400px] lg:w-[600px] lg:h-[500px]' />
        </div>

      </div>
    </section>
  )
}

export default Hero
