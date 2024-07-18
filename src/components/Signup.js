import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SignupUser } from '../config/api';
import { useNavigate } from 'react-router-dom';
import img from "../assets/illustration.png"



const Signup = () => {

   const navigate = useNavigate()


    const [name,setname]=useState('')
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
    const [ConfirmPass,setConfirmPass]=useState('')
    const [error,setError]= useState('')

    const signup=async ()=>{
        try {
            const response = await SignupUser({name:name,email:Email,password:Password})
    console.log("response",response)
    if(response.success===true){
        localStorage.setItem('token',response.authtoken)
        console.log("token set",localStorage.getItem('token',response.authtoken))
      navigate('/mynotes')
    }
    else{
      setError(response.error|| 'signup failed')
    }
    return response
        } catch (error) {
            console.error("Signup error:", error);
            setError(error.message || " an error occured during signup")
        }
       
    
  }

  const handleSignUp= (e)=>{
    if (Password.length < 5) {
        setError("Password must be at least 5 characters long");
        return;
    }
    if (Password !== ConfirmPass) {
        setError("Passwords do not match");
        return;
    }
    e.preventDefault()
    signup()
  }

    


  return (
    <section className="flex flex-col   py-3 gap-8 ">
    <div className="flex justify-between items-center py-1 px-20 shadow-md shadow-slate-200">
      <Link to="/">
        <h3 className="text-black text-2xl font-bold tracking-widest">
          iNotebook
        </h3>
      </Link>
      <h2 className="text-[12px] font-medium">Access your notes with ease</h2>
    </div>

    {/* login  */}
    <div className="flex justify-center items-center xl:px-16 md:px-5   ">
      <div className="flex-1 bg-[#cee3f2] rounded-3xl hidden md:block  shadow-lg shadow-[#80a6c1]  py-10">
        <div className="flex  flex-col justify-center items-center gap-4">
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="xl:text-2xl md:text-xl font-extrabold  tracking-wider">
              Add, Edit, Delete notes
            </h2>
            <h3 className="xl:text-xl md:text-md font-semibold">
              Store all your notes securely in the cloud.
            </h3>
          </div>

          <div>
            <img src={img} alt="img" width={350} height={350} />
          </div>

          <div className="py-3">
            <h2 className="text-md font-normal">
              Organize your notes effortlessly
            </h2>
          </div>
        </div>
      </div>

      <div className="flex-1  flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-10   rounded-lg shadow-sm shadow-slate-300 sm:px-16 md:px-6 xl:px-14 py-10 ">
          <div className="flex flex-col justify-center items-center gap-2">
            
            <h2 className="xl:text-3xl md:text-2xl sm:text-3xl font-bold ">Welcome Back</h2>
            <p className="text-sm ">Enjoy Unlimited note storage.</p>
           
            
          </div>

          <div className="flex-grow">
            <form  className='flex flex-col gap-4 ' onSubmit={handleSignUp} >
<input autoComplete="name" onChange={(e)=>{setname(e.target.value)}} value={name} type="text" placeholder='Name ' id="name" className='rounded-md shadow-md shadoow-gray-300 outline-none py-2 px-3  w-[300px] text-[15px] bg-gray-100 border-b  text-gray-900' />
<input autoComplete='email' onChange={(e)=>{setEmail(e.target.value)}} value={Email} type="email" placeholder='Email ' id="email" className='rounded-md shadow-md shadoow-gray-300  outline-none py-2 px-3  text-[15px] bg-gray-100 border-b  text-gray-900' />
<input autoComplete='new-password' onChange={(e)=>{setPassword(e.target.value)}} value={Password} type="password" placeholder='password ' id="password" className='rounded-md shadow-md shadoow-gray-300  outline-none py-2 px-3  text-[15px] bg-gray-100 border-b  text-gray-900' />
<input autoComplete='new-password' onChange={(e)=>{setConfirmPass(e.target.value)}} value={ConfirmPass} type="password" id="c_password" placeholder='password ' className='rounded-md shadow-md shadoow-gray-300  outline-none py-2 px-3  text-[15px] bg-gray-100 border-b  text-gray-900' />
{
    error &&
    (
        <div><h2 className='text-sm text-red-700'>{error}</h2></div>
    )
}

<button type="submit" className='bg-[#0095f6] rounded-lg text-sm py-2 mt-3 text-white font-semibold cursor-pointer'>Sign Up</button>
</form>
          </div>

          <div>
            <h2 className="text-sm">Already have account? <Link to="/login" className="text-blue-500">Login</Link></h2>
          </div>
        </div>
      </div>

      

    </div>
  </section>
  )
}

export default Signup


