import React from 'react'
import Footer from "../Home/Footer";
import Content from "./Content"
import { Top } from '../../App';
import Navbar from '../Navbar';
function News() {
  return (
    <div>
       <Top />
        <hr className="w-full bg-gray-400 h-px" />
        <Navbar style={{ zIndex: 100 }}/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default News