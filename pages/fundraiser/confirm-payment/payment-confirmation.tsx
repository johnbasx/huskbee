import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TbArrowRight } from 'react-icons/tb';

const PaymentConfirmationPage = () => {
  return (
    <div className='mx-auto flex max-w-md flex-col justify-start px-6 lg:px-8'>
      <div className='mt-24 lg:mt-32'>
        <div className='mx-auto flex items-center justify-center rounded-full'>
          <Image
            src={'/animations/checkmark.gif'}
            priority
            alt='animated-checkmark'
            height={200}
            width={200}
            className='h-24 w-24 object-contain'
          />
        </div>
        <div className='mt-3 text-center sm:mt-5'>
          <h3 className='text-3xl font-semibold leading-tight text-gray-900'>
            Thank you for your contribution!
          </h3>
          <div className=''>
            <p className='py-4 text-gray-500'>
              We have received your contribution. This will help the fundraiser
              a lot. You will get an email confirmation at{' '}
              <span className='font-medium text-gray-700'>
                test.mail@gmail.com
              </span>
            </p>

            {/* Contribution details here */}
            <table className='mx-auto table-auto text-left'>
              <tbody>
                <tr>
                  <td className='py-1 pr-2 text-right'>Contribution Number:</td>
                  <td className='py-1 pl-2 font-medium'>#3441689256</td>
                </tr>
                <tr>
                  <td className='py-1 pr-2 text-right'>Contribution Date:</td>
                  <td className='py-1 pl-2 font-medium'>3/2/2024</td>
                </tr>
                <tr>
                  <td className='py-1 pr-2 text-right'>Contribution Amount:</td>
                  <td className='py-1 pl-2 font-medium'>₹ 2000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='mx-auto mt-5 flex flex-col sm:mt-6'>
        <Link
          href='/fundraiser/browse-fundraisers'
          className='inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-blue-100 duration-200 ease-out hover:bg-blue-500'
          // onClick={() => setOpen(false)}
        >
          See more fundraisers
          <TbArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default PaymentConfirmationPage;
