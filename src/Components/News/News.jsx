import React from "react";
import image from "../images/court.jpg";
import banner from "../images/group.jpg";



const Card = ({ title, content }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl w-full lg:w-1/2">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-golden text-white rounded-full border-none hover:text-golden hover:bg-white">
            Listen
          </button>
        </div>
      </div>
    </div>
  );
};

const News = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12 xl:p-16">
      <div className="hero h-96 " style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">News & Updates</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-golden hover:bg-white hover:text-golden rounded-full ">Get Started</button>
          </div>
        </div>
      </div>
      {/* card */}
      <div className="grid lg:flex gap-4 mt-6">
        <Card
          title="News about #1"
          content="Eu aliqua reprehenderit officia aliquip duis pariatur nulla sunt aliquip."
        />
        {/* ---------------------------- */}
        <Card
          title="News about #2"
          content="Eu aliqua reprehenderit officia aliquip duis pariatur nulla sunt aliquip."
        />
      </div>
      <div className="grid lg:flex gap-4 mt-6">
        <Card
          title="News about #3"
          content="Eu aliqua reprehenderit officia aliquip duis pariatur nulla sunt aliquip."
        />
        {/* ---------------------------- */}
        <Card
          title="News about #4"
          content="Eu aliqua reprehenderit officia aliquip duis pariatur nulla sunt aliquip."
        />
      </div>
    </div>
  );
};

export default News;
