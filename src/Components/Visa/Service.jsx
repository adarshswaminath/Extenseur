import React from 'react'
import student from "../images/student.jpg"
import tourist from "../images/traveller.jpg"
import citizenship from "../images/citizenship.jpg"

function ServiceCard({ heading, content,image }) {
    return (
        <div className='mt-3'>

            <a href="#" class="flex flex-col border border-gray-400 p-3 items-center rounded-lg md:flex-row md:max-w-xl">
                <img class="object-cover w-full rounded-t-lg h-56 rounded-none md:rounded-l-lg" src={image} alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 font-normal tracking-tight text-gray-900">{heading}</h5>
                    <p class="mb-3 font-normal text-gray-700">{content}</p>
                </div>
            </a>

        </div>
    )
}


function Service() {
    return (
        <div className='p-4 md:p-8 lg:p-12 xl:p-16 bg-[#F9FAFB]'>
            <h1 className="heading text-3xl">
                Visa & Immigration <span className='text-golden'>Service</span>
            </h1>
            <p className='font-thin'>
                Allquam pulvinr vestibulum blandit.Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus.<br />
                Pellentesque vulputate quam a quam volupat, sed ullamcorper erat commodo. Vestibulum sit amet ipsum vitae.
            </p>
            {/* cards */}
            <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-2">
                <div className="flex flex-col gap-3">
                    <ServiceCard heading="Skilled Worker Visa" content="A skilled Worker visa allows you to come to or stay in the UK to do an eligible job with an approved employer" image="https://flowbite.com/docs/images/blog/image-4.jpg"/>
                    <ServiceCard heading="Student Visa" content="Aliquam pulvinar vestibulum bandit.Donec sed nist libero.Fusce diginissim luctus sem eu dapibus.Soro Pellentesque vulputate quam" image={student}/>
                </div>
                <div className="flex flex-col gap-3">
                    <ServiceCard heading="Skilled Worker Visa" content="A skilled Worker visa allows you to come to or stay in the UK to do an eligible job with an approved employer" image="https://flowbite.com/docs/images/blog/image-4.jpg"/>
                    <ServiceCard heading="Student Visa" content="Aliquam pulvinar vestibulum bandit.Donec sed nist libero.Fusce diginissim luctus sem eu dapibus.Soro Pellentesque vulputate quam" image={student}/>
                </div>
                <div className="flex flex-col gap-3">
                    <ServiceCard heading="Tourist & Visitor Visa" content="Aliquam pulvinar vestibulum bandit.Donec sed nist libero.Fusce diginissim luctus sem eu dapibus.Soro Pellentesque vulputate quam" image={tourist}/>
                    <ServiceCard heading="Citizenship" content="Aliquam pulvinar vestibulum bandit.Donec sed nist libero.Fusce diginissim luctus sem eu dapibus.Soro Pellentesque vulputate quam" image={citizenship}/>
                </div>
                <div className="flex flex-col gap-3">
                    <ServiceCard heading="Tourist & Visitor Visa" content="Aliquam pulvinar vestibulum bandit.Donec sed nist libero.Fusce diginissim luctus sem eu dapibus.Soro Pellentesque vulputate quam" image={tourist}/>
                    <ServiceCard heading="Citizenship" content="Aliquam pulvinar vestibulum bandit.Donec sed nist libero.Fusce diginissim luctus sem eu dapibus.Soro Pellentesque vulputate quam" image={citizenship}/>
                </div>
            </div>
        </div>
    )
}

export default Service