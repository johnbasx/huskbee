import { Combobox, Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode, useEffect, useState } from 'react';

import { FolderIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

interface CommandPeleteWrapperProp {
  buttonText: string;
  children: ReactNode;
  query: string;
  setQuery: (query: string) => void;
  length: number;
  placeholder: string;
}

const CommandPalleteWrapper = ({
  buttonText,
  children,
  query,
  setQuery,
  length,
  placeholder,
}: CommandPeleteWrapperProp) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type='button'
        onClick={() => setOpen(true)}
        className='flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
      >
        {buttonText}
      </button>
      <Transition.Root
        show={open}
        as={Fragment}
        afterLeave={() => setQuery('')}
      >
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20'
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-neutral-500 bg-opacity-25 transition-opacity' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Combobox
              as='div'
              className='mx-auto max-w-2xl transform divide-y divide-neutral-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all'
              //   onChange={(item) => (window.location = item.url)}
            >
              <div className='relative'>
                <MagnifyingGlassIcon
                  className='pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-neutral-400'
                  aria-hidden='true'
                />
                <Combobox.Input
                  className='h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-neutral-900 placeholder-neutral-400 focus:ring-0'
                  placeholder={placeholder}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>

              {children}

              {/* {fundraisers.length > 0 && (
                <Combobox.Options
                  static
                  className="max-h-80 scroll-py-2 divide-y divide-neutral-100 overflow-y-auto"
                >
                  <li className="p-2">
                
                    <ul className="text-sm text-neutral-700">
                      {fundraisers.map((fundraiser) => (
                        <Combobox.Option
                          key={fundraiser.id}
                          value={fundraiser}
                          className={({ active }) =>
                            classNames(
                              "flex cursor-default select-none items-center rounded-md px-3 py-2",
                              active && "bg-indigo-600 text-white"
                            )
                          }
                        >
                          {({ active }) => (
                            <>
                              <FolderIcon
                                className={classNames(
                                  "h-6 w-6 flex-none",
                                  active ? "text-white" : "text-neutral-400"
                                )}
                                aria-hidden="true"
                              />
                              <span className="ml-3 flex-auto truncate">
                                {fundraiser.title}
                              </span>
                              {active && (
                                <span className="ml-3 flex-none text-indigo-100">
                                  Jump to...
                                </span>
                              )}
                            </>
                          )}
                        </Combobox.Option>
                      ))}
                    </ul>
                  </li>
                </Combobox.Options>
              )} */}

              {query !== '' && length === 0 && (
                <div className='px-6 py-14 text-center sm:px-14'>
                  <FolderIcon
                    className='mx-auto h-6 w-6 text-neutral-400'
                    aria-hidden='true'
                  />
                  <p className='mt-4 text-sm text-neutral-900'>
                    We couldn&apos;t find any results for your search with that
                    term. Please try again.
                  </p>
                </div>
              )}
            </Combobox>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default CommandPalleteWrapper;
