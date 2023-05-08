import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Service from './Service'
import Footer from '../Home/Footer'
import Graph from './Graph'
import Content from "./Content"

function Outsourcing() {
  return (
    <div className='bg-background'>
      <Header/>
      <Hero/>
      <Service/>
      <Graph/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default Outsourcing