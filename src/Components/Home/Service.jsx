import React from 'react'
import one from "../images/service1.jpg"
import two from "../images/service2.jpg"
import three from "../images/service3.jpg"
import four from "../images/service4.jpg"
import five from "../images/service5.jpg"
import six from "../images/service6.jpg"


const ServiceCard = ({ title, imageUrl, linkUrl }) => {
    return (
        <div className="w-64 bg-white border border-gray-200 rounded-lg shadow">
            <a href={linkUrl}>
                <img className="rounded-t-lg" src={imageUrl} alt="" />
            </a>
            <div className="p-5">
                <a href={linkUrl}>
                    <h5 className="mb-2 font-bold tracking-tight text-gray-900">{title}</h5>
                </a>
            </div>
        </div>
    );
};



function Service() {
    return (
        <div>
            <div className="mt-6 flex flex-col items-center">
                <h1 className="text-4xl text-center mb-6">Our Services</h1>
                <p className="max-w-2xl text-gray-500 font-light text-center mb-8 md:text-lg lg:text-xl">
                    Specialized in supporting healthcare profession placement Visa & Immigration,
                    Professional registration, assessment service with complete human resources solutions and outsourcing service
                </p>
                {/* service cards */}
                <div className="mt-4 grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <ServiceCard
                        title="UK UNIVERSITY ADMISSION"
                        imageUrl={one}
                        linkUrl="#"
                    />
                    <ServiceCard
                        title="UK HEALTHCARE PLACEMENT"
                        imageUrl={two}
                        linkUrl="#"
                    />
                    <ServiceCard
                        title="VISA & IMMIGRATION"
                        imageUrl={three}
                        linkUrl="#"
                    />
                    <ServiceCard
                        title="HR/ADMIN OUTSOURCING (RPO)"
                        imageUrl={four}
                        linkUrl="#"
                    />
                    <ServiceCard
                        title="CANADA IMMIGRATION & CITIZENSHIP"
                        imageUrl={five}
                        linkUrl="#"
                    />
                    <ServiceCard
                        title="TRAININGS"
                        imageUrl={six}
                        linkUrl="#"
                    />
                </div>
                {/* card closed */}
                <a href="#" className="mt-3 mb-3 inline-flex items-center justify-center w-65 px-5 py-3 font-medium text-white bg-golden rounded-full text-center text-base hover:bg-golden-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-golden">
                Schedule a Consultation
              </a>
            </div>
        </div>

    )
}

export default Service