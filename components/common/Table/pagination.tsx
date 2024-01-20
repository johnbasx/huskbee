import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';

import { CROWDFUNDING_BASE_URL } from '@constants/api-urls';
import { RootUrlStore } from '@store/table-store';
import { TbArrowLeft, TbArrowRight } from 'react-icons/tb';

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
  const [gotoUrl, setGotoUrl] = useState('');
  // const [currentPage, setCurrentPage] = useState<number>(1);
  const { rootUrl, setRootUrl, currentPage, setCurrentPage } = RootUrlStore();
  const [url, setUrl] = useState(rootUrl);

  useEffect(() => {
    setUrl(rootUrl);
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
      className='mx-1 mt-2 grid grid-cols-6 gap-2 sm:mx-6 sm:px-0'
      aria-label='Pagination'
    >
      <div className='col-span-6 flex max-w-3xl items-center justify-between sm:col-span-4'>
        <div className='-mt-px flex w-0 flex-1'>
          <button
            type='button'
            disabled={prev == null ? true : false}
            onClick={() => PrevHandler()}
            className={
              'inline-flex cursor-pointer items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-neutral-800 hover:text-black disabled:cursor-not-allowed disabled:text-neutral-500'
            }
          >
            <TbArrowLeft
              className='mr-3 h-5 w-5 text-neutral-900'
              aria-hidden='true'
            />
            Previous
          </button>
        </div>
        <div className=' md:-mt-px md:flex'>
          {/* {pagenumberList &&
            pagenumberList.map((content) => (
              <a
                onClick={() => {
                  PageClickHandler(url + content, content);
                }}
                key={content}
                className={`cursor-pointer border-transparent text-neutral-900 hover:text-neutral-400 hover:border-neutral-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium ${
                  content == currentPage
                    ? "border-t-1 border-t-purple-500 text-purple-600"
                    : ""
                }`}
              >
                {content}
              </a>
            ))} */}
        </div>
        <div className='-mt-px flex w-0 flex-1 justify-end'>
          <button
            type='button'
            disabled={next == null ? true : false}
            onClick={
              () => NextHandler()
              // getData(next)
            }
            className='inline-flex cursor-pointer items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-neutral-800 hover:text-black disabled:cursor-not-allowed disabled:text-neutral-500 '
          >
            Next
            <TbArrowRight
              className='ml-3 h-5 w-5 text-neutral-900'
              aria-hidden='true'
            />
          </button>
        </div>
      </div>

      <div className='col-span-6 mt-4 sm:col-span-2 '>
        <div className='float-right flex items-center gap-x-2'>
          <span className='mt-1 text-sm text-neutral-800 '>Go to page</span>
          <div className='bg-transparentfocus:border-transparent flex rounded-md border-transparent border-b-neutral-300 px-2 shadow-sm ring-1 ring-inset ring-neutral-400 focus:border-b-neutral-300 focus:ring-0 sm:max-w-md '>
            <input
              onChange={(e) => setGotoUrl(url + e.target.value)}
              type='text'
              name='gotopage'
              id='gotopage'
              autoComplete='gotopage'
              className='block w-28 flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder:text-xs placeholder:text-neutral-600 focus:ring-0 sm:w-24 sm:text-sm sm:leading-6'
              placeholder='Page number'
            />
          </div>

          <button
            onClick={() => getPageData(gotoUrl)}
            type='button'
            className='rounded-md bg-blue-600 px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
          >
            <TbArrowRight className='h-5 w-5' />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Pagination;
