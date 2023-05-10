import React from 'react';
import image from '../images/hero.jpg';


function Hero() {
  return (
    <>
      <div className="bg-background">
        <div className="container mx-auto px-4 py-12 sm:py-20 lg:py-24 xl:py-32 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div className="flex flex-col justify-center items-center md:items-start">
              <h1 className="spcl-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 md:mb-8 xl:mb-10">
                Healthcare Placement To UK
              </h1>
              <p className="text-gray-500 text-base sm:text-lg md:text-xl mb-8 md:mb-10 xl:mb-12 max-w-xl">
                Qualified overseas registered nurse, midwives and other allied health profession who met the eligibility criteria can work in UK
              </p>
              <a href="#" className="bg-golden text-white rounded-full py-4 px-8 text-base sm:text-lg font-medium shadow-lg hover:bg-yellow-400 transition duration-300">
                Schedule a Consultation
              </a>
            </div>
            <div className="flex justify-center">
              <img
                src={image}
                alt="mockup"
                style={{
                  width: '100%',
                  maxWidth: '36rem',
                  borderTopLeftRadius: '120px',
                  borderBottomRightRadius: '120px',
                }}
              />


            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
