import React from 'react'
import Hero from './Hero'
import Hero2 from './Hero2'
import Library from './Library'
import Service from './Service'
import Banner from './Banner'
import About from './About'
import Signup from './Signup'
import Footer from "./Footer"
import Box from './Box'
import Navbar from '../Navbar'
import { Top } from '../../App'
import Draggable from 'react-draggable'
import { BsWhatsapp } from 'react-icons/bs'
function Home() {
  return (
    <div >
        {/* <Hero/> */}
        <Top />
        <hr className="w-full bg-gray-400 h-px" />
        <Navbar style={{ zIndex: 100 }}/>
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
        <Hero2/>
        <Library/>
        <Service/>
        <Banner/>
        <About/>
        <Signup/>
        <Box/>
        <Footer/>
    </div>
  )
}

export default Home