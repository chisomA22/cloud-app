
import { useState,useEffect } from 'react'
import './App.css'
import React from 'react'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Platform from './Pages/Platform'
import Contact from './Pages/Contact'
import Register from './Pages/Register'
import Support from './Pages/Support'
import Dashboard from './Pages/Dashboard'
import Footer from './Components/Footer'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify'
import { auth } from './Firebase/Firebaseconfig'

const App = () =>{
  const [user,setUser] = useState(null);
  const [isAuth,setisAuth] = useState(localStorage.getItem('isAuthorised'));


  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if (authUser){
        setUser(authUser);
      }else{
        setUser(null)
      }
    })
  },[user]);


  return (
       <Router>
        <ToastContainer/>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/support' element={<Support/>}/>
            <Route path='/platform' element={<Platform/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/login' element={<Login  setisAuth={setisAuth} setUser={setUser}/>}/>
            <Route path='/register' element={<Register setisAuth={setisAuth} />}/>
          </Routes>
          <Footer/>
       </Router>
    
      
    
  )
}

export default App

