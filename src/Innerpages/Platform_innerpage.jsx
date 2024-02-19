import React from 'react'
import { useState, useEffect} from 'react'
import { toast } from 'react-toastify'
import { auth, db } from '../Firebase/Firebaseconfig'
import { addDoc, collection, getDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore'
import { Navigate, useNavigate,useParams } from 'react-router-dom'
import { FaBaby, FaRegAddressCard } from  'react-icons/fa'
import { GrLocation } from 'react-icons/gr'
import { CgProfile } from 'react-icons/cg'
import { BsPhone } from 'react-icons/bs'
import { FaCity } from "react-icons/fa";

const categoryOption = [
  "Male",
  "Female",
  "Custom"
];

const stateOption = [
  'Abia state', 'Adamawa state', 'Akwa-Ibom state', 'Anambra state', 'Bauchi state', 'Bayelsa state', 'Benue state', 'Borno state',
  'Cross River state', 'Delta state', 'Ebonyi state', 'Edo sate', 'Ekiti state', 'Enugu state', 'Gombe state', 'Imo state', 'Jigawa state',
  'Kaduna state','Kano state','Katsina state','Kebbi state','Kogi state','Kwara state','Lagos state','Nasarawa state','Niger state',
  'Ogun state','Ondo state','Osun state','Oyo state','Plateau state','Rivers state','Sokoto state','Taraba state','Yobe state',
  'Zamfara state','Federal Capital Territory(FCT)'

]

const initialState = {
  First_name: '',
  Last_name: '',
  Permanent_address: '',
  LGA: '',
  Date_of_Birth: '',
  Contact: '',
  State_of_origin: '',
  Gender: '',
  City: ''
};




const  Platform_innerpage=()=> {

  const Navigate = useNavigate();

  const [formValue, setFormValue] = useState(initialState)

const {First_name, Last_name, Permanent_address, LGA, Date_of_Birth,Contact,State_of_origin,Gender,City
} = formValue;

// targetting the input fields
const onInputChange = (e)=>{
  setFormValue({...formValue, [e.target.name]: e.target.value });
};

// targetting the category input
const onCategoryChange_three = (e) => {
  setFormValue({...formValue, State_of_origin: e.target.value });
};

// targetting the category input
const onCategoryChange_two = (e) => {
  setFormValue({ ...formValue, Gender: e.target.value});
};

const handleSubmit =async(e)=> {
  e.preventDefault();

  if (First_name=== '' || Last_name === '' || Permanent_address === '' || LGA === '' || Date_of_Birth === '' || Contact === '' || 
  Gender === '' || State_of_origin === '' || City === '') 
  {
    toast.error('please fill in the input field')
  } else {
    try {
      await addDoc(collection(db, "BirthName"), {
        User : {
          name: auth.currentUser.displayName,
          email: auth.currentUser.email,
          id: auth.currentUser.uid
        },
        ...formValue,
        timestamp: serverTimestamp()
      })
      Navigate('/')
      toast.success('submitted successfully')
    } 
    catch (error) {
      console.log (error.message)

    }

  }

}


  return (
    <div className='w-full h-[100%] pt-[13vh] justify-between' >
      <div className='max-w-[800px] m-auto px-4 py-16'>
        <div className='dark:bg-[#e8edea] px-10 py-8 rounded-lg text-black'>

            <h1 className='text-2xl font-bold text-gray-800 mb-4'>Cloud Registration</h1>
            <form onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2 md:gap-8'>

                    <div className='md:my-4'>
                        <label>First Name</label>
                        <div className='my-2 w-full relative'>
                            <input className='w-full p-2 border border-gray-400 bg-transparent rounded-lg'
                             type="text"
                             placeholder='first name'
                             name='First_name'
                             value={First_name}
                             onChange={onInputChange}/>
                             <CgProfile className='absolute right-2 top-3 text-gray-400'/>
                        </div>
                    </div>

                    <div className='md:my-4'>
                        <label>Last Name</label>
                        <div className='my-2 w-full relative'>
                            <input className='w-full p-2 border border-gray-400 bg-transparent rounded-lg'
                            type="text" 
                            placeholder='last name'
                            name='Last_name'
                            value={Last_name}
                            onChange={onInputChange}/>
                            <CgProfile className='absolute right-2 top-3 text-gray-400'/>
                        </div>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 md:gap-8'>

                    <div className='md:my-4'>
                      <label>Permanenet Address</label>
                       <div className='my-2 w-full relative'>
                         <input className='w-full p-2 border border-gray-400 bg-transparent rounded-lg'
                         type="text"
                         placeholder='Rumola street'
                         name='Permanent_address'
                         value={Permanent_address}
                         onChange={onInputChange}/>
                         <FaRegAddressCard className='absolute right-2 top-3 text-gray-400'/>
                        </div>
                    </div>

                    <div className='md:my-4'>
                      <label>L.G.A</label>
                        <div className='my-2 w-full relative'>
                          <input className='w-full p-2 border border-gray-400 bg-transparent rounded-lg'
                          type="text" 
                          placeholder='L.G.A'
                          name='LGA'
                          value={LGA}
                          onChange={onInputChange}/>
                         <GrLocation className='absolute right-2 top-3 text-gray-400'/>
                        </div>
                    </div>
               </div>

               <div className='grid md:grid-cols-2 md:gap-8'>

                    <div className='md:my-4'>
                     <label>Date of Birth</label>
                        <div className='my-2 w-full relative'>
                           <input className='w-full p-2 border border-gray-400 bg-transparent rounded-lg'
                           type="date"
                           placeholder='dd/mm/yyyy'
                           name='Date_of_Birth'
                           value={Date_of_Birth}
                           onChange={onInputChange}/>
                        </div>
                    </div>

                    <div className='md:my-4'>
                      <label>Contact</label>
                        <div className='my-2 w-full relative'>
                           <input className='w-full p-2 border border-gray-400 bg-transparent rounded-lg'
                           type="text" 
                           placeholder='080**'
                           name='Contact'
                           value={Contact}
                           onChange={onInputChange}/>
                           <BsPhone className='absolute right-2 top-3 text-gray-400'/>
                        </div>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 md:gap-8'>

                    <div className='md:my-4'>
                     <label>State Of Origin</label>
                        <div className='my-2 w-full relative'>
                           <select value={State_of_origin} onChange={onCategoryChange_three}>
                            <option>Select an option</option>
                              {stateOption.map((option, index) => (
                                <option value={option || ""} key={index}>{option}</option>
                              ))}
                           </select>
                        </div>
                    </div>

                    <div className='md:my-4'>
                      <label>City</label>
                        <div className='my-2 w-full relative'>
                           <input className='w-full p-2 border border-gray-400 bg-transparent rounded-lg'
                           type="text" 
                           placeholder='City'
                           name='City'
                           value={City}
                           onChange={onInputChange}/>
                           <FaCity className='absolute right-2 top-3 text-gray-400'/>
                        </div>
                    </div>
                </div>

                <div className='grid md:grid-cols-1 md:gap-8'>

                    <div className='md:my-4'>
                     <label>Gender</label>
                        <div className='my-2 w-full relative'>
                           <select value={Gender} onChange={onCategoryChange_two}>
                            <option>Select an option</option>
                              {categoryOption.map((option, index) => (
                                <option value={option || ""} key={index}>{option}</option>
                              ))}
                           </select>
                        </div>
                    </div>
                </div>    


              <button type='submit' className='w-full my-4 md:my-2 p-3 bg-[#02020F] text-white rounded-lg font-semibold'>Submit</button>
            </form>

        </div>

      </div>
    </div>
  )
}

export default Platform_innerpage
