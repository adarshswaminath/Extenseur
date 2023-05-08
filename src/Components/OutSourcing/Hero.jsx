import React from 'react';
import image from "../images/meeting.jpg";

function Hero() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mt-3">
        <p className="p-3 text-lg lg:text-xl">
          E<span className="text-golden">x</span>tenseur HR is one of the emerging human resource solutions and recruitment process outsourcing (RPO) service providers in India. Extenseur HR empowers results for our clients through innovative and effective risk and human resources management solutions, leveraging global technical expertise and international human resources.
        </p>
      </div>
      {/* image with text */}
      <div className="grid lg:flex w-full p-3 justify-between gap-3">
        <div className="w-full lg:w-1/2">
          <p className="text-golden text-lg h-full flex items-center p-4">
            Exetenseur HR office in the UK is a full-service provider offering a wide range of human resource solutions to our clients. Our services include healthcare recruitment, administration, HR compliance, ad-hoc, voice, database management, business development, customer relations, and even website development. Our aim is to empower our clients with a smarter workforce, while reducing operation costs, risk, and complexity to achieve strategic business advantages. We work tirelessly to fulfill our clients' human resource requirements by analyzing, shortlisting, screening, interviewing, documenting, referencing, and making final selections. Our global technical expertise and international human resources enable us to provide innovative and effective risk and human resources management solutions to our clients.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center p-4">
          <img src={image} alt="image not found" className="h-full object-cover" />
        </div>
      </div>
      {/* text */}
      <div className="mt-3">
        <p className="p-3 text-lg lg:text-xl">
          We deliver a range of possible solutions, from recruitment process outsourcing (RPO) and consulting services to specific recruitment projects for clients. Extenseur HR delivers world-class business solutions to companies of all sizes. We can manage all recruitment activities, including sourcing, interviewing, hiring, and onboarding processes.
        </p>
      </div>
    </div>
  );
}

export default Hero;
