import { Dispatch, Fragment, useEffect, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React from "react";

const TablePageOption = ({
  pageValue,
  setPageSize,
}: {
  pageValue: number;
  setPageSize: any;
}) => {
  return (
    <div className=" w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Show {pageValue}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-bottom-right divide-y divide-gray-100 rounded-md bg-gray-800 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-700">
            <div className="px-1 py-1 ">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? "bg-gray-900 text-gray-100" : "text-gray-100"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={(e) => {
                        setPageSize(pageSize);
                      }}
                    >
                      {/* {active ? (
                    <EditActiveIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  ) : (
                    <EditInactiveIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  )} */}
                      {pageSize}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

//   )
// }

export default TablePageOption;
