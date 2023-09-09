import { FundraiserStore, orgTokenStore } from "@store/index";
import React, { useEffect, useState } from "react";

import { CRAWDFUNDING_BASE_URL } from "@constants/api-urls";
import CreateFundraiser from "@components/Organiser/fundraiser/CreateFundraiser";
import Layout from "@components/Organiser/Layout/Layout";
import Link from "next/link";
import { NextPageContext } from "next";
import { getCookie } from "cookies-next";

export interface FundraiserEventProps {
  id: string;
  title: string;
  goal: string;
  description: string;
  open_status: boolean;
  created_at: string;
  organiser: string;
  organiser_name: string;
  approved_status: string;
}

const Fundraiser = ({
  token,
  fundraiserEvents,
}: {
  token: string;
  fundraiserEvents: FundraiserEventProps[];
}) => {
  const { setOrgToken } = orgTokenStore();
  const { fundraisers, setFundraisers } = FundraiserStore();

  useEffect(() => {
    setOrgToken(token);
  }, [token]);

  useEffect(() => {
    setFundraisers(fundraiserEvents);
  }, [fundraiserEvents]);

  return (
    <Layout>
      <div className="bg-transparent py-20 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
              Your Fundraiser Events
            </h2>
            {/* <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p> */}
            <CreateFundraiser />
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-400 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {fundraisers &&
              fundraisers.map((event) => (
                <article
                  key={event.id}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    {/* <time dateTime={event.datetime} className="text-gray-300">
                    {event.date}
                  </time> */}
                    <span>{event.created_at}</span>
                    <a
                      href="#!"
                      className="relative z-10 rounded-full bg-[#DCFCE7] px-3 py-1.5 font-medium text-[#166534] hover:bg-gray-100"
                    >
                      {event.open_status ? "Active" : "Close"}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-200 ">
                      {/* group-hover:text-gray-600 */}

                      <Link href={`fundraiser-detail/` + event.id}>
                        <span className="absolute inset-0 text-gray-200 cursor-pointer" />
                        {event.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-200">
                      {event.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-blue-500">
                        <a href="#!">
                          <span className="absolute inset-0" />
                          {/* {event.author.name + " Donars"} */}
                          100 Donars
                        </a>
                      </p>
                      {/* <p className="text-gray-600">{post.author.role}</p> */}
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Fundraiser;

export async function getServerSideProps(context: NextPageContext) {
  const req = context.req;
  const res = context.res;
  const token = getCookie("org_token", { req, res });

  const response = await fetch(
    CRAWDFUNDING_BASE_URL + "create-fundraiser-event",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const fundraiserEvents = await response.json();

  return {
    props: { token, fundraiserEvents },
  };
}
