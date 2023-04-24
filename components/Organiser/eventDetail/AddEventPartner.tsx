import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";

import { PlusSmallIcon } from "@heroicons/react/24/outline";
import { Tab } from "@headlessui/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const AddEventPartner = () => {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  let [categories] = useState({
    "Select existing partner": [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    "Add new partner": [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    // Trending: [
    //   {
    //     id: 1,
    //     title: 'Ask Me Anything: 10 answers to your questions about coffee',
    //     date: '2d ago',
    //     commentCount: 9,
    //     shareCount: 5,
    //   },
    //   {
    //     id: 2,
    //     title: "The worst advice we've ever heard about coffee",
    //     date: '4d ago',
    //     commentCount: 1,
    //     shareCount: 2,
    //   },
    // ],
  });
  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}
        type="button"
        className="group -ml-1 bg-transparent p-1 rounded-md flex items-center focus:outline-none "
      >
        <span className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
          <PlusSmallIcon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="ml-4 text-sm font-medium text-blue-400 group-hover:text-blue-500">
          Add more partners
        </span>
      </button>
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
            <div className="fixed inset-0 bg-transparent bg-opacity-75 transition-opacity" />
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                    <div className="w-full max-w-md px-2 py-4 sm:px-0">
                      <Tab.Group>
                        <Tab.List className="flex space-x-1 rounded-xl bg-transparent p-1">
                          {Object.keys(categories).map((category) => (
                            <Tab
                              key={category}
                              className={({ selected }) =>
                                classNames(
                                  "w-full py-2.5 text-sm font-medium leading-5 text-gray-50",
                                  "ring-white focus:outline-none",
                                  selected
                                    ? "border-b-2 border-white  shadow"
                                    : "text-gray50 hover:bg-white/[0.12] "
                                )
                              }
                            >
                              {category}
                            </Tab>
                          ))}
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                          {Object.values(categories).map((posts, idx) => (
                            <Tab.Panel
                              key={idx}
                              className={classNames(
                                "rounded-xl bg-transparent p-3",
                                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                              )}
                            >
                              <form>
                                <div className="space-y-12">
                                  <div className="border-b border-gray-900/10 pb-12">
                                    {/* <h2 className="text-base font-semibold leading-7 text-gray-100">
                                      Add partner
                                    </h2> */}
                                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                                      <div className="sm:col-span-4">
                                        <label
                                          htmlFor="username"
                                          className="block text-sm font-medium leading-6 text-gray-100"
                                        >
                                          Event name
                                        </label>
                                        <div className="mt-2">
                                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <input
                                              type="text"
                                              name="username"
                                              id="username"
                                              autoComplete="username"
                                              className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
                                              placeholder="janesmith"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-span-full">
                                        <label
                                          htmlFor="description"
                                          className="block text-sm font-medium leading-6 text-gray-100"
                                        >
                                          Description
                                        </label>
                                        <div className="mt-2">
                                          <textarea
                                            id="description"
                                            placeholder="write something about the partner"
                                            name="description"
                                            rows={3}
                                            className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
                                            defaultValue={""}
                                          />
                                        </div>
                                      </div>
                                      <div className="col-span-full">
                                        <label
                                          className="block mb-2 text-sm font-medium text-gray-50 "
                                          htmlFor="logo"
                                        >
                                          Logo
                                        </label>
                                        <input
                                          className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
                                          id="logo"
                                          type="file"
                                        />
                                      </div>
                                      <div className="col-span-full">
                                        <label
                                          className="block mb-2 text-sm font-medium text-gray-50 "
                                          htmlFor="partner-hero-image"
                                        >
                                          Partner hero image
                                        </label>
                                        <input
                                          className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
                                          id="partner-hero-image"
                                          type="file"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="mt-6 flex items-center justify-end gap-x-6">
                                  <button
                                    onClick={() => setOpen(false)}
                                    type="button"
                                    className="text-sm font-semibold leading-6 text-gray-100"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                  >
                                    Save
                                  </button>
                                </div>
                              </form>
                              {/* <ul>
                                {posts.map((post) => (
                                  <li
                                    key={post.id}
                                    className="relative rounded-md p-3 hover:bg-gray-100"
                                  >
                                    <h3 className="text-sm font-medium leading-5">
                                      {post.title}
                                    </h3>

                                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                                      <li>{post.date}</li>
                                      <li>&middot;</li>
                                      <li>{post.commentCount} comments</li>
                                      <li>&middot;</li>
                                      <li>{post.shareCount} shares</li>
                                    </ul>

                                    <a
                                      href="#"
                                      className={classNames(
                                        "absolute inset-0 rounded-md",
                                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                                      )}
                                    />
                                  </li>
                                ))}
                              </ul> */}
                            </Tab.Panel>
                          ))}
                        </Tab.Panels>
                      </Tab.Group>
                    </div>

                    {/* <form>
                      <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                          <h2 className="text-base font-semibold leading-7 text-gray-100">
                            Add partner
                          </h2>
                          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                              <label
                                htmlFor="username"
                                className="block text-sm font-medium leading-6 text-gray-100"
                              >
                                Event name
                              </label>
                              <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                  
                                  <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="username"
                                    className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
                                    placeholder="janesmith"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-span-full">
                              <label
                                htmlFor="description"
                                className="block text-sm font-medium leading-6 text-gray-100"
                              >
                                Description
                              </label>
                              <div className="mt-2">
                                <textarea
                                  id="description"
                                  placeholder="write something about the partner"
                                  name="description"
                                  rows={3}
                                  className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="col-span-full">
                              <label
                                className="block mb-2 text-sm font-medium text-gray-50 "
                                htmlFor="logo"
                              >
                                Logo
                              </label>
                              <input
                                className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
                                id="logo"
                                type="file"
                              />
                            </div>
                            <div className="col-span-full">
                              <label
                                className="block mb-2 text-sm font-medium text-gray-50 "
                                htmlFor="partner-hero-image"
                              >
                                Partner hero image
                              </label>
                              <input
                                className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
                                id="partner-hero-image"
                                type="file"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                          onClick={() => setOpen(false)}
                          type="button"
                          className="text-sm font-semibold leading-6 text-gray-100"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Save
                        </button>
                      </div>
                    </form> */}
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

export default AddEventPartner;
