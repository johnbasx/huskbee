import React from "react";

const stats = [
  {
    data: "80K+",
    desc: "More than 80 thousand people are displaced.",
  },
  {
    data: "10K+",
    desc: "More than 10000 Houses burnt & turned to ashes.",
  },
  {
    data: "70+",
    desc: "A lot of people having shortage of medical supplies daily.",
  },
  {
    data: "3M+",
    desc: "In need of funds for food, medical treatment, education.",
  },
];

const DisplacedStats = () => {
  return (
    <section className='py-40 bg-gradient-to-b from-black to-black via-slate-900'>
      <div className='relative z-10 max-w-screen-xl mx-auto px-4 md:px-8'>
        <div className='max-w-2xl xl:mx-auto xl:text-center'>
          <h3 className='text-white text-3xl font-semibold sm:text-4xl'>
            You can help all these people everyday
          </h3>
          <p className='mt-3 text-gray-300'>
            There is nothing more beautiful than someone who goes out of their
            way to make life beautiful for others.
          </p>
        </div>
        <div className='mt-12'>
          <ul className='flex-wrap gap-x-12 gap-y-10 items-center space-y-8 sm:space-y-0 sm:flex xl:justify-center'>
            {stats.map((item, idx) => (
              <li key={idx} className='sm:max-w-[15rem]'>
                <h4 className='text-4xl font-sans text-white font-semibold'>
                  {item.data}
                </h4>
                <p className='mt-3 text-gray-400 font-medium'>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DisplacedStats;
