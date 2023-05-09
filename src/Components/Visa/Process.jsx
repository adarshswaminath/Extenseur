import React from 'react';
import image from "../images/court.jpg";
import { TiTick } from 'react-icons/ti';


// track visa application
const VisaTrack = () => {
    return (
        <div>
            <h1 className="title text-2xl">How to track your visa application(Applicants in India? )</h1>
            <div className="grid lg:flex">
                <div className="grid w-full lg:w-1/2">
                    Go to Bl
                </div>
                <div className="grid w-full lg:w-1/2"></div>
            </div>
        </div>
    )
}

function Process() {
    return (
        <div className='p-4 md:p-8 lg:p-12 xl:p-16'>
            {/* <div className="grid lg:flex gap-8">
                <div className="grid w-full lg:w-1/2">
                    <h1 className="text-3xl">UK visa application process</h1>
                    <div className="mt-6">
                        <li className='flex items-center'>
                            <TiTick className='text-xl text-golden' />
                            <span className='ml-2'>Check if you need a visa to the UK</span>
                        </li>
                        <li className='flex items-center'>
                            <TiTick className='text-xl text-golden' />
                            <span className='ml-2'>Find out the correct visa application category or sub-category</span>
                        </li>
                        <li className='flex items-center'>
                            <TiTick className='text-xl text-golden' />
                            <span className='ml-2'>Visa application center in your country to book an appointment </span>
                        </li>
                        <li className='flex items-center'>
                            <TiTick className='text-xl text-golden' />
                            <span className='ml-2'>Visa application payment</span>
                        </li>
                        <li className='flex items-center'>
                            <TiTick className='text-xl text-golden' />
                            <span className='ml-2'>Check supporting document to submit with the visa application</span>
                        </li>
                        <li className='flex items-center'>
                            <TiTick className='text-xl text-golden' />
                            <span className='ml-2'>Visa application submission</span>
                        </li>
                        <li className='flex items-center'>
                            <TiTick className='text-xl text-golden' />
                            <span className='ml-2'>Collection of passport or travel document</span>
                        </li>
                    </div>
                    <img src={image} className='mt-2' alt="" />
                </div>
              
                <div className="grid w-full lg:w-1/2">
                    <h1 className="text-3xl">Other Services & Assistance</h1>
                    <p>
                    Manage your Application(Visa processing times,application & documents chek,online payament assistance,form filling assistance, biometric information, premium service,report a change)
                    </p>
                  
                </div>
              
            </div> */}
            <VisaTrack/>
        </div>

    )
}

export default Process;
