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

function Home() {
  return (
    <div >
        {/* <Hero/> */}
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