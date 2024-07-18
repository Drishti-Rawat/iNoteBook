import {  X } from 'lucide-react'
import React from 'react'
import { Trash, UserPen } from 'lucide-react';

const OpenNote = ({description,title,handleremove,tag,handleEdit,handledelete,time,date}) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
    <div className='bg-white rounded-lg w-4/5 max-w-2xl h-4/5 flex flex-col '>
      <div className='flex items-center justify-between rounded-t-lg px-4 bg-gray-200 py-2 border-b'>
        <h2 className='text-lg font-bold'>{title}</h2>
        <span className='text-sm font-semibold bg-red-300 px-2 py-1 rounded-full'>{tag}</span>
      </div>
      <div className='px-6 py-4 flex-grow overflow-y-auto'>
        <p className='text-justify'>{description}

        </p>
      </div>
      <div className='flex justify-between items-center bg-gray-200 rounded-b-lg px-4  py-2'>
      <div className='flex gap-2 text-sm'> 
     <h2>{date}</h2>
<h2>{time}</h2>
</div>
<div className='flex justify-end gap-3   items-center'>
      <span onClick={handledelete} className='cursor-pointer'> <Trash width={18}/></span>
      <span onClick={handleEdit} className='cursor-pointer'><UserPen width={20}/></span>
      </div>
      </div>

     
      <button 
        onClick={handleremove} 
        className='absolute top-16 right-6 text-gray-600 hover:text-gray-800'
      >
        <X size={24} color='white' />
      </button>

      
    </div>
    
  </div>
  )
}

export default OpenNote
