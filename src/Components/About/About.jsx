import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Banner from "./Banner"
import Footer from '../Home/Footer'
import Faq from './Faq'
import Image from "./Image"
import { Top } from '../../App'
import Navbar from '../Navbar'


function About() {
  return (
    <div>
       <Top />
        <hr className="w-full bg-gray-400 h-px" />
        <Navbar style={{ zIndex: 100 }}/>
    <div className='bg-background'>
        <Header/>
        <Hero/>
        <Banner/>
        <Faq/>
        <Image/>
        <Footer/>
    </div>
    </div>
  )
}

export default About