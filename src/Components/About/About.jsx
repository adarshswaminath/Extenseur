import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Banner from "./Banner"
import Footer from '../Home/Footer'
import Faq from './Faq'
import Image from "./Image"


function About() {
  return (
    <div className='bg-background'>
        <Header/>
        <Hero/>
        <Banner/>
        <Faq/>
        <Image/>
        <Footer/>
    </div>
  )
}

export default About