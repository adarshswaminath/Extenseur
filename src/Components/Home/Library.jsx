import React from 'react'
import image from "../images/library.jpg"

function Library() {
  return (
    <div>
    <section className="bg-background">
      <div className="grid max-w-screen-xl grid-cols-12 gap-8 px-4 py-8 mx-auto lg:gap-16 lg:py-16">
        <div className="col-span-12 lg:col-span-7 self-center">
          <h1 className="max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-5xl">
            Want to study in Top Universities Abroad?
          </h1>
          <p className="max-w-2xl mb-6 text-gray-500 font-light lg:mb-8 md:text-lg lg:text-xl">
            Visa & Immigration service for skilled professionals, students, dependent families, settlement, permanent residency, citizenship, and family tourist visits.
          </p>
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 mb-2 font-medium text-white bg-golden rounded-full text-center text-base hover:bg-golden-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-golden">
            Schedule a Consultation
          </a>
        </div>
        <div className="col-span-12 lg:col-span-5 flex justify-center mt-4 lg:mt-0">
          <img src={image} alt="mockup" className="rounded-lg" />
        </div>
      </div>
    </section>
  </div>
  
  )
}

export default Library