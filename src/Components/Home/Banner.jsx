import React from 'react'
import image from "../images/group.jpg"

function Banner() {
    return (
        <div
            className="flex relative items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10">

                <div className="grid lg:flex gap-3 p-3">
                    {/* card 1 */}
                    <div className="w-72 p-6 border rounded-lg shadow">
                        <a href="#">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-golden">Apply For A Visa</h5>
                        </a>
                        <p className="mb-3 font-normal text-white">Visa & Immigration Consultation And Start Visa Application</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-golden focus:ring-4 focus:outline-none rounded-full">
                            Read more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                    {/* card 2 */}
                    <div className="w-72 p-6 border rounded-lg shadow">
                        <a href="#">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-golden">UK NARIC Assessment</h5>
                        </a>
                        <p className="mb-3 font-normal text-white">Assessment On International Education,Training,Qualification And Skills</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-golden focus:ring-4 focus:outline-none rounded-full">
                            Read more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                    {/* card 3 */}
                    <div className="w-72 p-6 border rounded-lg shadow">
                        <a href="#">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-golden">Professional Registration</h5>
                        </a>
                        <p className="mb-3 font-normal text-white">Information About Healthcare Profesional Registration</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-golden focus:ring-4 focus:outline-none rounded-full">
                            Read more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                    {/* card 4 */}
                    <div className="w-72 p-6 border rounded-lg shadow">
                        <a href="#">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-golden">PR Eligibility Assessment</h5>
                        </a>
                        <p className="mb-3 font-normal text-white">Find Out If You Are Eligible To Apply For Canadian Immigration</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-golden focus:ring-4 focus:outline-none rounded-full">
                            Read more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Banner