import React from 'react'
import { TiTick } from 'react-icons/ti'

function Graph() {
  return (
    <div className='bg-white'>
      <div className='p-4 md:p-8 lg:p-12 xl:p-16'>
        <div className='hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start'>
          <img
            src='https://chartio.com/assets/0353e4/tutorials/charts/pie-charts/a40a8ad691f97ab4ad233f19133555c4ee11778f6efdce5a48d8a31e8e8dd40a/pie-chart-example-2.png'
            className='max-w-md w-full h-80 rounded-lg md:mr-8 lg:mr-16'
            alt='Pie chart example'
          />
          <div className='text-center lg:text-left'>
            <h2 className='font-semibold text-xl lg:text-3xl'>
              Why<span className='text-golden'> Outsourcing?</span>
            </h2>
            <p className='py-6 lg:py-8 xl:py-12 max-w-3xl'>
              Concentrate on your core business; as an outsourcing partner, we
              will act as an alternative for you to assist with your HR process
              in a cost-effective way. We can cover your complete or partial HR
              process as per your requirement. HR outsourcing reduces the fixed
              cost involved in managing human resources. We have the
              infrastructure and talents already in place to take care of your
              complex process. Small and medium businesses are more likely to
              outsource their HR functions to concentrate more on the core
              businesses.
            </p>
            <div>
              <h2 className='font-semibold text-xl lg:text-3xl'>
                Main<span className='text-golden'> Reasons</span> Outsourcing
              </h2>
              <ul className='py-6 lg:py-8 xl:py-12 max-w-3xl'>
                <li className='flex items-center'>
                  <TiTick className='text-xl text-golden' />
                  <span className='ml-2'>Cost Saving</span>
                </li>
                <li className='flex items-center'>
                  <TiTick className='text-xl text-golden' />
                  <span className='ml-2'>Improved Focus</span>
                </li>
                <li className='flex items-center'>
                  <TiTick className='text-xl text-golden' />
                  <span className='ml-2'>Access to Diversified</span>
                </li>
                <li className='flex items-center'>
                  <TiTick className='text-xl text-golden' />
                  <span className='ml-2'>Increase Revenue</span>
                </li>
                <li className='flex items-center'>
                  <TiTick className='text-xl text-golden' />
                  <span className='ml-2'>Improved Quality</span>
                </li>
                <li className='flex items-center'>
                  <TiTick className='text-xl text-golden' />
                  <span className='ml-2'>Great Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Graph
