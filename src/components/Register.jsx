import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthContext';

const Register = () => {
    const[message, setMessage]=useState("");
    const{registerUser}= useAuth();
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    //register user

    //submit button not working pls check
    const onSubmit =async(data) => {console.log(data)
        try {
            await registerUser(data.email, data.password);
            alert("User registered successfully")
        } catch (error) {
            setMessage("Please provide a valid Email and Password")
            console.log(error)
        }
    }

    const handleGoogleSignIn=async()=>{
        try {
            await signInWithGoogle();
            alert("Logged in with Google succesfully");
            navigate("/")
        } catch (error) {
            alert("Google SignIn failed")
            console.log(error)
        }
        
    }

    return (
        <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
            <div className='w-full max-w-sm mx-auto bg white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <h2 className='text-x1 font-semibold mb-4'>Please Register</h2>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                        <input 
                        {...register("email", { required: true })}
                        type="email" name="email" id='email' placeholder='Email Address' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                    </div>
    
                    <div className='mb-4'>
                        <label 
                        {...register("password", { required: true })}
                        htmlFor="Password" className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
                        <input type="password" id="password" placeholder="password"
                         className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                    </div>
    
                    {
                        message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                    }
                    <div>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none 
                        focus:shadow-outline' type='submit'>Register</button>
                    </div>
                </form>
              <p className="align-baseline font-medium mt-4 text-sm">Haven an Account? Please <Link to="/login" className='text-blue-500 hover: text-blue-700'>Login</Link> </p>
    
            {/*google sign in*/}
            <div className="mt-4">
                <button
                onClick={handleGoogleSignIn}
                 className='w-full flex flex-wrap gap-1 item-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'>
                <FaGoogle className="mr-2 mt-1"/>
                Sign in with Google
    
                </button>
            </div>
            <p className="mt-5 text-center text-gray-500 text-xs">2025 Book store. All rights reserved.</p>
            </div>
    
            
        </div>
      )
}

export default Register