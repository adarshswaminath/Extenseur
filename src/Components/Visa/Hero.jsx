import React from 'react';
import image from "../images/bussiness1.jpg";

function Hero() {
  return (
    <div className='p-4 md:p-8 lg:p-12 xl:p-16'>
      <div className='grid lg:flex lg:gap-6'>
        {/* first section */}
        <div className='grid lg:w-1/2'>
          <h3 className='mt-3 text-3xl'>What we offer</h3>
          <p className='text-gray-600'>
            Extenseur HR, assist you with all types of UK visa - to visit, study, or join a family member or partner in the UK. Our team of expert overseas visa consultants will guide you throughout the complex process such as determining the correct visa type, online visa application, booking an appointment with the visa application center, visa application fee payment, selecting required visa application services, assistance to visit the visa application center, visa application tracking, and visa and document pick up.
          </p>
          {/* second paragraph */}
          <p className='mt-6 text-gray-600'>
            The most crucial part of your visa application process is to identify the correct visa type and the documents required as part of your application. Each visa category required different sets of documents. UK visa application is based on a point-based system, and the decision always depends upon the individual benefits of each application. We are processing each visa application as per UK Immigration guidelines and final rounds of review together with applicants to make sure the process straightforward. Our inquiry service helps you provide the best service to customers. Customers will receive a response much quicker at a competitive rate.
          </p>
        </div>
        {/* second grid */}
        <div className='grid lg:w-1/2 lg:grid-cols-3 xl:grid-cols-2 xl:gap-8'>
          <img src={image} className='w-full mt-3 h-52 md:h-auto rounded-lg' alt='Image' />
          <img src={image} className='w-full mt-3 h-52 md:h-auto rounded-lg' alt='Image' />
          <img src={image} className='w-full mt-3 h-52 md:h-auto rounded-lg' alt='Image' />
          <img src={image} className='w-full mt-3 h-52 md:h-auto rounded-lg' alt='Image' />
          <img src={image} className='w-full mt-3 h-52 md:h-auto rounded-lg' alt='Image' />
          <img src={image} className='w-full mt-3 h-52 md:h-auto rounded-lg' alt='Image' />
        </div>
      </div>
    </div>
  );
}

export default Hero;
