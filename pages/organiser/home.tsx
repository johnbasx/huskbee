import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  CheckBadgeIcon,
  LockOpenIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";

import Layout from "@components/Organiser/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="py-8 xl:py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
          <div className="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
            <div>
              <div>
                <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      ARIA attribute misspelled
                    </h1>
                    <p className="mt-2 text-sm text-gray-500">
                      #400 opened by{" "}
                      <a href="#" className="font-medium text-gray-900">
                        Hilary Mahy
                      </a>{" "}
                      in{" "}
                      <a href="#" className="font-medium text-gray-900">
                        Customer Portal
                      </a>
                    </p>
                  </div>
                  <div className="mt-4 flex space-x-3 md:mt-0">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >
                      <PencilIcon
                        className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>Edit</span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >
                      <BellIcon
                        className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
                <aside className="mt-8 xl:hidden">
                  <h2 className="sr-only">Details</h2>
                  <div className="space-y-5">
                    <div className="flex items-center space-x-2">
                      <LockOpenIcon
                        className="h-5 w-5 text-green-500"
                        aria-hidden="true"
                      />
                      <span className="text-green-700 text-sm font-medium">
                        Open Issue
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ChartBarIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="text-gray-900 text-sm font-medium">
                        4 comments
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CalendarIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="text-gray-900 text-sm font-medium">
                        Created on{" "}
                        <time dateTime="2020-12-02">Dec 2, 2020</time>
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 border-t border-b border-gray-200 py-6 space-y-8">
                    <div>
                      <h2 className="text-sm font-medium text-gray-500">
                        Assignees
                      </h2>
                      <ul role="list" className="mt-3 space-y-3">
                        <li className="flex justify-start">
                          <a href="#" className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                              <img
                                className="h-5 w-5 rounded-full"
                                src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                                alt=""
                              />
                            </div>
                            <div className="text-sm font-medium text-gray-900">
                              Eduardo Benz
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-sm font-medium text-gray-500">
                        Tags
                      </h2>
                      <ul role="list" className="mt-2 leading-8">
                        <li className="inline">
                          <a
                            href="#"
                            className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                          >
                            <div className="absolute flex-shrink-0 flex items-center justify-center">
                              <span
                                className="h-1.5 w-1.5 rounded-full bg-rose-500"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-3.5 text-sm font-medium text-gray-900">
                              Bug
                            </div>
                          </a>{" "}
                        </li>
                        <li className="inline">
                          <a
                            href="#"
                            className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                          >
                            <div className="absolute flex-shrink-0 flex items-center justify-center">
                              <span
                                className="h-1.5 w-1.5 rounded-full bg-indigo-500"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-3.5 text-sm font-medium text-gray-900">
                              Accessibility
                            </div>
                          </a>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </aside>
                <div className="py-3 xl:pt-6 xl:pb-0">
                  <h2 className="sr-only">Description</h2>
                  <div className="prose max-w-none">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Expedita, hic? Commodi cumque similique id tempora
                      molestiae deserunt at suscipit, dolor voluptatem, numquam,
                      harum consequatur laboriosam voluptas tempore aut
                      voluptatum alias?
                    </p>
                    <ul role="list">
                      <li>
                        Tempor ultrices proin nunc fames nunc ut auctor vitae
                        sed. Eget massa parturient vulputate fermentum id
                        facilisis nam pharetra. Aliquet leo tellus.
                      </li>
                      <li>
                        Turpis ac nunc adipiscing adipiscing metus tincidunt
                        senectus tellus.
                      </li>
                      <li>
                        Semper interdum porta sit tincidunt. Dui suspendisse
                        scelerisque amet metus eget sed. Ut tellus in sed
                        dignissim.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <section aria-labelledby="activity-title" className="mt-8 xl:mt-10">
              <div>
                <div className="divide-y divide-gray-200">
                  <div className="pb-4">
                    <h2
                      id="activity-title"
                      className="text-lg font-medium text-gray-900"
                    >
                      Activity
                    </h2>
                  </div>
                  <div className="pt-6">
                    <div className="mt-6">
                      <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <img
                              className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
                              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                              alt=""
                            />

                            <span className="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px">
                              {/* <ChatAltIcon
                                      className="h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    /> */}
                            </span>
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <form action="#">
                            <div>
                              <label htmlFor="comment" className="sr-only">
                                Comment
                              </label>
                              <textarea
                                id="comment"
                                name="comment"
                                rows={3}
                                className="shadow-sm block w-full focus:ring-gray-900 focus:border-gray-900 sm:text-sm border border-gray-300 rounded-md"
                                placeholder="Leave a comment"
                                defaultValue={""}
                              />
                            </div>
                            <div className="mt-6 flex items-center justify-end space-x-4">
                              <button
                                type="button"
                                className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                              >
                                <CheckBadgeIcon
                                  className="-ml-1 mr-2 h-5 w-5 text-green-500"
                                  aria-hidden="true"
                                />
                                <span>Close issue</span>
                              </button>
                              <button
                                type="submit"
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                              >
                                Comment
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <aside className="hidden xl:block xl:pl-8">
            <h2 className="sr-only">Details</h2>
            <div className="space-y-5">
              <div className="flex items-center space-x-2">
                <LockOpenIcon
                  className="h-5 w-5 text-green-500"
                  aria-hidden="true"
                />
                <span className="text-green-700 text-sm font-medium">
                  Open Issue
                </span>
              </div>
              <div className="flex items-center space-x-2">
                {/* <ChatAltIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      /> */}
                <span className="text-gray-900 text-sm font-medium">
                  4 comments
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="text-gray-900 text-sm font-medium">
                  Created on <time dateTime="2020-12-02">Dec 2, 2020</time>
                </span>
              </div>
            </div>
            <div className="mt-6 border-t border-gray-200 py-6 space-y-8">
              <div>
                <h2 className="text-sm font-medium text-gray-500">Assignees</h2>
                <ul role="list" className="mt-3 space-y-3">
                  <li className="flex justify-start">
                    <a href="#" className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <img
                          className="h-5 w-5 rounded-full"
                          src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        Eduardo Benz
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-sm font-medium text-gray-500">Tags</h2>
                <ul role="list" className="mt-2 leading-8">
                  <li className="inline">
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                    >
                      <div className="absolute flex-shrink-0 flex items-center justify-center">
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-rose-500"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="ml-3.5 text-sm font-medium text-gray-900">
                        Bug
                      </div>
                    </a>{" "}
                  </li>
                  <li className="inline">
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                    >
                      <div className="absolute flex-shrink-0 flex items-center justify-center">
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-indigo-500"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="ml-3.5 text-sm font-medium text-gray-900">
                        Accessibility
                      </div>
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
