import React, { useState } from "react";

import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Layout from "@components/layout/Layout";
import Link from "next/link";
import { NextPageContext } from "next/types";
import cookie from "cookie";
import { useRouter } from "next/router";

export const delivery_type = [
  {
    id: 1,
    type: "VIP",
    description: "4-10 business day",
    charge: "45",
  },
  {
    id: 2,
    type: "Normal",
    description: "2-5 business day",
    charge: "80",
  },
];

export const cartItem = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "330.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "240.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
];

const BookEvent = ({
  eventId,
  resolvedUrl,
}: {
  eventId: string;
  resolvedUrl?: string;
}) => {
  const router = useRouter();
  const [deliveryMethod, setDeliveryMethod] = useState(1);

  return (
    <Layout title="Book event">
      <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="relative">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Booked by
                </h3>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base font-medium text-gray-500">
                      Full name
                    </dt>
                    <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
                      Margot Foster
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base font-medium text-gray-500">
                      Phone number
                    </dt>
                    <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
                      9523845328
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base font-medium text-gray-500">
                      Email address
                    </dt>
                    <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
                      margotfoster@example.com
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Available tickets
                </h3>
              </div>
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-8 px-4 pb-4">
                {delivery_type.map((type) => (
                  <div key={type.id} className=" border-gray-200">
                    <a
                      onClick={() => setDeliveryMethod(type.id)}
                      href="#!"
                      className={`group block border-2 w-full rounded-lg p-4 ring-1 ring-slate-900/5 shadow-lg space-y-3 ${
                        type.id == deliveryMethod
                          ? `border-sky-700 `
                          : `border-white hover:ring-sky-700`
                      }`}
                    >
                      <div className="flex justify-between">
                        <h3
                          className={`text-base uppercase font-bold text-gray-400 ${
                            type.id == deliveryMethod && `text-sky-700`
                          }`}
                        >
                          {type.type}
                        </h3>
                        <CheckCircleIcon
                          className={`h-6 w-6 float-right ${
                            type.id == deliveryMethod
                              ? `text-sky-700 shadow-2xl`
                              : `text-white`
                          }`}
                        />
                      </div>
                      <p
                        className={`text-sm font-semibold ${
                          type.id == deliveryMethod
                            ? `text-sky-700`
                            : `text-gray-500`
                        }`}
                      >
                        {type.description}
                      </p>
                      <p
                        className={`text-base font-bold ${
                          type.id == deliveryMethod
                            ? `text-sky-700`
                            : `text-gray-900`
                        }`}
                      >
                        ₹ {type.charge}
                      </p>
                    </a>
                  </div>
                ))}
              </dl>

              {/* <div className="border-b-2 px-4 pb-4 ">
                <fieldset>
                  <div>
                    <legend className="text-lg font-medium text-gray-900">
                      Payment
                    </legend>
                  </div>
                  <div className="flex mt-4 space-x-4">
                    <div className="flex items-center">
                      <input
                        id="push-everything"
                        name="push-notifications"
                        type="radio"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-500"
                      />
                      <label
                        htmlFor="push-everything"
                        className="ml-3 block w-20 text-sm font-medium text-gray-700"
                      >
                        Credit Card
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="push-email"
                        name="push-notifications"
                        type="radio"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-500"
                      />
                      <label
                        htmlFor="push-email"
                        className="ml-3 block w-12 text-sm font-medium text-gray-700"
                      >
                        PayPal
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="push-nothing"
                        name="push-notifications"
                        type="radio"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-500"
                      />
                      <label
                        htmlFor="push-nothing"
                        className="ml-3 block w-20 text-sm font-medium text-gray-700"
                      >
                        eTransfer
                      </label>
                    </div>
                  </div>
                </fieldset>
                <div className="grid grid-cols-6 gap-6 py-4">
                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="first-name"
                      className="block text-base font-medium text-gray-500"
                    >
                      Card number
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="last-name"
                      className="block text-base font-medium text-gray-500"
                    >
                      Name on card
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-4">
                    <label
                      htmlFor="city"
                      className="block text-base font-medium text-gray-500"
                    >
                      Expiration date(MM/YY)
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      CVC
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="relative ">
            <div className="w-full px-4 py-4 border shadow-md rounded-lg">
              <div className=" mt-4 flow-root">
                <h3 className="text-lg leading-6 font-medium">Order summary</h3>

                <div className="mt-6 space-y-4 px-2 border-b-2 py-2">
                  <div className="flex justify-between text-base font-medium ">
                    <h3 className="text-gray-300">Subtotal</h3>
                    <p className="text-gray-300">₹ 570</p>
                  </div>
                  <div className="flex justify-between text-base font-medium ">
                    <h3 className="text-gray-300">Shipping</h3>
                    <p className="text-gray-300">₹ 40</p>
                  </div>
                  <div className="flex justify-between text-base font-medium ">
                    <h3 className="text-gray-300">Taxes</h3>
                    <p className="text-gray-300">₹ 15</p>
                  </div>
                </div>

                <div className="flex justify-between text-base font-medium text-gray-900 px-2 mt-2">
                  <h3 className="text-gray-300">Total</h3>
                  <p className="text-gray-300 font-bold">₹ 625</p>
                </div>
                <div className="mt-6 px-4">
                  <Link href="#!">
                    <span className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                      Pay
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </dl>
      </div>
    </Layout>
  );
};

export default BookEvent;

export async function getServerSideProps(context: NextPageContext) {
  const { login } = cookie.parse(
    context.req ? context.req.headers.cookie || "" : document.cookie
  );

  const { eventId } = context.query;
  // console.log(login);
  // if (login === undefined || login === "false") {
  //   return {
  //     redirect: {
  //       destination: "/login?redirectref=/book-event/" + eventId,
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: { eventId },
  };
}
