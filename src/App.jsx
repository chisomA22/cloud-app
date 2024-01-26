
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
import Footer from './Components/footer'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

const App = () =>{
  return (
       <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/support' element={<Support/>}/>
            <Route path='/platform' element={<Platform/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
          <Footer/>
       </Router>
    
      
    
  )
}

export default App

