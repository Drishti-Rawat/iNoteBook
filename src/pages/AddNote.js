import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNote, updateNote } from "../store/NotesSlice";
import { useLocation ,useNavigate} from "react-router-dom";
import img from "../assets/cloud.png"

const AddNotes = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const currentNote = location.state?.note || null;
 
  const navigate = useNavigate()


  useEffect(()=>{
    console.log(currentNote)
    if(currentNote){
        setTitle(currentNote.title || "");
      setDescription(currentNote.description || "");
      setTag(currentNote.tag || "");
      setIsEditMode(true);
    }
    else {
        console.log("Add mode - clearing form values");
        setTitle("");
        setDescription("");
        setTag("");
        setIsEditMode(false);
      }
  },[currentNote])
  

  const handleAddorUpdateNote = (e) => {
    e.preventDefault();
    if(isEditMode){
        dispatch(updateNote({
            id:currentNote._id,
            note:{title,description,tag}
        }))
    }
    else{
        dispatch(addNote({ title, description, tag }));
    }
    navigate('/mynotes');
  };

  return (
    <section className="flex justify-center items-center py-6 ">
    <div className="flex flex-col h-screen gap-6 justify-center items-center px-7   ">
      <div className="">
        <h2 className=" text-2xl md:text-3xl font-extrabold tracking-widest">
        {isEditMode ? "Edit Note" : "Add Note"}To the Cloud
        </h2>
      </div>
      <div className="flex justify-center items-center">


<form onSubmit={handleAddorUpdateNote} className="px-5 bg-[#cee3f2] rounded-lg">
        <div className="flex flex-col  gap-7  w-[320px] sm:w-[500px] px-3 sm:px-6  py-10  ">
          <div className="flex flex-col gap-3  ">
            <label
              htmlFor="title"
              className=" text-md font-semibold tracking-wide"
            >
              Title
            </label>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
              placeholder="title"
              className="bg-gray-100 rounded-md px-2 py-1.5 outline-none shadow-sm shadow-gray-400 "
              type="text"
              name="title"
              id="title"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label
              htmlFor="description"
              className=" text-md font-semibold tracking-wide "
            >
              Description
            </label>
            <textarea
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="description"
              value={description}
              className="rounded-md outline-none shadow-sm shadow-gray-400  px-2 py-1.5"
              rows={10}
              cols={10}
              type="text"
              name="description"
              id="description"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label
              htmlFor="Tag"
              className=" text-md font-semibold tracking-wide   "
            >
              Tag
            </label>
            <input
              onChange={(e) => {
                setTag(e.target.value);
              }}
              placeholder="tag"
              value={tag}
              className="px-2 py-1.5 rounded-md outline-none shadow-sm shadow-gray-400 "
              type="text"
              name="tag"
              id="tag"
            />
          </div>
          <div className="self-center">
            <button
              type="submit"
              className="bg-white  rounded-lg px-5 py-2  active:bg-[#6495ba] "
            >
             {isEditMode ? "Update Note" : "Add Note"}
            </button>
          </div>
        </div>
      </form>
      </div>
      
    </div>
    </section>
  );
};

export default AddNotes;
