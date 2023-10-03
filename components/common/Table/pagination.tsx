import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

import { CROWDFUNDING_BASE_URL } from "@constants/api-urls";
import { RootUrlStore } from "@store/table-store";

const Pagination = ({
  prev,
  next,
  pagenumberList,
  getPageData,
}: {
  prev: string | null;
  next: string | null;
  pagenumberList: number[];
  getPageData: (url: string | null) => {};
}) => {
  const [gotoUrl, setGotoUrl] = useState("");
  // const [currentPage, setCurrentPage] = useState<number>(1);
  const { rootUrl, setRootUrl, currentPage, setCurrentPage } = RootUrlStore();
  const [url, setUrl] = useState(rootUrl);

  useEffect(() => {
    setUrl(rootUrl);
    // console.log("rootUrl: ", rootUrl);
  }, [rootUrl]);

  const PageClickHandler = (url: string, currentPageNumber: number) => {
    getPageData(url);
    setCurrentPage(currentPageNumber);
  };

  const NextHandler = () => {
    getPageData(next);
    setCurrentPage(currentPage + 1);
  };

  const PrevHandler = () => {
    getPageData(prev);
    setCurrentPage(currentPage - 1);
  };

  return (
    <nav
      className="grid grid-cols-6 gap-2 mx-1 sm:mx-6 sm:px-0 mt-2"
      aria-label="Pagination"
    >
      <div className="col-span-6 sm:col-span-4 max-w-3xl flex items-center justify-between">
        <div className="-mt-px w-0 flex-1 flex">
          <button
            disabled={prev == null ? true : false}
            onClick={() => PrevHandler()}
            className={`border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-800 hover:text-black cursor-pointer disabled:text-gray-500 disabled:cursor-not-allowed `}
          >
            <ArrowLongLeftIcon
              className="mr-3 h-5 w-5 text-gray-900"
              aria-hidden="true"
            />
            Previous
          </button>
        </div>
        <div className=" md:-mt-px md:flex">
          {pagenumberList &&
            pagenumberList.map((content) => (
              <a
                onClick={() => {
                  PageClickHandler(url + content, content);
                }}
                key={content}
                className={`cursor-pointer border-transparent text-gray-900 hover:text-gray-400 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium ${
                  content == currentPage
                    ? "border-t-1 border-t-purple-500 text-purple-600"
                    : ""
                }`}
              >
                {content}
              </a>
            ))}
        </div>
        <div className="-mt-px w-0 flex-1 flex justify-end">
          <button
            disabled={next == null ? true : false}
            onClick={
              () => NextHandler()
              // getData(next)
            }
            className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-800 hover:text-black cursor-pointer disabled:text-gray-500 disabled:cursor-not-allowed "
          >
            Next
            <ArrowLongRightIcon
              className="ml-3 h-5 w-5 text-gray-900"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <div className="col-span-6 sm:col-span-2 mt-4 ">
        <div className="flex gap-x-2 float-right">
          <span className="mt-1 text-gray-800 text-sm ">Go to page</span>
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-400 border-transparent border-b-gray-300 bg-transparentfocus:border-transparent focus:border-b-gray-300 focus:ring-0 sm:max-w-md px-2 ">
            <input
              onChange={(e) => setGotoUrl(url + e.target.value)}
              type="text"
              name="gotopage"
              id="gotopage"
              autoComplete="gotopage"
              className="w-28 sm:w-24 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-600 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Pagenumber"
            />
          </div>

          <button
            onClick={() => getPageData(gotoUrl)}
            type="button"
            className="rounded-md bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Pagination;
