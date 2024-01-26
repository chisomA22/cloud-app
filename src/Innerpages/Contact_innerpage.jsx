import React from 'react'
import picture from '../assets/picture.jpg'
import { AiFillFacebook} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'


const Contact_innerpage=()=> {
  return (
    <div className='w-full h-[100%] pt-[13vh] flex flex-col justify-between'>
      <h2 className='text-5xl font-bold py-4 pt-[4vh] align-middle'>Contact us</h2>
      <div className='grid md:grid-cols-3 max-w-[1240px]'>

        <div>
          <img src={picture} alt="gif-image" className='w-[100px ] drop-shadow-2xl pt-[10vh] rounded-lg  ' />
        </div>

        <div className='rounded-lg  px-10 py-16 border-2 w-[600px] h-[500px] pt-[6vh]  border-black m-[19vh] drop-shadow-lg'>

              <form>
              <div className=' md:gap-2'>
                        <div className='md:my-4'>
                            <label>Full name</label>
                            <div className='my-2 w-full grid grid-cols-2 relative'>
                                <input 
                                className='w-[250px] p-2 border border-gray-400  bg-transparent rounded-lg'
                                 type="name" 
                                 placeholder='Enter Full Name' name='name'  />
                                 
                                 <div>
                                  <h4>Contact :<p>akanichisom10@gmail.com</p> </h4>
                                 </div>
                            </div>
                            
                            
                        </div>
                    
                  
                        <div className='md:my-4'>
                            <label>Email Address</label>
                             <div className='my-2 w-full grid grid-cols-2 relative'>
                                <input 
                                className='w-[250px] p-2 border border-gray-400 bg-transparent rounded-lg'
                                 type="email"
                                 placeholder='Enter Email Address' name='email' />

                                 <div>
                                  <h4>Based in : <p>portharcourt,Nigeria.</p></h4>
                                  </div>
                            </div> 
                        </div>
                        
                        <div className='md:my-4'>
                            <label>Message</label>
                           <div className='my-2 w-full relative'>
                                <input 
                                className='w-[250px] py-8 p-2 border border-gray-400 bg-transparent rounded-lg'
                                type='message'
                                placeholder='Enter your message' name='message' />

                            </div> 
                        </div>
                      </div>


                </form>
              
              <button className='py-2 px-6 sm:w-[40%] my-4 bg-black text-white  rounded-2xl'>Contact us </button>
              <div className='flex  justify-between gap-4[] sm:w-[300px] pt-4 text-2xl'>
              <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer" > <FaTwitter/> </a>
        <a href="https://www.facebook.com/home.php?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" > <AiFillFacebook/> </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" > <BsInstagram/> </a>
              </div>
            </div>



      </div>
    
      
    </div>
  )
}

export default Contact_innerpage
