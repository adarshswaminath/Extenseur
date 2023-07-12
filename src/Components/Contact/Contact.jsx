import React from "react";
import Footer from "../Home/Footer";
import Body from "./Body";
import { Top } from "../../App";
import Navbar from "../Navbar";

const Contact = () => {
  return (
    <div>
       <Top />
        <hr className="w-full bg-gray-400 h-px" />
        <Navbar style={{ zIndex: 100 }}/>
      <Body/>
      <Footer />
    </div>
  );
}

export default Contact;

