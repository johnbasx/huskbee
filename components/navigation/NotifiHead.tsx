import React from "react";
import { HiFire } from "react-icons/hi";
import { TbArrowNarrowRight } from "react-icons/tb";

const message = "Website is under development!";

const NotifiHead = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-orange-400 via-pink-500">
      <div className="mx-auto max-w-7xl py-2 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded bg-purple-800 p-1">
              <HiFire className="h-4 w-4" />
            </span>
            <p className="ml-3 truncate font-medium text-sm text-white">
              <span className="md:hidden">{message}</span>
              <span className="hidden md:inline">{message}</span>
            </p>
          </div>

          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex items-center rounded-full  focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2 font-medium hover:text-slate-300 text-slate-100 px-2 py-1 text-xs"
            >
              <span className="sr-only">Check out</span>
              {/* Get pass */}
              <TbArrowNarrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotifiHead;
