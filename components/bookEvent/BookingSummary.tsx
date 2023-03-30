import Link from "next/link";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const BookingSummary = ({
  subtotal,
  gst,
  orderTotal,
}: {
  subtotal: number;
  gst: number;
  orderTotal: number;
}) => {
  return (
    <>
      <section
        aria-labelledby="summary-heading"
        className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
      >
        <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
          Order summary
        </h2>

        <dl className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <dt className="text-sm text-gray-600">Subtotal</dt>
            <dd className="text-sm font-medium text-gray-900">₹{subtotal}</dd>
          </div>
          {/* <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt className="flex items-center text-sm text-gray-600">
              <span>Shipping estimate</span>
              <a
                href="#"
                className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">
                  Learn more about how shipping is calculated
                </span>
                <QuestionMarkCircleIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </a>
            </dt>
            <dd className="text-sm font-medium text-gray-900">$5.00</dd>
          </div> */}
          <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt className="flex text-sm text-gray-600">
              <span>GST</span>
              <a
                href="#"
                className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">
                  Learn more about how tax is calculated
                </span>
                <QuestionMarkCircleIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </a>
            </dt>
            <dd className="text-sm font-medium text-gray-900">₹{gst}</dd>
          </div>
          <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt className="text-base font-medium text-gray-900">Order total</dt>
            <dd className="text-base font-medium text-gray-900">
              ₹{orderTotal}
            </dd>
          </div>
        </dl>

        <div className="mt-6">
          <button
            type="button"
            disabled={orderTotal === 0 ? true : false}
            className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
          >
            Pay now
          </button>
        </div>
      </section>
      {/* <div className="relative">
    //   <div className="w-full px-4 py-4 border shadow-md rounded-lg">
    //     <div className=" mt-4 flow-root">
    //       <h3 className="text-lg leading-6 font-medium">
    //         Booking summary for Rock carnival ShiRock
    //       </h3>

    //       <div className="mt-6 space-y-4 px-2 border-b-2 py-2">
    //         <div className="flex justify-between text-base font-medium ">
    //           <h3 className="text-gray-300">Ticket price</h3>
    //           <p className="text-gray-300">₹ 570</p>
    //         </div>
    //         <div className="flex justify-between text-base font-medium ">
    //           <h3 className="text-gray-300">Number of tickets</h3>
    //           <p className="text-gray-300">₹ 40</p>
    //         </div>
    //         <div className="flex justify-between text-base font-medium ">
    //           <h3 className="text-gray-300">GST</h3>
    //           <p className="text-gray-300">5%</p>
    //         </div>
    //       </div>

    //       <div className="flex justify-between text-base font-medium text-gray-900 px-2 mt-2">
    //         <h3 className="text-gray-300">Total</h3>
    //         <p className="text-gray-300 font-bold">₹ 625</p>
    //       </div>
    //       <div className="mt-6 px-4">
    //         <Link href="#!">
    //           <span className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
    //             Pay
    //           </span>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
     </div> */}
    </>
  );
};

export default BookingSummary;
