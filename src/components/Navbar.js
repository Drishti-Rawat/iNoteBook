import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='w-full overflow-hidden flex justify-between items-center bg-green-500 py-3 px-6 shadow-lg shadow-slate-300'>
        <div>
           <Link to="/"><h3 className='text-white text-3xl font-extrabold tracking-widest'>iNotebook</h3></Link> 
        </div>

        <div className='flex gap-6 justify-center items-center  text-white text-lg font-semibold px-5'>
            <Link to="/"><h2 className=''>Home</h2></Link>
            <Link to="/about"><h2 className=''>About</h2></Link>
            <Link to="/mynotes"><h2 className=''>My Notes</h2></Link>
            <Link to="/addnote"><h2 className=''>Add Note</h2></Link>
            <Link to="/login"><h2 className=''>Log In</h2></Link>
            <Link to="/signup"><h2 className=''>Sign Up</h2></Link>
         

        </div>


    </nav>
    </>
  )
}

export default Navbar
