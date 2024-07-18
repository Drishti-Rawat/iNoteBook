export const AUTH_URL =  'http://localhost:5000/api/auth';


export const SignupUser = async({name,email,password})=>{
    try {
        
    
    const response = await fetch(`${AUTH_URL}/createuser`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:  JSON.stringify({name,email,password})
    }
    )
    const data = await response.json()
    if (!response.ok) {
        throw new Error(data.error || 'Signup failed');
    }
   
    console.log(data)
    return data
} catch (error) {
    console.error("Signup error:", error);
    throw error
}
   

}
export const loginUser = async ({email,password})=>{
    const response = await fetch(`${AUTH_URL}/login`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
            
        },
        body:  JSON.stringify({email,password})
    }
    )
    const data = await response.json()
    console.log(data)
    return data
    

}