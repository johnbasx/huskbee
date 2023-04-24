import { EventDetailProps } from "../../../pages/event-detail/[eventId]";
import LogoHeroImage from "./LogoHeroImage";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import React from "react";

const EventMainDetail = ({
  eventDetail,
}: {
  eventDetail: EventDetailProps;
}) => {
  return (
    <section aria-labelledby="applicant-information-title">
      <div className="bg-gray-800/50 shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2
            id="applicant-information-title"
            className="text-lg leading-6 font-medium text-gray-100"
          >
            Event Detail
          </h2>
        </div>
        <div className="border-t border-gray-400 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-300">Event name</dt>
              <dd className="mt-1 text-sm text-gray-100">{eventDetail.name}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-300">Event type</dt>
              <dd className="mt-1 text-sm text-gray-100">
                {eventDetail.event_type}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-300">Start date</dt>
              <dd className="mt-1 text-sm text-gray-100">
                {eventDetail.start_date}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-300">End date</dt>
              <dd className="mt-1 text-sm text-gray-100">
                {eventDetail.end_date}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-300">Start time</dt>
              <dd className="mt-1 text-sm text-gray-100">
                {eventDetail.start_time}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-300">End time</dt>
              <dd className="mt-1 text-sm text-gray-100">
                {eventDetail.end_time}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-300">Tagline</dt>
              <dd className="mt-1 text-sm text-gray-100">
                {eventDetail.tag_line}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-300">Description</dt>
              <dd className="mt-1 text-sm text-gray-100">
                {eventDetail.description}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-300">Images</dt>
              <dd className="mt-1 text-sm text-gray-100">
                <ul
                  role="list"
                  className="border border-gray-400 rounded-md divide-y divide-gray-400"
                >
                  <LogoHeroImage name="Event logo" link={eventDetail.logo} />
                  <LogoHeroImage
                    name="Event hero image"
                    link={eventDetail.hero_image}
                  />
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default EventMainDetail;
