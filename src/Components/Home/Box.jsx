import React from 'react';

function Box() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* white box starts */}
        <div className="p-8 bg-white">
          <h1 className="text-center spcl-font text-4xl tracking-tight leading-none mb-6">
            Get Free Consultation
          </h1>
          <p className="text-gray-500 mb-6">
            Get in touch with us for all your studies, employment, visa & Immigration requirements.
            We are happy to assist you.
          </p>
          <form>
            <div className="grid grid-cols-1 gap-4">
              <div className="grid lg:flex gap-2">
                <input
                  type="text"
                  id="firstName"
                  className="w-full lg:w-1/2 px-4 py-3 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="First name"
                />
                <input
                  type="text"
                  id="lastName"
                  className="w-full lg:w-1/2 px-4 py-2 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Last name"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-md border-gray-300 focus:border-golden focus:ring-golden"
                  placeholder="Phone number"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  className="w-full px-4 py-3 rounded-md border-gray-300 focus:border-golden focus:ring-golden"
                  placeholder="How can we help you ?"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 bg-golden text-white font-bold py-2 px-4 rounded-full hover:bg-white hover:text-golden border-2 hover:border-golden focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
        {/* white box ends */}
        {/* golden box starts */}
        <div className="p-8 bg-golden">
          <div className="quick-contact">
            <h1 className="text-4xl mb-8 text-center">Quick Contact</h1>
            <p className="text-gray-600 mb-8">
              We are delighted to assist you with your qualifications, study options, career plans,
              potential immigration opportunities, and address any questions or concerns you may have.
            </p>
            <div className="grid gap-4">
              <div className="flex justify-between">
                <h4 className="font-bold">Phone</h4>
                <a href="tel:+916282888688">+91 6282888688</a>
              </div>
              <div className="flex justify-between">
                <h4 className="font-bold">Email</h4>
                <a href="mailto:info@extenseur.co.in                ">info@extenseur.co.in</a>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="flex justify-between">
                <h4 className="font-bold">Inquire With Us</h4>
                <a href="mailto:info@extenseur.co.in">info@extenseur.co.in</a>
              </div>
              <div className="flex justify-between">
                <h4 className="font-bold">For University Admission</h4>
                <a href="mailto:studies@extenseur.co.in">studies@extenseur.co.in</a>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="flex justify-between">
                <h4 className="font-bold">Visa & Immigration Inquiry</h4>
                <a href="mailto:immigration@extenseur.co.in">immigration@extenseur.co.in</a>
              </div>
              <div className="flex justify-between">
                <h4 className="font-bold">Healthcare Placement</h4>
                <a href="mailto:placement@extenseur.co.in">placement@extenseur.co.in</a>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-bold">Head Office</h4>
              <p>
                Extenseur HR Ltd, Aberdeen ABI 6 6XS, United Kingdom<br />
                <a href="#" className="text-blue-500">View Our All Office & Location</a>
              </p>
            </div>
          </div>
        </div>
        {/* golden box ends */}
      </div>
    </div>
  );
}

export default Box;
