import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Service from './Service'
import Process from './Process'
import Footer from "../Home/Footer"

function Visa() {
  return (
    <div className='bg-background'>
        <Header/>
        <Hero/>
        <Service/>
        <Process/>
        <Footer/>
    </div>
  )
}

export default Visa