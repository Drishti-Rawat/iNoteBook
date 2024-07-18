import React from 'react'
import { Link, useNavigate,useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react'


const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
 const navigate = useNavigate()
 const location = useLocation()
 const token = localStorage.getItem('token')

  useEffect(() => {
    
    setIsLoggedIn(!!token)
  }, [token])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    navigate('/')
  }

  if (location.pathname === '/login' || location.pathname==='/signup') {
    return null;
  }

 
  return (
    <>
    <nav className='w-full overflow-hidden flex justify-between items-center bg-[#0f8ded] py-2.5 px-3 lg:px-6 shadow-lg shadow-slate-300'>
        <div>
           <Link to="/"><h3 className='text-white text-lg lg:text-2xl font-extrabold tracking-widest'>iNotebook</h3></Link> 
        </div>

        <div className='flex gap-3 lg:gap-6 justify-center items-center  text-white text-md font-semibold px-2 lg:px-5'>
            
            
            
         {
          isLoggedIn ?(
            <>
         
            <Link to="/mynotes"><h2 className='text-sm cur'>My Notes</h2></Link>
           
            <h2 className='text-sm cursor-pointer' onClick={handleLogout}>LogOut</h2>
            </>
          ):
          (
            <>
            <Link to="/login"><h2 className='text-sm cursor-pointer'>Log In</h2></Link>
            <Link to="/signup"><h2 className='text-sm cursor-pointer'>Sign Up</h2></Link>
            </>
          )
         }

        </div>


    </nav>
    </>
  )
}

export default Navbar
