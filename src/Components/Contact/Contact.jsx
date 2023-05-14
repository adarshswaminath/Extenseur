import React from "react";
import Footer from "../Home/Footer";

function Contact() {
  return (
    <div>
      <div className="grid lg:flex">
        <div className="w-full lg:w-1/2 bg-background h-min-screen p-4 md:p-8 lg:p-12 xl:p-16">
          <div className="text-center">
            <h4 className="text-3xl">Heading</h4>
            <p className="mt-3 mb-3">
              Ex aute aliqua ea deserunt laboris commodo enim deserunt aliqua
              dolore consequat reprehenderit.
            </p>
          </div>
          <form action="#" className="grid gap-4 m-auto">
            <div className="grid lg:flex gap-5">
              <input
                type="text"
                name="firstName"
                className="rounded text-center"
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastName"
                className="rounded text-center"
                placeholder="Last Name"
              />
            </div>
            <input
              type="email"
              name="email"
              className="rounded text-center"
              placeholder="Email"
            />
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              className="rounded text-center"
              placeholder="Description"
            ></textarea>
            <button className="btn bg-golden border-none text-white hover:text-golden hover:bg-white w-96 m-auto rounded-full">Submit</button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 bg-blue-500 h-min-screen">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            // style="border: 0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158.08927057927058!2d-0.11809236418380122!3d51.50986587070846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1621008000000!5m2!1sen!2sus"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="grid lg:flex">
        <div className="w-full lg:w-1/2 bg-blue-500 h-min-screen">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            // style="border: 0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158.08927057927058!2d-0.11809236418380122!3d51.50986587070846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1621008000000!5m2!1sen!2sus"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full lg:w-1/2 h-96 bg-golden text-white h-min-screen p-4 md:p-8 lg:p-12 xl:p-16 flex justify-center items-center">
          <div className="text-center">
            <h4 className="text-3xl">Heading</h4>
            <p className="mt-3">
              Reprehenderit cupidatat magna tempor deserunt et elit excepteur
              ipsum consequat aute non anim duis ad.
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Contact;
