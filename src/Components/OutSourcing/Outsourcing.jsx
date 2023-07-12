import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Service from './Service'
import Footer from '../Home/Footer'
import Graph from './Graph'
import Content from "./Content"
import { Top } from '../../App'
import Navbar from '../Navbar'

function Outsourcing() {
  return (
  <div>
     <Top />
        <hr className="w-full bg-gray-400 h-px" />
        <Navbar style={{ zIndex: 100 }}/>
      <div className='bg-background'>
      <Header/>
      <Hero/>
      <Service/>
      <Graph/>
      <Content/>
      <Footer/>
    </div>
  </div>
  )
}

export default Outsourcing