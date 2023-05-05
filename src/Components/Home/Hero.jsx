import React from 'react'
import image from "../images/hero.jpg"

function Hero() {
  return (
    <div>
        <section className="bg-background">
    <div className="grid h-screen px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-5xl">Healthcare Placement To UK</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                Qualified overseas registered nurse,midwives and other allied health profession who met the eligubility criteria can work in UK
            </p>
            <a href="#" className="bg-golden mb-2 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white  rounded-full">
                Schedule a Consultation
            </a> 
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <img src={image} alt="mockup" className='h-96 rounded-lg shadow-lg'/>
        </div>                
    </div>
</section>
    </div>
  )
}

export default Hero