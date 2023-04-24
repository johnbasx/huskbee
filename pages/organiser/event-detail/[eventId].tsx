import { BASE_URL, BOOKING_BASE_URL } from "@constants/api-urls";

import { EventDetailProps } from "../../event-detail/[eventId]";
import EventMainDetail from "@components/Organiser/eventDetail/EventMainDetail";
import EventTicketVariants from "@components/Organiser/eventDetail/EventTicketVariants";
import Layout from "@components/Organiser/Layout/Layout";
import { NextPageContext } from "next";
import Organisers from "@components/Organiser/eventDetail/Organisers";
import React from "react";
import { getCookie } from "cookies-next";

const EventDetail = ({ detail }: { detail: EventDetailProps }) => {
  return (
    <Layout>
      <main className="py-10">
        {/* Page header */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
          <div className="flex items-center space-x-5">
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  className="h-16 w-16 rounded-full"
                  src={detail.logo}
                  alt={detail.name}
                />
                <span
                  className="absolute inset-0 shadow-inner rounded-full"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-100">
                {detail.name}
              </h1>
              <p className="text-sm font-medium text-gray-300">
                Created on{" "}
                <time dateTime="2020-08-25">{detail.start_date}</time>
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
            <button
              type="button"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
            >
              Delete this event
            </button>
          </div>
        </div>

        <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <div className="space-y-6 lg:col-start-1 lg:col-span-2">
            <EventMainDetail eventDetail={detail} />
            <EventTicketVariants ticketVariants={detail.ticket_variants} />
          </div>
          <Organisers eventPartners={detail.partners} />
        </div>
      </main>
    </Layout>
  );
};

export default EventDetail;

export async function getServerSideProps(context: NextPageContext) {
  const { eventId } = context.query;
  const req = context.req;
  const res = context.res;
  const token = getCookie("org_token", { req, res });
  const response = await fetch(
    BOOKING_BASE_URL + "organiser-event-detail/" + eventId,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const detail = await response.json();

  if (!detail) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { detail },
  };
}
