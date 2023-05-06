import React from 'react'
import image from "../images/hero.jpg"

function Hero() {
  return (
    <div>
      <section className="bg-background">
        <div className="grid h-screen px-4 py-8 mx-auto gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-16 lg:py-16 lg:grid-cols-12">
          <div className="mx-auto text-center lg:text-left lg:col-span-7 lg:flex lg:flex-col lg:justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl font-extrabold leading-tight tracking-tight mb-4 sm:mb-6 md:mb-8 xl:mb-10 max-w-3xl">
              Healthcare Placement To UK
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 font-light max-w-2xl mb-6 lg:mb-8">
              Qualified overseas registered nurse, midwives and other allied health profession who met the eligubility criteria can work in UK
            </p>
            <a href="#" className="bg-golden text-white rounded-full px-5 py-3 text-base sm:text-lg font-medium mb-4 sm:mb-0">
              Schedule a Consultation
            </a>
          </div>
          <div className="lg:col-span-5 lg:flex lg:justify-center">
            <img src={image} alt="mockup" className="h-80 sm:h-96 lg:h-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
