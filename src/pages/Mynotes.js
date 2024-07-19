import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import NoteCard from '../components/NoteCard'

import { fetchNotes,deleteNote } from '../store/NotesSlice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Pen } from 'lucide-react'



const Mynotes = () => {
   
    const {notes,loading,error} = useSelector(state=>state.notes)
   
     const dispatch = useDispatch()
     const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchNotes());
    }, [dispatch]);

    const handleDelete = (id) => {
    
        dispatch(deleteNote(id));
    };

    const handleEdit = (note)=>{
       
        navigate(
             '/edit-note',
            {state: { note }}
          );
    }

    console.log(notes)

    const handleAdd = ()=>{
        navigate('/addnote')
    }

    if (loading === 'loading') {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
  return (
    <div className='overflow-hidden  flex  flex-col justify-start items-start px-2 md:px-6 py-10  min-h-screen  '>

        <h2 className='text-3xl font-bold underline underline-offset-8 decoration-blue-400'>Active Notes </h2>
       
    <div className='flex flex-col sm:flex-row   flex-wrap gap-10 justify-center  items-center py-10 px-6 md:px-20 '>

    <div>
            <div onClick={handleAdd} className=' cursor-pointer w-52 sm:w-80 h-[215px] hover:bg-slate-100 flex justify-center items-center rounded-lg shadow-lg bg-gray-100'>
                <div className='items-center'>
                    
                    <Pen  size={30}/>

                </div>
            </div>
        </div>

        {
            notes ?(
                notes.map((note)=>
                <NoteCard note={note} handledelete={()=>handleDelete(note._id)} handleEdit = {()=>handleEdit(note)}/>)
            ):
            (
                <h2>No Notes are available</h2>
            )
        }

       


      
    </div>
    </div>
   
  )
}

export default Mynotes
