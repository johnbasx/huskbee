import React from 'react';

const stats = [
  {
    data: '80K+',
    desc: 'More than 80 thousand people are displaced.',
  },
  {
    data: '10K+',
    desc: 'More than 10000 Houses burnt & turned to ashes.',
  },
  {
    data: '70+',
    desc: 'A lot of people having shortage of medical supplies daily.',
  },
  {
    data: '3M+',
    desc: 'In need of funds for food, medical treatment, education.',
  },
];

const DisplacedStats = () => {
  return (
    <section className='bg-gradient-to-b from-black via-neutral-900 to-black py-40'>
      <div className='relative z-10 mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='max-w-2xl xl:mx-auto xl:text-center'>
          <h3 className='text-3xl font-semibold text-white sm:text-4xl'>
            You can help all these people everyday
          </h3>
          <p className='mt-3 text-neutral-300'>
            There is nothing more beautiful than someone who goes out of their
            way to make life beautiful for others.
          </p>
        </div>
        <div className='mt-12'>
          <ul className='flex-wrap items-center gap-x-12 gap-y-10 space-y-8 sm:flex sm:space-y-0 xl:justify-center'>
            {stats.map((item, idx) => (
              <li key={`stats-data-${idx}`} className='sm:max-w-[15rem]'>
                <h4 className='text-4xl font-semibold text-white'>
                  {item.data}
                </h4>
                <p className='mt-3 font-medium text-neutral-400'>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DisplacedStats;
