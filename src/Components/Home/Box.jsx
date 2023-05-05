import React from 'react'

function Box() {
    return (
        <div className=''>
            <div className="grid lg:flex ">
                {/* white box starts */}
                <div className="w-full bg-white lg:w-1/2 p-4">
                    <div className="mt-2 left-0">
                        <h2 className="text-3xl text-center">Get Free Consultation</h2>
                        <p class="mt-4 text-gray-700 ">
                            Get in touch with us for all your studies, employment, visa &amp; immigration requirements. We are happy to assist you.
                        </p>

                        <form>
                            <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div className="flex flex-col">

                                    <input
                                        className="py-2 px-3 border border-gray-300 rounded-md mb-2"
                                        type="text"
                                        id="first_name"
                                        name="first_name"
                                        placeholder="First name"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <input
                                        className="py-2 px-3 border border-gray-300 rounded-md mb-2"
                                        type="text"
                                        id="last_name"
                                        name="last_name"
                                        placeholder="Last name"
                                        required
                                    />
                                </div>


                                <input
                                    className="py-2 px-3 border border-gray-300 rounded-md mb-2"
                                    type="email"
                                    id="address"
                                    name="address"
                                    placeholder="Email address"
                                    required
                                />

                                <input
                                    className="py-2 px-3 border border-gray-300 rounded-md mb-2"
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone number"
                                    required
                                />

                                <div className="col-span-2">

                                    <textarea
                                        className="py-2 px-3 border border-gray-300 rounded-md mb-2 w-full"
                                        id="message"
                                        name="message"
                                        placeholder="How can we help you?"
                                        rows="4"
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            <button
                                className="bg-golden text-white font-bold py-2 px-4 rounded-full mt-4"
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                {/* white box ends */}
                {/* golden box starts */}
                <div className="w-full bg-golden lg:w-1/2 text-center justify-center">
                    <div className="mt-2">
                        <h1 className="text-2xl">Quick Contact</h1>
                        <p className="mt-4 text-gray-700">
                            We are so pleased to speak to you about your qualification study options, career plans,
                            potential immigration options and answer any of your questions or concerns you may have.
                        </p>
                       <div className="p-4">
                        
                       <div className="flex w-full">
                            <div className="grid h-20 flex-grow card bg-golden rounded-box place-items-center shadow-lg">+91&nbsp;6282888688</div>
                            <div className="divider divider-horizontal">OR</div>
                            <div className="grid h-20 flex-grow card bg-golden rounded-box place-items-center shadow-lg">(+44)&nbsp;744&nbsp;373&nbsp;9993</div>
                        </div>
                    
                       </div>
                    </div>
                </div>

                {/* golden box ends */}

            </div>
        </div>
    )
}

export default Box