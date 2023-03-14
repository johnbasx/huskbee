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
import { Tab } from "@headlessui/react";
import cookie from "cookie";

export interface Organiser {
  id: string;
  name: string;
  logo: string;
  organiser_type: string;
  created_at: Date;
  updated_at: Date;
  user: number;
}

export interface RootObject {
  id: string;
  organiser: Organiser[];
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

const product = {
  name: "Application UI Icon Pack",
  version: { name: "1.0", date: "June 5, 2021", datetime: "2021-06-05" },
  price: "$220",
  description:
    "The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.",
  highlights: [
    "200+ SVG icons in 3 unique styles",
    "Compatible with Figma, Sketch, and Adobe XD",
    "Drawn on 24 x 24 pixel grid",
  ],
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-page-05-product-01.jpg",
  imageAlt:
    "Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.",
};
const reviews = {
  average: 4,
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
      date: "July 16, 2021",
      datetime: "2021-07-16",
      author: "Emily Selman",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
      `,
      date: "July 12, 2021",
      datetime: "2021-07-12",
      author: "Hector Gibbons",
      avatarSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
  ],
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const EventDetail = ({ event_detail }: { event_detail: RootObject }) => {
  console.log(event_detail);
  return (
    <Layout>
      <div className="border-none bg-transparent">
        <div className="mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* Product */}
          <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
            {/* Product image */}
            <ProductImage
              ImageSrc={product.imageSrc}
              ImageAlt={product.imageAlt}
            />

            {/* Event details */}
            <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
              <EventDescription
                name={product.name}
                version={product.version.name}
                datetime={product.version.datetime}
                date={product.version.date}
                review={reviews.average}
                description={product.description}
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

              <Organisers />

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
  console.log(event_detail);
  //   console.log("From Server: ", context);
  // console.log(
  //   "cookie ",
  //   cookie.parse(
  //     context.req ? context.req.headers.cookie || "" : document.cookie
  //   )
  // );

  return {
    props: { event_detail },
  };
}
