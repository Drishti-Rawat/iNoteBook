import React from 'react'
import user1 from "../assets/User/user-1.png"
import user2 from "../assets/User/user-2.png"
import user3 from "../assets/User/user-3.png"
import user4 from "../assets/User/user-4.jpg"
import user5 from "../assets/User/user-5.jpg"
import { Star } from 'lucide-react'

function OueCustomers() {
  return (
    <div className='bg-[#e5e7eb] px-10 lg:px-24 pt-24 pb-40  '>
      <div className='flex flex-col justify-center items-center gap-6'>
        <div>
            <h2 className='text-2xl tracking-widest font-bold'>What Our User Say </h2>
        </div>

        <div className='flex flex-col gap-3'>
        <div className='flex -space-x-4'>
            <span className='rounded-full border border-gray-200'><img src={user1} alt="user" className='w-12 border-gray-300 border h-12 object-cover rounded-full' /></span>
            <span className='rounded-full border border-gray-200'><img src={user2} alt="user" className='w-12 border-gray-300 border h-12 object-cover rounded-full' /></span>
            <span className='rounded-full border border-gray-200'><img src={user3} alt="user" className='w-12 border-gray-300 border h-12 object-cover rounded-full' /></span>
            <span className='rounded-full border border-gray-200'><img src={user4} alt="user" className='w-12 border-gray-300 border h-12 object-cover rounded-full' /></span>
            <span className='rounded-full border border-gray-200'><img src={user5} alt="user" className='w-12 border-gray-300 border h-12 object-cover rounded-full' /></span>
        </div>

        <div className='flex justify-center items-center'>
            <Star color='green' fill='green' width={20}/>
            <Star color='green' fill='green' width={20}/>
            <Star color='green' fill='green' width={20}/>
            <Star color='green' fill='green' width={20}/>
            <Star color='green' fill='green' width={20}/>
            
        </div>

        </div>


        <div className='flex flex-col lg:flex-row justify-center items-center gap-4  py-7 mt-3'>

        <div className='flex-1 flex flex-col h-40 py-2 max-sm:w-64  w-96 lg:w-80 bg-slate-50 justify-center shadow-md shadow-gray-400 items-center px-4  rounded-xl'>
                <div>
                    <p>“inotebook has revolutionized the way I take notes and manage my projects. I can not imagine going back to my old system!”</p>
                </div>

                <div className='self-start mt-3  text-lg font-bold'>
                    <h2>jessica lee</h2>
                </div>
                

            </div>
        <div className='flex-1 flex flex-col h-40 py-2 max-sm:w-64  w-96 lg:w-80 bg-slate-50 justify-center shadow-md shadow-gray-400 items-center px-4  rounded-xl'>
                <div>
                    <p>“inotebook has revolutionized the way I take notes and manage my projects. I can not imagine going back to my old system!”</p>
                </div>

                <div className='self-start mt-3  text-lg font-bold'>
                    <h2>jessica lee</h2>
                </div>
                

            </div>
        <div className='flex-1 flex flex-col h-40 py-2 max-sm:w-64  w-96 lg:w-80 bg-slate-50 justify-center shadow-md shadow-gray-400 items-center px-4  rounded-xl'>
                <div>
                    <p>“inotebook has revolutionized the way I take notes and manage my projects. I can not imagine going back to my old system!”</p>
                </div>

                <div className='self-start mt-3  text-lg font-bold'>
                    <h2>jessica lee</h2>
                </div>
                

            </div>
        
            
                
          
           

           
          
           


        </div>
        
      </div>
    </div>
  )
}

export default OueCustomers
