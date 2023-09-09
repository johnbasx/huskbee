import { AiFillBank } from "react-icons/ai";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const otherPaymentsOptions = [
  {
    name: "Debit / Credit card",
    icon: BsFillCreditCardFill,
  },
  {
    name: "Internet Banking",
    icon: AiFillBank,
  },
];

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
          <p className="text-xs mb-2 text-indigo-700">
            Paying Foxbeta Pvt. Ltd.
          </p>

          <Link href={"/final-payment/" + ["google-pay"]}>
            <span className="w-full flex items-center justify-center bg-black border border-transparent text-white rounded-md py-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 gap-x-2 cursor-pointer">
              <span className="sr-only">Pay with Google Pay</span>
              <span>
                <FcGoogle className="h-6 w-6" />
              </span>{" "}
              <span className="font-medium">Pay</span>
            </span>
          </Link>

          <div className="relative mt-8">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white text-sm font-medium text-gray-500">
                or
              </span>
            </div>
          </div>

          <div className="py-6 space-y-4">
            {otherPaymentsOptions.map((option) => (
              <button
                key={option.name}
                type="button"
                className="w-full flex items-center justify-center bg-gray-200 border text-gray-800 hover:text-gray-900 rounded-md py-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 gap-x-2 flex justify-between px-6"
              >
                <span className=" text-lg font-medium">{option.name}</span>{" "}
                <span className="">
                  <option.icon className="h-6 w-6" />
                </span>
              </button>
            ))}
          </div>
          {/* <button
            type="button"
            disabled={orderTotal === 0 ? true : false}
            className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
          >
            Pay now
          </button> */}
        </div>
      </section>
    </>
  );
};

export default BookingSummary;
