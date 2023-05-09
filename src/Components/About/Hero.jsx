import React from 'react';
import Image from '../images/bussiness1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <div>
      <div className="py-12">
        <p className="mb-6 text-lg p-3 md:p-6 lg:p-8 leading-relaxed md:leading-normal lg:leading-normal md:h-32 lg:h-40 overflow-hidden">
          Extensure HR, one of the emerging "full HR administration regulatory support firms" specializes in supporting UK healthcare recruitment companies with complete human resources solutions and outsourcing services. Extensure HR is keen to provide assistance to our partner companies by sharing business risks and Human resources. We possess a team of dedicated client relationship managers and business development managers who specialize in each process, function, and client industry. A working partnership with our international clients truly accelerates solutions that work seamlessly by sharing technologies and human resources that help you uncover risks and find new opportunities to make your business more successful.
        </p>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <img src={Image} alt="About us" className="w-full h-64 lg:h-auto border-8 border-tealblue object-cover" />
          </div>
          <div className="flex-1 lg:mb-0">
            <p className="mt-4 text-lg leading-relaxed text-golden">
              We specialize in recruiting international healthcare professionals to both NHS and private care homes across the United Kingdom. Our systematic approach to the professional registration process enables us to fulfill our candidate's expectations within a limited time frame. Our team of expert recruiters guides you throughout all stages of the process till final admission onto the professional and employment.
              We take pride in running a firm that is ethically and socially responsible.
              Our services range from recruiting qualified nurse & Midwives, Allied healthcare professionals, Nursing associates, and other healthcare professionals from overseas and the UK tailored HR/recruitment assistance to healthcare groups, assistance with the UK visa process, and expert UK immigration advice.
              As consultants, our winning qualities are professionalism, expert knowledge, time management, real results, promptness, and guaranteed client satisfaction. We assist with admission for Undergraduate, Postgraduate, and Postgraduate research program in UK universities.
            </p>
          </div>
        </div>

        {/* <p className="text-lg p-3 md:p-6 lg:p-8 leading-relaxed md:leading-normal lg:leading-normal md:h-32 lg:h-40 overflow-hidden">
    Our services range from recruiting qualified nurse & Midwives, Allied healthcare professionals, Nursing associates, and other healthcare professionals from overseas and the UK tailored HR/recruitment assistance to healthcare groups, assistance with the UK visa process, and expert UK immigration advice.
    As consultants, our winning qualities are professionalism, expert knowledge, time management, real results, promptness, and guaranteed client satisfaction. We assist with admission for Undergraduate, Postgraduate, and Postgraduate research program in UK universities.
  </p> */}
      </div>

    </div>
  );
}

export default Hero;
