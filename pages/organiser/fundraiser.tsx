import { FundraiserStore, orgTokenStore } from "@store/index";
import React, { useEffect, useState } from "react";

import { CROWDFUNDING_BASE_URL } from "@constants/api-urls";
import CreateFundraiser from "@components/Organiser/fundraiser/CreateFundraiser";
import { FormatDate } from "@utils/index";
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
  approved_status: string;
  target_amount: number;
  created_at: string;
  organiser: string;
  organiser_name: string;
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
      <div className="bg-transparent py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-xl font-bold tracking-tight text-gray-800 sm:text-3xl">
              Your Fundraiser Events
            </h2>
            {/* <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p> */}
            <CreateFundraiser />
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-400 pt-10 mt-6 sm:mt-6 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {fundraisers &&
              fundraisers.map((event) => (
                <article
                  key={event.id}
                  className="flex max-w-xl flex-col items-start justify-between border shadow-lg space-y-2 p-6"
                >
                  <div className="group relative">
                    <h3 className=" text-lg font-semibold leading-6 text-black">
                      {/* group-hover:text-gray-600 */}

                      <Link href={`fundraiser-detail/` + event.id}>
                        <span className="absolute inset-0 cursor-pointer" />
                        {event.title}
                      </Link>
                    </h3>
                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-700">
                      {event.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-700">
                        <a href="#!">
                          <span className="absolute inset-0" />
                          {/* {event.author.name + " Donars"} */}
                          100 Donors
                        </a>
                      </p>
                      {/* <p className="text-gray-600">{post.author.role}</p> */}
                    </div>
                  </div>
                  <div className="flex text-center gap-x-24 text-black text-sm">
                    {/* <time dateTime={event.datetime} className="text-gray-300">
                    {event.date}
                  </time> */}
                    <span className="font-medium mt-1">
                      Created on {FormatDate(event.created_at)}
                    </span>
                    {/* text-[#166534] bg-[#DCFCE7]*/}
                    <span
                      className={`relative z-10 rounded-full shadow-lg border-transparent border  ${
                        event.open_status ? "bg-[#7ce7a1]" : "bg-red-400"
                      } px-2 py-1 font-medium text-gray-900 hover:bg-gray-100 hover:border hover:border-gray-700 hover:shadow-xl`}
                    >
                      {event.open_status ? "Active" : "Close"}
                    </span>
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
    CROWDFUNDING_BASE_URL + "create-fundraiser-event",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const fundraiserEventsObj = await response.json();
  const fundraiserEvents = fundraiserEventsObj.results;

  return {
    props: { token, fundraiserEvents },
  };
}
