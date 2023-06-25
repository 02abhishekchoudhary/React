import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Signup from './Pages/Signup'
import Navbar from './Components/Navbar'


const RouterComp = () => {
  return (
    <div className='text-center'>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default RouterComp