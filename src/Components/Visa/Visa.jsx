import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Service from './Service'
import Process from './Process'
import Footer from "../Home/Footer"
import { Top } from '../../App'
import Navbar from '../Navbar'

function Visa() {
  return (
    <div>
       <Top />
        <hr className="w-full bg-gray-400 h-px" />
        <Navbar style={{ zIndex: 100 }}/>
    <div className='bg-background'>
        <Header/>
        <Hero/>
        <Service/>
        <Process/>
        <Footer/>
    </div>
    </div>
  )
}

export default Visa