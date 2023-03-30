import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

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
  //   {
  //     id: 7,
  //     type: eventTypes.completed,
  //     content: "Partner 7",
  //     target: "partner@xy.com",
  //     date: "Sep 30",
  //     datetime: "2020-09-30",
  //   },
  //   {
  //     id: 8,
  //     type: eventTypes.completed,
  //     content: "Partner 8",
  //     target: "partner@xy.com",
  //     date: "Oct 4",
  //     datetime: "2020-10-04",
  //   },
  //   {
  //     id: 9,
  //     type: eventTypes.completed,
  //     content: "Partner 9",
  //     target: "partner@xy.com",
  //     date: "Oct 4",
  //     datetime: "2020-10-04",
  //   },
];
const Partners = ({ morePartners }: { morePartners: number }) => {
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
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
              <div className="   inline-block align-bottom bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                {/* <section
                  aria-labelledby="timeline-title"
                  className="lg:col-start-3 lg:col-span-1"
                > */}
                <div className="bg-gray-800 px-4 sm:rounded-lg sm:px-6">
                  <h2
                    id="timeline-title"
                    className="text-lg font-medium text-gray-50"
                  >
                    Event partners
                  </h2>

                  {/*Event partners */}
                  <div className="mt-6 flow-root overflow-y-auto p-4 ">
                    <ul role="list" className="-mb-8">
                      {partners.map((item, itemIdx) => (
                        <li key={item.id}>
                          <div className="relative pb-8">
                            {itemIdx !== partners.length - 1 ? (
                              <span
                                className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                aria-hidden="true"
                              />
                            ) : null}
                            <div className="relative flex space-x-3">
                              <div>
                                <span
                                  className={classNames(
                                    item.type.bgColorClass,
                                    "h-8 w-8 rounded-full flex items-center justify-center "
                                  )}
                                >
                                  <item.type.icon
                                    className="w-5 h-5 text-white"
                                    aria-hidden="true"
                                  />
                                </span>
                              </div>
                              <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                  <p className="text-sm text-gray-50">
                                    {item.content} <br />
                                    <a
                                      href="#"
                                      className="font-medium text-gray-200"
                                    >
                                      {item.target}
                                    </a>
                                  </p>
                                </div>
                                {/* <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                    <time dateTime={item.datetime}>
                                      {item.date}
                                    </time>
                                  </div> */}
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 flex flex-col justify-stretch">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Add partners
                    </button>
                  </div>
                </div>
                {/* </section> */}
              </div>
              {/* <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div>
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <CheckIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Payment successful
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Eius aliquam laudantium explicabo pariatur iste
                        dolorem animi vitae error totam. At sapiente aliquam
                        accusamus facere veritatis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </div> */}
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Partners;
