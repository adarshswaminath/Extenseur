import React from 'react';
import image from "../images/court.jpg"
import { TiTick } from 'react-icons/ti'


const VisaTrack = () => {
  return (
    <div className='px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-16 xl:py-20'>
      <h1 className='text-2xl font-semibold mb-6'>How to track your visa application (Applicants in India?)</h1>
      <div className='flex flex-col lg:flex-row lg:gap-8'>
        <div className='w-full lg:w-1/2'>
          <p className='mb-6'>
            Go to <a href='https://www.bluedart.com/' className='text-golden hover:underline'>BlueDart</a> website and head over to the TrackDart section. Select the Ref No. option and enter your visa application number starting with GWF and press the "GO" button to track your application.
          </p>
          <p className='mb-6'>
            <span className='font-bold'>Note:</span> The result will show only if your processed application is dispatched to your chosen delivery address.
          </p>
          <ul className='list-disc list-inside mb-6'>
            <li>
              You can contact UK visa and immigration from inside or outside the UK. <a href='' className='text-golden hover:underline'>Click here</a>
            </li>
            <li className='mt-2'>
              Contact center staff cannot give you advice about your personal circumstances.
            </li>
          </ul>
        </div>
        <div className='w-full lg:w-1/2'>
          <iframe
            src='https://www.youtube.com/embed/dJXCE6J1Tzo'
            title='YouTube video player'
            width='100%'
            height='315'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='w-full'
          ></iframe>
        </div>
      </div>

      <div className="mt-6">
      <h1 className='text-2xl text-golden font-semibold mb-6'>How can I know that i have been approved for a Uk visa ?</h1>
      <p className="mt-6 ">
        You have to wait until you receive the decision of your processed visa application.
        You can collect your visa from the choosen delivery address you give at the time of submitting your visa application at the submission location   
      </p>
      <li className='mt-3 ml-2'>If your application is approved, you will receive a letter from the home office together with your passport or travel document with a visa stamp affixed.   </li>
      <li className='ml-2'>If your application rejected, you will receive a letter explaining the reasons for the rejection. </li>
      </div>
    </div>
  );
};

function Process() {
  return (
    <div className='bg-background'>
     <div className="grid lg:flex gap-10 px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-16 xl:py-20">
  <div className="grid w-full lg:w-1/2">
    <h1 className="text-2xl font-semibold mb-6">UK visa application process</h1>
    <div className="mt-4">
      <ul>
        <li className='flex'>
          <TiTick className='text-golden text-2xl'/>
          Check if you need a visa to the UK
        </li>
        <li className='flex'>
          <TiTick className='text-golden text-2xl'/>
          Find out the correct visa application category or sub-category
        </li>
        <li className='flex'>
          <TiTick className='text-golden text-2xl'/>
          Visa application creation and completion
        </li>
        <li className='flex'>
          <TiTick className='text-golden text-2xl'/>
          Find a visa application center in your country to book an appointment
        </li>
        <li className='flex'>
          <TiTick className='text-golden text-2xl'/>
          Visa application payment
        </li>
        <li className='flex'>
          <TiTick className='text-golden text-2xl'/>
          Check supporting documents to submit with the visa application
        </li>
        <li className='flex'>
          <TiTick className='text-golden text-2xl'/>
          Visa application submission
        </li>
        <li className='flex'>
          <TiTick className='text-golden text-2xl'/>
          Collection of passport or travel document
        </li>
      </ul>
    </div>
    {/* image */}
    <img src={image} alt="" className="mt-3 w-full rounded" />
  </div>
  {/* second part */}
  <div className="grid w-full lg:w-1/2">
    <h1 className="text-2xl font-semibold mb-3">Other Services & Assistance</h1>
    <div className="gap-3">
    
        <li>Manage your application (Visa processing times, application & document check, online payment assistance, form filling assistance, biometric information, premium services, report a change)</li>
        <li className='mt-4'>Personal Assistance (provide personal & dedicated caseworker specialized in UK visa & Immigration)</li>
        <li className='mt-4'>Sponsor workers or students (Licences and certificates of sponsorship for employees and universities and colleges)</li>
      
    </div>
    <h1 className="text-2xl font-semibold mt-4 mb-3">Visa decison waiting times</h1>
    {/* first */}
    <li className='text-golden font-semibold'>Standard service application:</li>
    <p>You should get a decision on your visa application with in 3 weeks of attending your appointment at the visa application center. Usuaaly, the decison  will come within 15 working days(Saturday,Sunday holiday) </p>
    {/* second */}
    <li className='text-golden font-semibold'>Priority service application:</li>
    <p>If the service is available inn the country you're applying from you can choose the priority service when you apply.There us an additional cost for this service.Under this service, a visa application decision will be made within 5 working days of your appointment at the visa application center</p>
    <p>Check with your visa application center to see if the priority visa service is available in the countr you're applying from.In most countries the priority visa service is available</p>
    {/* third */}
    <li className="text-golden font-semibold">Super priority service application:</li>
    <p>If the service is available in the country you're applying from you can choose the super-priority visa application service when you apply.There is an additional cost for this service.</p>
    <p>UK visas and immigration and contact you to let you know that your passport is ready to be collected within 24 hours from when you submit your biometric information.</p>
    <p>Check with your visa application center to see if the super-priority visa service is available in the county you're applying from.</p>
  </div>
</div>

      <VisaTrack />
    </div>
  );
}

export default Process;
