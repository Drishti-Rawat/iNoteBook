import React, { useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import NoteCard from '../components/NoteCard'
import { fetchNotes,deleteNote,updateNote } from '../store/NotesSlice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';



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
        navigate({
            pathname: '/edit-note',
            state: { note }
          });
    }

    console.log(notes)

    if (loading === 'loading') {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
  return (
    <div className='overflow-hidden bg-slate-50 h-screen'>
       
    <div className='flex flex-shrink gap-10 flex-wrap py-10 px-14 '>

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
