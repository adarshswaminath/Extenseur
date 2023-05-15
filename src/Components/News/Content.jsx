import React from "react";
import image from "../images/court.jpg";
import banner from "../images/group.jpg";

const Card = React.memo(({ title, content }) => {
  return (
    <div className="card  bg-base-100 shadow-xl w-full p-4">
      <figure>
        <img src={image} alt="Album" />
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
});

const Content = () => {
  const cards = [
    {
      id: 1,
      title: "News about #1",
      content:
        "Eu aliqua reprehenderit officia aliquip duis pariatur nulla sunt aliquip.",
    },
    {
      id: 2,
      title: "News about #2",
      content:
        "Eu aliqua reprehenderit officia aliquip duis pariatur nulla sunt aliquip.",
    },
    {
      id: 3,
      title: "News about #3",
      content:
        "Eu aliqua reprehenderit officia aliquip duis pariatur nulla sunt aliquip.",
    },
    {
      id: 4,
      title: "News about #4",
      content:
        "Eu aliqua reprehenderit officia aliquip duis pariatur nulla sunt aliquip.",
    },
    {
      id: 5,
      title: "News about #4",
      content:
        "Eu aliqua reprehenderit officia aliquip duis pariatur nulla sunt aliquip.",
    },{
      id: 6,
      title: "News about #4",
      content:
        "Eu aliqua reprehenderit officia aliquip duis pariatur nulla sunt aliquip.",
    },
  ];

  return (
    <div className="p-4 md:p-8 lg:p-12 xl:p-16">
      <div
        className="hero h-64 md:h-80 lg:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl md:text-5xl lg:text-6xl font-bold">
              News & Updates
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-golden hover:bg-white hover:text-golden rounded-full ">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 px-4 md:px-8 lg:px-12 xl:px-16">
          {cards.map((card) => (
            <Card key={card.id} title={card.title} content={card.content} />
          ))}
        </div>
      </div>
      {/* card closed */}
    </div>
  );
};

export default Content;
