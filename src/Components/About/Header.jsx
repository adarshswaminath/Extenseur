import React from 'react';
import { AiTwotoneStar } from "react-icons/ai";

function Header() {
  return (
  <div>
      <div className="bg-tealblue">
      <div className="container mx-auto py-4 px-6 md:px-10 lg:px-15 items-center">
        <h4 className='text-golden flex items-center text-sm md:text-base'>
          <AiTwotoneStar className="mr-2" />
          The Business Immigration Service
        </h4>
        <h2 className="spcl-font text-2xl md:text-3xl lg:text-4xl text-white">
            About E<span className='text-golden'>x</span>tensure HR
        </h2>
      </div>
    </div>
    <div className="h-4 bg-golden"></div>
    <div className="bg-tealblue h-5 w-1/3  rounded-br-full"></div>
  </div>
  )
}

export default Header;
