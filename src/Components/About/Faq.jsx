import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqs = [
    {
      question: 'Why Extenseur HR ?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?',
    },
    {
      question: 'How is Extenseur HR differ from similiar firms ?',
      answer: 'Answer 2',
    },
    {
        question: 'How do we transform nursing recruitment into a hassle-free process ?',
        answer: 'We guide aspiring nurse to achieve UK,NMC registered and find them an appropriate employer where they can kick-start thier UK nursing career.For NMC qualified nurse already in employment,we assist them in finding better employers offering timely and efficient recruitment service at a reasonable price.Extenseur HR offers UJK visa processing assistance to any NMC qualified nurse applying from abroad and switching within the United Kingdom.The UK migration adivice offered by us would pave the path toward a sucessful career and life in the UK',
      },
    {
      question: 'Our Mission and Vision',
      answer: 'Answer 3',
    },
    {
      question: 'What are your opening hours?',
      answer: 'Answer 4',
    },
  ];

  return (
    <div>
      <section className="">
        <div className="container w-full  mx-auto">

          <div className="">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-tealblue border-2 border-golden">
                <button className="flex items-center justify-between w-full p-4" onClick={() => handleClick(index)}>
                  <h1 className="font-semibold text-white">{faq.question}</h1>

                  <span className="text-golden bg-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {activeIndex === index && (
                  <>
                    <hr className="border-golden text-white"/>

                    <p className="p-8 text-sm text-white">{faq.answer}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;