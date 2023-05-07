import React from 'react'
import image from "../images/library.jpg"
import logo from "../images/logo.png"

function About() {
    return (
        <div>
            <section className="bg-white" >
                <div className="grid max-w-screen-xl gap-8 px-4 py-8 mx-auto lg:gap-16 lg:py-16" >
                    <div className="mt-6 bg-white p-5 shadow-2xl" >
                        <h1 className="spcl-font mb-4 left-0 text-3xl tracking-tight leading-none md:text-5xl xl:text-5xl">
                            About Extenseur HR
                        </h1>
                        <p className="max-w-4xl mb-6 text-gray-500 font-light lg:mb-8 md:text-lg lg:text-xl left-0">
                            Extenseur HR is a "fully administration regulatory 'support firm' with remote work human asset practical experience ". Unlike different firm that offer some sort of administration, Extenseur HR incorporate risk management coupled with the labour benefit that ensure the end goal to be achieved with the least potential obligation to the client. Our service range from placement for healthcare Professional, Visa & Immigration, professional registration, assessment services with complete human resource solution and outsourcing service. As consultant, our winning qualities are professionalism, expert knowledge, time management, real result promptness, and guaranteed client satisfaction.
                        </p>
                    </div>
                    <img src={logo} alt="logo image" className="mx-auto" />
                </div>
            </section>
        </div>


    )
}

export default About