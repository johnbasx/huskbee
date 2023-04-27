import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";

import Image from "next/image";

const eventTypes = {
  applied: { icon: UserIcon, bgColorClass: "bg-gray-400" },
  advanced: { icon: HandThumbUpIcon, bgColorClass: "bg-blue-500" },
  completed: { icon: CheckIcon, bgColorClass: "bg-green-500" },
};

const partners = [
  {
    id: 1,
    type: eventTypes.completed,
    content: "Partner 1",
    target: "partner@xy.com",
    date: "Sep 20",
    datetime: "2020-09-20",
  },
  {
    id: 2,
    type: eventTypes.completed,
    content: "Partner 2",
    target: "partner@xy.com",
    date: "Sep 22",
    datetime: "2020-09-22",
  },
  {
    id: 3,
    type: eventTypes.completed,
    content: "Partner 3",
    target: "partner@xy.com",
    date: "Sep 28",
    datetime: "2020-09-28",
  },
  {
    id: 4,
    type: eventTypes.completed,
    content: "Partner 4",
    target: "partner@xy.com",
    date: "Sep 30",
    datetime: "2020-09-30",
  },
  {
    id: 5,
    type: eventTypes.completed,
    content: "Partner 15",
    target: "partner@xy.com",
    date: "Oct 4",
    datetime: "2020-10-04",
  },
  {
    id: 6,
    type: eventTypes.completed,
    content: "Partner 6",
    target: "partner@xy.com",
    date: "Oct 4",
    datetime: "2020-10-04",
  },
  {
    id: 7,
    type: eventTypes.completed,
    content: "Partner 7",
    target: "partner@xy.com",
    date: "Sep 30",
    datetime: "2020-09-30",
  },
  {
    id: 8,
    type: eventTypes.completed,
    content: "Partner 8",
    target: "partner@xy.com",
    date: "Oct 4",
    datetime: "2020-10-04",
  },
  {
    id: 9,
    type: eventTypes.completed,
    content: "Partner 9",
    target: "partner@xy.com",
    date: "Oct 4",
    datetime: "2020-10-04",
  },
];
const MorePartners = ({ morePartners }: { morePartners: number }) => {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  return (
    <>
      <a
        href="#!"
        onClick={() => {
          setOpen(true);
        }}
      >
        <span className="flex-shrink-0 text-xs leading-5 font-medium cursor-pointer">
          +{morePartners}
        </span>
      </a>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="border border-gray-600 inline-block align-bottom bg-gray-800 rounded-xl px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full sm:max-w-lg sm:w-full sm:p-6">
                <div className="bg-gray-800 px-2 sm:rounded-lg">
                  <h2
                    id="timeline-title"
                    className="ml-3 text-lg font-medium text-gray-50"
                  >
                    Event partners
                  </h2>

                  {/*Event partners */}
                  <div
                    className="mt-2 max-h-96 scroll-py-3 overflow-y-auto scrollbar-1 "
                    id="style-1"
                  >
                    {partners.map((item, itemIdx) => (
                      <Partner key={item.id} />
                    ))}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default MorePartners;

const Partner = () => {
  return (
    <div className=" w-full bg-transparent shadow-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5">
      <div className="w-0 flex-1 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
              width={50}
              height={50}
              alt="partner-logo"
              className="rounded-full"
            />
            {/* <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
              alt=""
            /> */}
          </div>
          <div className="ml-3 w-0 flex-1">
            <p className="text-sm font-medium text-gray-50">Partner name</p>
            <p className="mt-1 text-sm text-gray-400">Description</p>
          </div>
        </div>
      </div>
      <div className="flex ">
        <button className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-300 hover:text-indigo-400">
          Detail
        </button>
      </div>
    </div>
  );
};
