import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getDocs,collection, onSnapshot, deleteDoc } from 'firebase/firestore';
import { auth, db } from '../Firebase/Firebaseconfig';
import { toast } from 'react-toastify';


const Dasboard_inner =( {isAuth}) => {
    
    const [Birth, setBirth] = useState([])
    const [isoloading, setisloading] = useState(true)
    const navigate = useNavigate()

    // useEffect(()=>{
    //     if(!isAuth){
    //         navigate('login')
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [isAuth]);

    useEffect(()=>{
        const getBlogs = onSnapshot(
            collection(db, 'BirthName'),
            (snapshot) =>{
                let list = []
                snapshot.docs.forEach((doc)=>{
                    list.push({id: doc.id, ...doc.data()})
                });
                setBirth(list)
                console.log(list);
                setisloading(false)
            }, (err)=>{
                console.log(err)
            }
        )

        return ()=>{
            getBlogs();
        }
    },[])


    // delete functionality
    // const Birth_delete = async (id)=>{
    //     if(window.confirm('ARE YOU SURE YOU WANT TO DELETE THIS ARTICLE?')){
    //      try {
    //         const postDoc = doc(db, 'BirthData',id)
    //         await deleteDoc(postDoc)
    //         toast.success('deleted successfully')
    //     } catch (err) {
    //         console.log(err)
    //     }
    //  }

    // };


  return (
        <>
        
      <h2 className='ml-8 text-2xl font-semibold pt-[15vh]'>All Cloud Registration Details</h2>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 0 lg:grid-cols-2 gap-x-6 gap-y-16 pt-10 sm:pt-10 text-black'>
        {Birth.map((item)=>{
            return(
                <div key={item.id}>
                    <div className=' p-4 rounded-lg shadow-2xl mb-9 bg-white hover:bg-transparent hover:bg-sky-300 duration-500'>
                        <h3 className='pt-4 text-[15px] text-black pb-2 font-bold'>{`${item?.First_name}'s`}name</h3>
                        <h1 className='text-[#ed0518] text-[15px]'><span className='font-bold text-black'>Username :</span> {item?.User.name  }</h1>
                        <h1 className='text-[#ed0518] text-[15px]'><span className='font-bold text-black'>User Email :</span> {item?.User.email }kg</h1>
                        <h1 className='text-[#ed0518] text-[15px]'><span className='font-bold text-black'>User Id :</span> {item?.User.id }kg</h1>

                        <h1 className='mt-4'><span className='font-bold text-black'>Last_name</span>{item?.name}</h1>
                        <h1><span className='font-bold text-black'>Date of Birth</span>{item?.Date_of_Birth  }</h1>
                        <h1><span className='font-bold text-black'>Contact</span>{item?.contact }</h1>
                        <h1><span className='font-bold text-black'>State of origin</span>{item?.State_of_Origin}</h1>
                        <h1><span className='font-bold text-black'>City</span>{item?.city || <skeleton/>}</h1>

                        <div className='mt-4'>
                            <Link to={`/birth_detail/${item.id}`}><button className='mr-4 pr-2 bg-slate-900 text-center p-1 rounded-lg shadow-2xl text-white'>Read more</button></Link>
                            <Link to={`/bith_update/${item.id}`}><button className='mr-4 pr-2 bg-slate-900 text-center p-1 rounded-lg shadow-2xl text-white'> update</button></Link>
                            {
                                isAuth && item.User.id === auth.currentUser.uid && (
                                    <Link to='/certificate'><button className='mr-4 pr-2 bg-slate-900 text-center p-1 rounded-lg shadow-2xl text-white'>Get Certificate</button></Link>
                                )
                            }

                        </div>

                    </div>
                </div>
                
            )
        })}
      </div>
      </>
  )
}

export default Dasboard_inner
