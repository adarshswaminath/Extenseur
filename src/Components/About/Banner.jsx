import React from 'react'
import { BiGroup } from "react-icons/bi"
import { AiOutlineUser } from "react-icons/ai"
import { TiTick } from "react-icons/ti"
import { BsFlagFill } from "react-icons/bs"


function Banner() {
    return (
        <div className="w-full">
            <div className="p-8 bg-tealblue text-center">
                {/* heading and label */}
                <h2 className="spcl-font text-2xl font-semibold text-golden">
                    Why Extenseur HR, Immigration & Consulting?
                </h2>
                <p className="text-white mt-3 max-w-2xl mx-auto text-base lg:text-lg">
                    Our primary goal has been to provide quality recruitment, study, visa, and immigration services to our clients across the world.
                </p>
                {/* icon and text */}
                <div className="flex flex-col lg:flex-row justify-around items-center text-white mt-8">
                    <div className='flex flex-col items-center mb-4 lg:mb-0'>
                        <AiOutlineUser className='text-4xl text-golden mb-2' />
                        <div className='font-extrabold text-xl'>
                            <h2>402<span className='text-golden'>+</span></h2>
                        </div>
                        <div className='text-sm'>Candidates</div>
                    </div>
                    <div className='flex flex-col items-center mb-4 lg:mb-0'>
                        <BiGroup className='text-4xl text-golden mb-2' />
                        <div className='font-extrabold text-xl'>
                            <h2>39<span className='text-golden'>+</span></h2>
                        </div>
                        <div className='text-sm'>Clients</div>
                    </div>
                    <div className='flex flex-col items-center mb-4 lg:mb-0'>
                        <TiTick className='text-4xl text-golden mb-2' />
                        <div className='font-extrabold text-xl'>
                            <h2>99<span className='text-golden'>%</span></h2>
                        </div>
                        <div className='text-sm'>Success</div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <BsFlagFill className='text-4xl text-golden mb-2' />
                        <div className='font-extrabold text-xl'>
                            <h2>30<span className='text-golden'>+</span></h2>
                        </div>
                        <div className='text-sm'>Countries</div>
                    </div>
                </div>
            </div>
            <h2 className="spcl-font text-4xl lg:text-5xl py-3">Company History</h2>
            <div className="h-4 bg-golden"></div>
            <div className="bg-tealblue h-5 w-1/3  rounded-br-full"></div>
            {/* text placed */}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="p-3 text-center">
                            <p className="text-justify">
                                Extenseur HR was established in 2016 with headquarters in Cochin, India. We are a team of hardworking professionals focused on developing and leaving a successful trail by assisting healthcare recruitment companies with solutions to their administrative and office work that they can outsource. We can help you save costs, share the workload, share risk, and provide a fair return on investment since outsourcing helps to reduce the internal use of the workforce. We guarantee high productivity at a low cost by utilizing maximum external resources for our clients, providing the highest quality HR & Outsourcing services. The idea started from the point where companies understood there are no boundaries in doing business with international companies and willing to share their knowledge and experience combined with well-qualified human resources, which creates a cost-effective business environment without compromising quality. We have 17 years of combined experience in the UK recruitment process outsourcing and recruiting healthcare professionals to the UK from around the globe.
                            </p>
                            <p className="p-3 text-justify">
                                Organizations require an accomplished business process outsourcing (BPO) partner who helps with the right human resource and involves the use of technologies that help to tackle business challenges, such as Advance HR innovation speculation, convey on business and spending objectives, and lifting HR abilities to the next level. Extenseur HR can help you simplify complex HR processes, reduce costs, improve service delivery, enhance employee experience, and transform HR roles into strategic opportunities. Extenseur HR provides administrative services across all HR operations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* text paragraph closed */}
            
        </div>
    )
}

export default Banner;
