import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import {AiOutlineMail, AiFillEyeInvisible, AiFillEye}from 'react-icons/ai'
import { useState } from 'react'



const Register=()=> {

    const [passwordEye, setPasswordEye] = useState(false);
    const [PasswordEye, setpasswordEye] = useState(false)

    // function for password
    const handlepasswordEye = () => {
        setPasswordEye(!passwordEye)
    }

    const handlePasswordEye = () => {
      setpasswordEye(!PasswordEye)
  }


  return (
    <div>
       <div className='pt-[8vh]'>
        <div className=' max-w-[800px] m-auto px-4 py-16 drop-shadow-lg'>
            <div className='dark:bg-[#e8edea] px-10 py-8 rounded-lg text-black'>
                <h1 className='text-2xl font-bold text-gray-800'>Signin Page</h1>
              <form>
              <div className='grid md:grid-cols-2 md:gap-8'>
                        <div className='md:my-4'>
                            <label>Username</label>
                            <div className='my-2 w-full relative'>
                                <input 
                                className='w-full p-2 border border-gray-400 bg-transparent rounded-lg'
                                 type="name"
                                 placeholder='Enter username' name='name' />
                                 
                            </div>
                        </div>
                    
                    {/* <div className='grid md:grid-cols-2 md:gap-8'> */}
                        <div className='md:my-4'>
                            <label>Email Address</label>
                            <div className='my-2 w-full relative'>
                                <input 
                                className='w-full p-2 border border-gray-400 bg-transparent rounded-lg'
                                 type="email"
                                 placeholder='Enter Email Address' name='email' />
                                 <AiOutlineMail className='absolute right-2 top-3 text-gray-400'/>
                            </div>
                        </div>
                        
                        <div className='md:my-4'>
                            <label>Password</label>
                            <div className='my-2 w-full relative'>
                                <input 
                                className='w-full p-2 border border-gray-400 bg-transparent rounded-lg'
                                type={(passwordEye === false)? 'password' : 'text'}
                                placeholder='Enter password' name='password' />

                                <div className='absolute right-2 top-3'>
                                    {(passwordEye === false)? <AiFillEyeInvisible onClick={handlepasswordEye}
                                     className='text-gray-400'/> : <AiFillEye onClick={handlepasswordEye }className='text-gray-400'/>}
                                </div>
                            </div>
                        </div>

                        <div className='md:my-4'>
                            <label>Comfirm Password</label>
                            <div className='my-2 w-full relative'>
                                <input 
                                className='w-full p-2 border border-gray-400 bg-transparent rounded-lg'
                                type={(PasswordEye === false)? 'password' : 'text'}
                                placeholder='Enter cornfirm password' name='password' />

                                <div className='absolute right-2 top-3'>
                                    {(PasswordEye === false)? <AiFillEyeInvisible onClick={handlePasswordEye}
                                     className='text-gray-400'/> : <AiFillEye onClick={handlePasswordEye }className='text-gray-400'/>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className='text-center text-sm py-1'>By signing in you accept our <span className='underline'>terms and condition 
                    & private policy</span></p>
                    <button type='submit' className='w-full my-4 md:my-2 p-3 bg-[#02020F] text-white rounded-lg font-semibold'>Login  Account</button>
                </form>

                <hr className='my-6 border-gray-300 w-full'/>

                <button className='w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold
                 rounded-lg px-4 py-3 border border-gray-300'>
                    <div className='flex items-center justify-center'>
                 <FcGoogle className='w-7 h-7'/><span className='ml-4'>Log in with Google</span>
                 </div>
                 </button>

                 <p className='my-4'>Already have an account? <Link className='text-[#986c55] underline' to='/login'>Login</Link></p>
          </div>
    </div>
    </div>
  
    </div>
  )
}

export default Register
