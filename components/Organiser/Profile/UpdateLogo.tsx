import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";

import { BASE_URL } from "@constants/api-urls";
import Image from "next/image";
import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";

const product = {
  name: "Basic Tee 6-Pack ",
  price: "$192",
  rating: 3.9,
  reviewCount: 117,
  href: "#",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg",
  imageAlt: "Two each of gray, white, and black shirts arranged on table.",
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "XXL", inStock: true },
    { name: "XXXL", inStock: false },
  ],
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const UpdateLogo = () => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  return (
    <>
      <a
        onClick={() => {
          setOpen(true);
        }}
        className="inline-flex items-center shadow-sm px-2.5 py-0.5 text-sm leading-5 font-medium rounded-full text-blue-600 hover:bg-gray-50 hover:text-black cursor-pointer"
      >
        Update logo
      </a>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    {/* <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 "> */}
                    <div className="flex justify-center">
                      <Image
                        src="https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg"
                        height={200}
                        width={200}
                        alt="Organiser logo"
                      />
                    </div>
                    {/* </div> */}
                  </div>
                  <div className="bg-white px-4 py-3 mb-2 sm:flex sm:flex-row-reverse sm:px-10">
                    {/* <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-1/2"
                      
                    >
                      Save
                    </button> */}

                    <div className="flex justify-center">
                      <div className="relative">
                        <label
                          title="Click to upload"
                          htmlFor="button2"
                          className="cursor-pointer flex items-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group dark:before:bg-darker dark:hover:before:border-gray-500 before:bg-gray-100 dark:before:border-gray-600 before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                        >
                          <div className="w-max relative">
                            <img
                              className="w-12"
                              src="https://www.svgrepo.com/show/485545/upload-cicle.svg"
                              alt="file upload icon"
                              width="512"
                              height="512"
                            />
                          </div>
                          <div className="relative">
                            <span className="block text-base font-semibold relative text-blue-900 dark:text-white group-hover:text-blue-500">
                              Upload a file
                            </span>
                            <span className="mt-0.5 block text-sm text-gray-500 dark:text-gray-400">
                              Max 2 MB
                            </span>
                          </div>
                        </label>
                        <input hidden type="file" name="button2" id="button2" />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default UpdateLogo;
