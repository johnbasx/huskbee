import { BOOKING_BASE_URL } from "@constants/api-urls";
import EventDescription from "@components/eventDetail/EventDetail";
import { Fragment } from "react";
import Layout from "@components/layout/Layout";
import Link from "next/link";
import { NextPageContext } from "next";
import Organisers from "@components/eventDetail/Organisers";
import ProductImage from "@components/eventDetail/ProductImage";
import React from "react";
import ShareOnSocial from "@components/eventDetail/ShareOnSocial";
import { useRouter } from "next/router";
import Moment from "react-moment";

export interface OrganiserProps {
  id: string;
  name: string;
  logo: string;
  organiser_type: string;
  created_at: Date;
  updated_at: Date;
  user: number;
}

export interface EventDetailProps {
  id: string;
  organiser: OrganiserProps[];
  name: string;
  tag_line: string;
  description: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  logo: string;
  event_type: string;
  hero_image: string;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const EventDetail = ({ event_detail }: { event_detail: EventDetailProps }) => {
  const router = useRouter();
  const { eventid } = router.query;
  // console.log(event_detail);
  return (
    <Layout>
      <div className="border-none bg-transparent">
        <div className="mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* Product */}
          <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
            {/* Product image */}
            <ProductImage
              ImageSrc={event_detail.hero_image}
              ImageAlt={event_detail.name}
            />

            {/* Event details */}
            <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
              <EventDescription
                event={event_detail.id}
                name={event_detail.name}
                startDate={event_detail.start_date}
                startTime={event_detail.start_time}
                endDate={event_detail.end_date}
                description={event_detail.description}
              />

              {/* <div className="border-t border-gray-200 mt-10 pt-10">
                <h3 className="text-sm font-medium">Highlights</h3>
                <div className="mt-4 prose prose-sm text-gray-500">
                  <ul role="list">
                    {product.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div> */}

              <Organisers organisers={event_detail.organiser} />

              <ShareOnSocial />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;

export async function getServerSideProps(context: NextPageContext) {
  const { eventId } = context.query;
  const response = await fetch(BOOKING_BASE_URL + "event-detail/" + eventId);
  const event_detail = await response.json();
  return {
    props: { event_detail },
  };
}
