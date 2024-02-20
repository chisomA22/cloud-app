import React from 'react'
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useParams  } from 'react-router-dom';
import { db } from '../Firebase/Firebaseconfig';
import { useNavigate } from 'react-router-dom';


const Birth_details =({isAuth})=> {

    const {id} = useParams();
    const navigate = useNavigate();
    const [singlebirth, setsinglebirth] = useState(null);
  
  
    //getting the birth details 
    const getBirthDetail = async()=>{
      const docRef = doc(db, 'BirthName', id);
      const snapshot = await getDoc(docRef)
      setsinglebirth(snapshot.data());
    };
  
    useEffect(()=>{
      id && getBirthDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
     },[id])

    //  useEffect(()=>{
    //     if(!isAuth){
    //       navigate('/login')
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    //   }, [isAuth]);
    
  
  return (
    <div className=''> 
    <div className=' px-5 py-5 rounded-md'>
      <h3 className=' pt-4 text-xl text-black pb-2 font-bold' > {`${singlebirth?.First_name}'s`}</h3>

      <div className='grid grid-cols-1 gap-4'>
      <div className="mb-6 font-mono">
        <div className='text-[#f01f0c]'>
              <h1> ID: {singlebirth?.User?.id} </h1>
              <h1> Full name: {singlebirth?.User?.name} </h1>
              <h1> Email:  {singlebirth?.User?.email} </h1>
        </div>
             <h1 className=' text-xl'> <span className='font-bold text-black'> First Name: </span>  {singlebirth?.First_name } </h1>
             <h1 className=' text-xl'> <span className='font-bold text-black'> Last Name :</span> {singlebirth?.Last_name} </h1>
             <h1 className=' text-xl'> <span className='font-bold text-black'> Gender :</span> {singlebirth?.Gender } </h1>
             <h1 className=' text-xl'> <span className='font-bold text-black'> Permanent Address :</span> {singlebirth?.Permanent_Addres } </h1>
             <h1 className=' text-xl'> <span className='font-bold text-black'> L.G.A  : </span>  {singlebirth?.LGA} </h1>
             <h1 className=' text-xl'> <span className='font-bold text-black'> Date of Birth : </span> {singlebirth?.Date_of_Birth} </h1>
             <h1 className=' text-xl'> <span className='font-bold text-black'> Contact :</span> {singlebirth?.Contact} </h1>
             <h1 className=' text-xl'> <span className='font-bold text-black'> State of origin: </span> {singlebirth?.State_of_origin}</h1> 
             <h1 className=' text-xl'> <span className='font-bold text-black'> city: </span> {singlebirth?.city}</h1>
             <h1 className=' text-xl text-[#f01f0c]'> <span className='font-bold'> Date Submitted: </span> {singlebirth?.timestamp.toDate().toDateString()}</h1> 
      </div>
      </div>
      </div>     
  </div>

  )
}

export default Birth_details
