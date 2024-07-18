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
    <div className='overflow-hidden  h-screen  '>
       
    <div className='flex  gap-10 flex-wrap py-10 px-14 '>

        {
            notes ?(
                notes.map((note)=>
                <NoteCard note={note} handledelete={()=>handleDelete(note._id)} handleEdit = {()=>handleEdit(note)}/>)
            ):
            (
                <h2>No Notes are available</h2>
            )
        }

        <div>
            <div onClick={handleAdd} className=' cursor-pointer w-80 h-[215px] hover:bg-slate-100 flex justify-center items-center rounded-lg shadow-lg bg-gray-100'>
                <div className='items-center'>
                    
                    <Pen  size={30}/>

                </div>
            </div>
        </div>


      
    </div>
    </div>
   
  )
}

export default Mynotes
