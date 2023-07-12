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
      <Link to="/signup"><button className='bg-golden px-3 py-2 rounded-lg text-white'>signUp</button></Link>

        
      </div>
    </div>
  )
}


function App() {

  return (
    <main>
      <Router>
        {/* UserInterface */}
        {/* <Top />
        <hr className="w-full bg-gray-400 h-px" />
        <Navbar style={{ zIndex: 100 }}/> */}
        {/* contact movable button button  */}
        {/* fixed inset-0 flex justify-end items-end h-screen  */}
        <div className="fixed overflow-auto scrollable-container justify-end items-end">
          <Draggable>
            <div className="fixed p-3">
              <button className="border-white p-1 bg-green-500 rounded-full">
                <button className="bg-gray-50 text-green-500 rounded-full p-3">
                  <a href="https://www.google.com"><BsWhatsapp className='text-xl lg:text-2xl' /></a>
                </button>
              </button>
            </div>
          </Draggable>
        </div>
        {/* Routing things */}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path='/admin' element={<Admin/>}></Route>
          <Route exact path="/outsourcing" element={<Outsourcing />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/visa&immigration" element={<Visa />}></Route>
          <Route exact path="/news&updates" element={<News />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/user" element={<User/>}></Route> 
          <Route exact path="/signup" element={<Signup/>}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App
