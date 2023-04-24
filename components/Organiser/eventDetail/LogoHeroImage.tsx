import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

import Image from "next/image";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

const LogoHeroImage = ({ name, link }: { name: string; link: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                enterTo="opacity-100 translate-y-0 md:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              >
                <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                  <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <button
                      type="button"
                      className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <div className=" w-full items-center h-full ">
                      <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 ">
                        <Image
                          src={link}
                          alt={name}
                          width={500}
                          height={500}
                          objectFit="cover"
                        />
                        {/* <img
                          src={link}
                          alt={name}
                          className="object-cover object-center"
                        /> */}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
        <div className="w-0 flex-1 flex items-center">
          <PaperClipIcon
            className="flex-shrink-0 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span className="ml-2 flex-1 w-0 truncate">{name}</span>
        </div>
        <div className="ml-4 flex-shrink-0">
          <a
            onClick={() => {
              setOpen(true);
            }}
            className="font-medium text-blue-400 hover:text-blue-500 cursor-pointer"
          >
            View image
          </a>
        </div>
      </li>
    </>
  );
};

export default LogoHeroImage;
