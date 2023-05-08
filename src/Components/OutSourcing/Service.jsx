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
       {/* !section-1 */}
       <div className="grid lg:flex mt-3 gap-3 justify-center md:flex">
          {/* card-1  */}
         <Card heading="Administration" content="We provide all kinds of admin works on writing,suuply management,verbale communication,process improvement,organization multi-tasking,problem solving presenting and analyzing technical information,decision making,information and others within our partner company effectively by providing structure to other employess throughout the organization.We guarantee high statndard office administration by providing specialized training in order to maintain a high rate of efficiency and productivity"
          />
          {/* card 2 */}
          <Card heading="HR Compliance" content="You have got lots of paper work by various compilance levels wait,Let us assist you.We will come alongside to support your efforts on completing the compilance task one by one within the time-bond.We will roll up our sleeves and help your targets Achieving and maintaining compilance can be one of the elusive tasks for an organization.Recognizing the challenges anf develop an effective HR compilance strategy is important to meet bussiness goals"
          />
          {/* card 3 */}
          <Card heading="Ad-Hoc" content="Every administration and office works have at least a ton of ad-hoc works.We will not just leave you to the demand of doing even tiny taks that need to be property checked this will allow you to do not miss the big picture for a little mistake.Smaller tasks take more time,however the greated savings will occur when larger assignement come"/>
        </div>
        {/* section-2 */}
        <div className="grid lg:flex mt-3 gap-3 justify-center md:flex">
          {/* card -4 */}
          <Card heading="Database Management" content="A Strategic HR data management system allows us to define,create and update employee database for the company.Maintenance and updating of candidate's databases are considered to be a potential need that should ensure a high level of data management skill and standard.We are keeping a close eye on each activity of managing the data to avoid miss handling with a proper data management system in place."/>
          {/* card -5 */}
          <Card heading="Bussiness Development" content="Let our team of experts give you remote assistance to ensure your seamless support of developing and building your bussiness on a full suite.We have a backup of technology that can run through various options up to the edge of clustering new reltions which helps to increase revenue Our service team is accountable to each other working as a unit to provide your business with the best services to develop your bussiness.We already put a lot of time and effort to develop a structure and a system to bring your bussiness to the next level.We keep up with the latest bussiness trends necessary for a streamlined bussiness development effort because development effort because our team pays attention to these changes and bringing changes accordingly to your bussiness for great benefits"/>
          {/* grid card  */}
          <div className="grid gap-2">
            {/* card 6 */}
            <Card heading="Voice" content="To enhance your productivity and collabration while focusing on your core bussiness.We aim at contacting your clients candidate and bussiness providers,by voice to ensi=ure that we are fully supporting all range of options fo you.Our voice team with hands of experience with satisfying skills can save a lot of your time with the phones"/>
            {/* card 7 */}
            <Card heading="Customer Relation" content="To enhance your productivity and collaboration,while focusing on your core bussiness we aim at contacting your clients,candidates,and bussiness providers,by voice to ensure that we are fully supporting all range of options for you.Our voice team satisfying skills can save a lot of your time with the phones"/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Service