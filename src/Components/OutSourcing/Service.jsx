import React from 'react'

const Card = ({ name, about }) => {
    return (

        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
            <img className="object-cover w-48 rounded-t-lg md:h-auto  md:rounded-none md:rounded-l-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 tracking-tight text-gray-900">{name}</h5>
                <p className="mb-3 font-normal text-gray-700">{about}</p>
            </div>
        </a>

    )
}


function Service() {
    return (
        <div className='p-3 bg-white h-screen flex justify-center items-center'>
            <h2 className="heading text-2xl font-normal lg:text-4xl">Visa & Immigration <span className='text-golden'>Service</span></h2>
        </div>
    )
}

export default Service