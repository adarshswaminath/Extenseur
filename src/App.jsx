// npm imports
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Draggable from 'react-draggable';
// icon
import {BsWhatsapp} from "react-icons/bs"
// components
import Navbar from "./Components/Navbar"
import Home from "./Components/Home/Home"
import Outsourcing from "./Components/OutSourcing/Outsourcing";
import About from "./Components/About/About";
import Visa from "./Components/Visa/Visa";
// images and files
import logo from "./Components/images/logo.png"
import "./App.css"
import News from './Components/News/News';
import Contact from './Components/Contact/Contact';
import User from './Components/User/User';
import Signup from './Components/User/Signup';
import Admin from './Components/Admin/Admin';
import Pannel from './Components/Admin/Pannel';
import Upload from './Components/Admin/Upload';
import { useState } from 'react';
import Forgot from './Components/Admin/Forgot';

export const Top = () => {

  return (
    <div className="flex justify-between m-2">
      <div className="mt-3 flex gap-2">
        <span className='text-golden text-sm'>Phone</span>
        <span className='text-sm'>+91&nbsp;6282888688</span>
        <span className='text-golden text-sm'>Email</span>
        <a className='text-sm' href='mailto:info@visahub.com'>info@visahub.com</a>
      </div>
      {/* ----------- */}
      <div className="mt-4 space-x-6 justify-center sm:mt-0 hidden sm:flex ">
      <Link to="/user"><button className='bg-golden px-3 py-2 rounded-lg text-white'>Login</button></Link>
      <Link to="/"><button className='bg-golden px-3 py-2 rounded-lg text-white'>Admin</button></Link>
      

        
      </div>
    </div>
  )
}


function App() {
  const isAdminAccess = location.pathname === "/access/admin"
  console.log(isAdminAccess)
  return (
    <main>
      <Router>
        {/* UserInterface */}
        {/* <Top />
        <hr className="w-full bg-gray-400 h-px" />
        <Navbar style={{ zIndex: 100 }}/> */}
        {/* contact movable button button  */}
        {/* fixed inset-0 flex justify-end items-end h-screen  */}
       
        {/* Routing things */}
        <Routes>
          {/* user side routes */}
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/outsourcing" element={<Outsourcing />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/visa&immigration" element={<Visa />}></Route>
          <Route exact path="/news&updates" element={<News />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/user" element={<User/>}></Route> 
          <Route exact path="/signup" element={<Signup/>}></Route>
          {/* admin Routes */}
          {isAdminAccess && (
            <Route exact path='/access/admin' element={<Admin/>}></Route>
          )}
          <Route exact path='/pannel' element={<Pannel/>}></Route>
          <Route exact path='/admin-forgot' element={<Forgot/>}></Route>
          <Route exact path="/upload" element={<Upload/>}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App
