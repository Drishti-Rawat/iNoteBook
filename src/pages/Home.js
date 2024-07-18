import React from 'react'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import OueCustomers from '../components/OueCustomers'


const Home = () => {
  return ( 
    <div className='flex flex-col bg-[#ffffff]  '>
      <Hero/>
      <Feature/>
      <OueCustomers/>
    </div>
    
  )
}

export default Home
