import { useState } from 'react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/Firebaseconfig'
import { toast } from 'react-toastify'
import { FcGoogle } from "react-icons/fc";
// import { Link } from 'react-router-dom';
import {AiOutlineMail, AiFillEyeInvisible, AiFillEye}from 'react-icons/ai'
import { signInWithEmailAndPassword } from 'firebase/auth';


// initial state for the input state
const initialState = {
    email: '',
    password: '',
}

const Login=({setisAuth, setUser})=> {

    const navigate = useNavigate()
    
    const [passwordEye, setPasswordEye] = useState(false);

    const [formValue, setFormValue] = useState(initialState);
    const {email, password} = formValue;

    // targetting the input
    const onInputChange = (e) => {
        setFormValue({...formValue, [e.target.id]: e.target.value})
    }

    // function for password
    const handlepasswordEye = () => {
        setPasswordEye(!passwordEye)
    }

    // submit functionality
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email === '' || password === ''){
          return toast.error('please fill in the input')
        }else{
          try{
            if( email && password ){
                const {user} = await signInWithEmailAndPassword(
                    auth,email,password
                )
                setUser(user)
                localStorage.setItem('IsAuthorised', true);
                setisAuth(true)
                toast.success('Login successfully')
                navigate('/')
            }
          }  catch (error) {
            toast.error('Invalid credential')
            // console.log(error)
          }
        }
    }


  return (
    <div className='pt-[8vh]'>
        <div className='max-w-[800px] m-auto px-4 py-16 drop-shadow-lg'>
            <div className='dark:bg-[#e8edea] px-10 py-8 rounded-lg text-black'>
                <h1 className='text-2xl font-bold text-gray-800'>Login Account</h1>
                <form onSubmit={handleSubmit}>
                    <div className='grid md:grid-cols-2 md:gap-8'>
                        <div className='md:my-4'>
                            <label>Email Address</label>
                            <div className='my-2 w-full relative'>
                                <input 
                                className='w-full p-2 border border-gray-400 bg-transparent rounded-lg'
                                 type="email"
                                 placeholder='Enter Email Address' id='email' value={email} onChange={onInputChange} />
                                 <AiOutlineMail className='absolute right-2 top-3 text-gray-400'/>
                            </div>
                        </div>

                        <div className='md:my-4'>
                            <label>Password</label>
                            <div className='my-2 w-full relative'>
                                <input 
                                className='w-full p-2 border border-gray-400 bg-transparent rounded-lg'
                                type={(passwordEye === false)? 'password' : 'text'}
                                placeholder='Enter password' id='password' value={password} onChange={onInputChange} />

                                <div className='absolute right-2 top-3'>
                                    {(passwordEye === false)? <AiFillEyeInvisible onClick={handlepasswordEye}
                                     className='text-gray-400'/> : <AiFillEye onClick={handlepasswordEye }className='text-gray-400'/>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className='text-center text-sm py-1'>By signing in you accept our <span className='underline'>terms and condition 
                    & private policy</span></p>
                    <button type='submit' className='w-full my-4 md:my-2 p-3 bg-[#02020F] text-white rounded-lg font-semibold'>Login  Account</button>
                </form>

                <hr className='my-6 border-gray-300 w-full'/>

                 <p className='my-4'>Don't have an account? <Link className='text-[#986c55] underline' to='/register'>Signup</Link></p>
        </div>
    </div>
    </div>
  )
}

export default Login
