import { BsFillArrowRightCircleFill } from "react-icons/bs"
import React from 'react'

const Card = ({heading,content}) => {
  return (
    <div>
      <div class="w-64 bg-tealblue border border-gray-200 rounded-lg shadow">
            <a href="#" class="block p-6">
              <h5 class="inline-flex items-center text-2xl font-medium text-golden">
                <BsFillArrowRightCircleFill class="h-8 w-8 mr-2" />
                {heading}
              </h5>
              <p class="mt-4 text-white">
                {content}
              </p>
            </a>
          </div>
    </div>
  )
}

function Service() {
  return (
    <div className='w-full bg-tealblue mb-4'>
      <div className="p-4">
        <h2 className="text-center text-white heading-1 text-2xl font-serif font-semibold">
          Service that we are
          <span className='text-golden'> super proud of</span>
        </h2>
        {/* cards */}
        <div className="grid lg:flex mt-3 gap-3">
          {/* card-1  */}
         <Card heading="Administration" content="We provide all kinds of admin works on writing,suuply management,verbale communication,process improvement,organization multi-tasking,problem solving presenting and analyzing technical information,decision making,information and others within our partner company effectively by providing structure to other employess throughout the organization.We guarantee high statndard office administration by providing specialized training in order to maintain a high rate of efficiency and productivity"
          />
          {/* card 2 */}
          <Card heading="HR Compliance" content="You have got lots of paper work by various compilance levels wait,Let us assist you.We will come alongside to support your efforts on completing the compilance task one by one within the time-bond.We will roll up our sleeves and help your targets Achieving and maintaining compilance can be one of the elusive tasks for an organization.Recognizing the challenges anf develop an effective HR compilance strategy is important to meet bussiness goals"
          />
          {/* card 3 */}
          <Card heading="Ad-Hoc" content="Every administration and office works have at least a ton of ad-hoc works.We will not just leave you to the demand of doing even tiny taks that need to be property checked this will allow you to do not miss the big picture for a little mistake.Smaller tasks take more time,however the greated savings will occur when larger assignement come"/>
        </div>
      </div>
    </div>
  )
}

export default Service