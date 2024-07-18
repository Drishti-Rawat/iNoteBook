import { RefreshCcw, Smartphone,Lock } from 'lucide-react'
import React from 'react'

function Feature() {
  return (
    <section className='bg-[#ffffff] px-10 lg:px-24  py-14 overflow-hidden'>
      <div  className='flex flex-col justify-center items-center gap-10'>
        <div>
            <h2 className='text-2xl tracking-widest font-bold'>Features</h2>
        </div>

        <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-4 gap-5 '>
            
            <div className='flex flex-col flex-1 justify-center items-center h-52 w-10/12 bg-neutral-50 shadow-md shadow-gray-200 px-4 py-6 gap-2 '>
                <span className='rounded-full bg-[#0f8ded] px-1.5 py-1.5'><RefreshCcw width={20} height={20} color='white'/></span>
                <h2 className='text-xl font-semibold mt-3'>Real Time Sync</h2>
                <p className='text-center text-[15px]'>Access your notes anytime, anywhere with seamless synchronization.</p>

            </div>
            <div className='flex flex-col flex-1 justify-center items-center h-52 w-10/12 bg-neutral-50 shadow-md shadow-gray-200 px-4 py-6 gap-2 '>
                <span className='rounded-full bg-[#0f8ded] px-1.5 py-1.5'><Lock width={20} height={20} color='white'/></span>
                <h2 className='text-xl font-semibold mt-3'>Secure</h2>
                <p className='text-center text-[15px]' >Your data is encrypted and safe with us, ensuring maximum privacy.</p>

            </div>
            <div className='flex flex-col flex-1 justify-center items-center h-52 w-10/12 bg-neutral-50 shadow-md shadow-gray-200 px-4 py-6 gap-2'>
                <span className='rounded-full bg-[#0f8ded] px-1.5 py-1.5'><Smartphone width={20} height={20} color='white'/></span>
                <h2 className='text-xl font-semibold mt-3'>Mobile Friendly</h2>
                <p className='text-center text-[15px] max-sm:text-sm'>Use NoteCloud on the go with our mobile-optimized platform.</p>

            </div>
        </div>

      </div>
    </section>
  )
}

export default Feature
