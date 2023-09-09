import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { EventListStore, orgTokenStore } from "@store/index";
import React, { useEffect, useState } from "react";

import { BOOKING_BASE_URL } from "@constants/api-urls";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { EventDetailProps } from "../event-detail/[eventId]";
import Layout from "@components/Organiser/Layout/Layout";
import { NextPageContext } from "next";
import { TableStore } from "@store/table-store";
import axios from "axios";
import { getCookie } from "cookies-next";

export interface EventsProps {
  count: number;
  next: string | null;
  previous: string | null;
  results: EventDetailProps[];
}

const Events = ({ token, events }: { token: string; events: EventsProps }) => {
  const { eventsObj, setEventObj } = EventListStore();
  const { setOrgToken } = orgTokenStore();
  const { pageNumberList, setPageNumberList } = TableStore();
  const [eventList, setEventList] = useState<EventDetailProps[]>();
  const [prev, setPrev] = useState<string | null>("");
  const [next, setNext] = useState<string | null>("");

  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  useEffect(() => {
    setOrgToken(token);
    setEventObj(events);
  }, []);

  useEffect(() => {
    setPageNumberList(pageNumbers);
  }, [pageNumbers, pageNumberList]);

  useEffect(() => {
    if (eventsObj != null) {
      setEventList(eventsObj.results);
      setPrev(eventsObj.previous);
      setNext(eventsObj.next);
    }
  }, [eventsObj]);

  const SearchPartner = (query: string) => {
    if (eventsObj != null) {
      const filteredList = query
        ? eventsObj.results &&
          eventsObj.results.filter((event) =>
            event.name.toLowerCase().includes(query.toLowerCase())
          )
        : events.results;
      setEventList(filteredList);
    }
  };

  return (
    <Layout>
      <div className="w-5xl mx-auto">
        <div className="mt-2 p-8 sm:ml-6">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-400 border-transparent border-b-gray-300 bg-transparentfocus:border-transparent focus:border-b-gray-300 focus:ring-0 sm:max-w-md">
            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </span>
            <input
              onChange={(event) => {
                SearchPartner(event.target.value);
              }}
              type="text"
              name="username"
              id="username"
              autoComplete="username"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Search in this page"
            />
          </div>
        </div>

        <div className=" overflow-x-auto sm:mx-6 pt-2 sm:pt-10 pb-10">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-400 ">
              <table className="min-w-full divide-y divide-gray-400">
                <thead className="bg-transparent">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                    >
                      Start date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                    >
                      End date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                    >
                      Start time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                    >
                      End time
                    </th>
                    <th
                      scope="col"
                      className=" px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                    >
                      <span className="sr-only">Edit</span>Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {eventList &&
                    eventList.map((event, Idx) => (
                      <tr
                        key={event.id}
                        className={
                          Idx % 2 === 0 ? "bg-transparent" : "bg-transparent"
                        }
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">
                          {event.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                          {event.event_type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                          {event.start_date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                          {event.end_date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                          {event.start_time}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                          {event.end_time}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Detail
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Pagination prev={prev} next={next} />
      </div>
    </Layout>
  );
};

export default Events;

export async function getServerSideProps(context: NextPageContext) {
  const req = context.req;
  const res = context.res;
  const token = getCookie("org_token", { req, res });

  const login_status = getCookie("login", { req, res });
  const login = login_status ? login_status == true : false;

  const response = await fetch(BOOKING_BASE_URL + "list-create-event", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const events = await response.json();
  console.log(events);

  return {
    props: { token, login, events },
  };
}

const Pagination = ({
  prev,
  next,
}: {
  prev: string | null;
  next: string | null;
}) => {
  const { eventsObj, setEventObj } = EventListStore();

  const { token } = orgTokenStore();
  const [gotoUrl, setGotoUrl] = useState("");
  const { pageNumberList, setPageNumberList } = TableStore();
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>();

  const getData = async (url: string | null) => {
    if (url != null) {
      try {
        const response = await axios(url, {
          headers: { Authorization: "Bearer " + token },
        });
        setEventObj(response.data);
      } catch (e: any) {
        console.log(e);
      }
    }
  };

  const PageClickHandler = (url: string, currentPageNumber: number) => {
    getData(url);
    setCurrentPage(currentPageNumber);
  };

  useEffect(() => {
    if (eventsObj?.count != undefined) {
      if (eventsObj?.count > 0 && eventsObj.count < 6) {
        let list: number[] = [];
        for (let i = 1; i <= eventsObj.count; i++) {
          list = list.concat(i);
        }
        // console.log("list", list);

        setPageNumbers(list);
        setPageNumberList(list);
      }
      // else {
      //   const new_list: number[] = pageNumbers.concat(1, 2, 3, 4, 5, 6);
      //   console.log("list", new_list);
      //   setPageNumbers(new_list);

      //   setPageNumberList(new_list);
      // }
    }
  }, [pageNumbers]);

  return (
    <nav
      className="grid grid-cols-6 gap-2 mx-1 sm:mx-16 px-4 sm:px-0 mt-2"
      aria-label="Pagination"
    >
      <div className="col-span-6 sm:col-span-4 max-w-3xl flex items-center justify-between">
        <div className="-mt-px w-0 flex-1 flex">
          <button
            disabled={prev == null ? true : false}
            onClick={() => getData(prev)}
            className={`border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-400 hover:text-gray-300 cursor-pointer disabled:text-gray-500 disabled:cursor-not-allowed `}
          >
            <ArrowLongLeftIcon
              className="mr-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Previous
          </button>
        </div>
        <div className="hidden md:-mt-px md:flex">
          {pageNumberList &&
            pageNumberList.map((content) => (
              <a
                onClick={() => {
                  PageClickHandler(
                    BOOKING_BASE_URL + "list-create-event?page=" + content,
                    content
                  );
                }}
                key={content}
                className={`cursor-pointer border-transparent text-gray-500 hover:text-gray-400 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium ${
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
            onClick={() => getData(next)}
            className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-400 hover:text-gray-300 cursor-pointer disabled:text-gray-500 disabled:cursor-not-allowed "
          >
            Next
            <ArrowLongRightIcon
              className="ml-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <div className="col-span-6 sm:col-span-2 mt-4 ">
        <div className="flex gap-x-2 float-right">
          <span className="mt-1 text-gray-400 text-sm ">Go to page</span>
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-400 border-transparent border-b-gray-300 bg-transparentfocus:border-transparent focus:border-b-gray-300 focus:ring-0 sm:max-w-md px-2 ">
            <input
              onChange={(e) =>
                setGotoUrl(
                  BOOKING_BASE_URL + "list-create-event?page=" + e.target.value
                )
              }
              type="text"
              name="gotopage"
              id="gotopage"
              autoComplete="gotopage"
              className="w-28 sm:w-24 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-200 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Pagenumber"
            />
          </div>

          <button
            onClick={() => getData(gotoUrl)}
            // type="submit"
            className="rounded-md bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};
