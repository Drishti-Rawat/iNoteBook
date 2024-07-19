import { Eye, EyeOff, Lock, Trash, UserPen } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import bgimg from "../assets/notebg.jpg"
import OpenNote from './OpenNote';

const NoteCard = ({note,handledelete,handleEdit}) => {

    const [isNoteOpen, setIsNoteOpen] = useState(false)

    const handleToggle = ()=>{
        setIsNoteOpen(!isNoteOpen)
    }


    const timestamp = note.Date
    const [date, timeWithMillis] = timestamp.split('T');
    const time = timeWithMillis.replace('Z', '');
    const timeWithoutMillis = time.split('.')[0];

    
  return (
    <>
    <section className='relative'>
    <h2 className='text-[12px] absolute top-2  z-20 right-2 font-semibold  rounded-3xl bg-red-400 px-3 py-1.5'>{note.tag}</h2>
    <div onClick={handleToggle} className="sm:w-80 w-52  rounded z-10 bg-slate-50 overflow-hidden shadow-lg cursor-pointer">
        <div  className='relative'> 
    <img className="w-full h-36 sm:h-44 object-cover opacity-50 " src={bgimg} alt="hey" />
<div className='absolute top-[40%] right-[45%] '>

    <Lock size={40}/>
</div>

        </div>
    <div className="px-2 py-2 flex justify-between items-center">
      <div className="font-bold text-md ">{note.title}</div>
      <div className='flex gap-2'>
        <span onClick={handledelete} className='cursor-pointer'> <Trash width={18}/></span>
        <span onClick={handleEdit} className='cursor-pointer'><UserPen width={20}/></span>
    </div>
    </div>
  </div>
  {
    isNoteOpen &&(
        <div className='absolute top-0'>
        <OpenNote title={note.title} date={date} time={timeWithoutMillis} handleEdit={handleEdit} handledelete={handledelete} description={note.description} handleremove={handleToggle} tag={note.tag}/>
        </div>
    )
  }

</section>

  </>
    
  )
}

export default NoteCard

{/* <div className=' relative flex flex-col overflow-hidden  bg-neutral-100 rounded-lg shadow-lg shadow-gray-700  w-[400px] '>

       

<div className='flex justify-between items-center shadow-md shadow-gray-600 text-sm   bg-gray-200 py-3 px-3 '>
    <h2 className='text-wrap text-lg font-bold max-w-[250px] '>{note.title}</h2>
    
    
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




</div> */}
