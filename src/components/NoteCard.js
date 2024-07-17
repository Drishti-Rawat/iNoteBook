import { Trash, UserPen } from 'lucide-react';
import React from 'react'

const NoteCard = ({note,handledelete,handleEdit}) => {
    const timestamp = note.Date
    const [date, timeWithMillis] = timestamp.split('T');
    const time = timeWithMillis.replace('Z', '');
    const timeWithoutMillis = time.split('.')[0];
  return (
    <div className=' relative flex flex-col overflow-hidden  bg-neutral-100 rounded-lg shadow-lg shadow-gray-700  w-[400px] '>

       

            <div className='flex justify-between items-center shadow-md shadow-gray-600 text-sm   bg-gray-200 py-3 px-3 '>
                <h2 className='text-wrap text-lg font-bold max-w-[250px] '>{note.title}</h2>
                <h2 className='text-[12px] font-semibold border rounded-full bg-red-300 px-2.5 py-1.5'>{note.tag}</h2>
                
                </div>

            <div className='px-4 text-sm text-justify  flex-grow  py-3  shadow-md shadow-gray-200 '>
                <p className=' text-justify'>
                    {note.description} 
                </p>
            </div>
            
            <div className='  text-[12px] border-t  px-4 py-1 flex justify-between items-center gap-2'>
            <div className='flex gap-2'> 
                 <h2>{date}</h2>
            <h2>{timeWithoutMillis}</h2>
            </div>
                <div className='flex gap-2'>
                    <span onClick={handledelete} className='cursor-pointer'> <Trash width={18}/></span>
                    <span onClick={handleEdit} className='cursor-pointer'><UserPen width={20}/></span>
                </div>
                
               
            </div>


      
      
    </div>
  )
}

export default NoteCard
