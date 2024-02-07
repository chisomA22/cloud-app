import React from 'react'
import image from '../assets/image.jpg'

const About_innerpage=()=> {
  return (
    <div  className='w-full h-[100%] pt-[11vh] flex flex-col justify-between'>
        <div className='grid md:grid-cols-3 max-w-[1240px] m-auto'>

        <div className='text-center align-middle py-8'>

                <img src={image} alt="gif-image" className='w-[600px ] drop-shadow-2xl pt-[50vh] rounded-lg left-10 ' />

            </div>

            

            <div className='rounded-lg bg-[#e8edea]  px-10 py-16 w-[800px] h-[450px] pt-[8vh] m-auto   drop-shadow-lg'>
              <h2 className='text-5xl font-bold py-4 align-middle'>About us</h2>
              <p className='text-xl py-20 text-gray-600'>Developers and marketers use Cloud to quickly and easily create, manage and deliver their digital experiences across any browser, device and bandwidth.
              It also helps to transform images and videos to load faster with no visual degradation</p> 
              <button className='py-3 px6 sm:w-[60%] my-4 bg-black text-white rounded-xl'>Learn more </button>
            </div>

              <div>
                <img src={image} alt="gif-image" className='w-[600px ] drop-shadow-2xl pt-[2vh] rounded-lg  ' />
                
            </div>

        </div>
      
    </div>
  )
}

export default About_innerpage
