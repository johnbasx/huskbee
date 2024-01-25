import React, { useRef } from 'react';

import { TbArrowRight } from 'react-icons/tb';
import { motion } from 'framer-motion';

const TrustAndSafetySection = () => {
  return (
    <section className='flex items-center justify-center bg-blue-700 px-6 pb-28 pt-6'>
      <motion.div className='mx-auto flex max-w-screen-2xl flex-col gap-10 text-white'>
        <div className='flex items-center gap-2 text-lg font-bold md:text-2xl'>
          {/* <TbDiscountCheckFilled /> */}
          <p>Trust & Safety</p>
        </div>
        <div>
          <h3 className='text-2xl font-bold md:text-4xl'>We have your back.</h3>
          <p className='mt-4 max-w-screen-lg text-2xl md:text-4xl'>
            With a team dedicated to trust and safety, we’ve successfully
            managed fundraisers for different kinds of needs and requirements of
            people. Don’t worry about a thing, we’ve got you covered.
          </p>
        </div>
        <div>
          <button
            type='button'
            className='flex items-center justify-start gap-2 rounded-full bg-transparent py-2 text-sm font-semibold text-black duration-200 hover:bg-blue-50 hover:px-4'
          >
            Explore Trust & Safety <TbArrowRight />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default TrustAndSafetySection;
