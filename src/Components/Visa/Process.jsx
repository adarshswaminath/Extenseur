import React from 'react';

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
    </div>
  );
};

function Process() {
  return (
    <div className='bg-background'>
      <VisaTrack />
    </div>
  );
}

export default Process;
