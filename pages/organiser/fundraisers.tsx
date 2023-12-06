import { FundraiserStore, orgTokenStore } from "@store/index";
import React, { useEffect } from "react";

import { FormatDate } from "@utils/index";
import Layout from "@components/Organiser/Layout/Layout";
import Link from "next/link";
import { NextPageContext } from "next";
import SearchFundraiser from "@components/Organiser/fundraiser/SearchFundraiser";
import { getCookie } from "cookies-next";

export interface FundraiserEventProps {
  id: string;
  title: string;
  goal: string;
  description: string;
  open_status: boolean;
  approved_status: string;
  target_amount: number;
  total_donors: number;
  total_donation: number;
  end_date: string;
  created_at: string;
  organiser: string;
  organiser_name: string;
}

const Fundraisers = ({ token }: { token: string }) => {
  const { setOrgToken } = orgTokenStore();
  const { fundraisers, setFundraisers } = FundraiserStore();

  useEffect(() => {
    setOrgToken(token);
  }, [token]);

  return (
    <Layout pageTitle="Your Fundraiser Events">
      <div className="bg-transparent py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SearchFundraiser setFundraisers={setFundraisers} />

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 mt-6 sm:mt-6 sm:pt-1 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {fundraisers &&
              fundraisers.map((event) => (
                <article
                  key={event.id}
                  className="flex max-w-xl flex-col items-start justify-between border rounded-lg shadow-lg space-y-2 p-6 bg-white"
                >
                  <div className="group relative">
                    <h3 className=" text-lg font-semibold leading-6 text-black">
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
                          {event.total_donors + " Donors"}
                        </a>
                      </p>
                      {/* <p className="text-gray-600">{post.author.role}</p> */}
                    </div>
                  </div>
                  <div className="flex flex-col w-full md:flex-row text-center justify-between text-black text-sm">
                    <div>
                      <span className="font-medium mt-1">
                        Created on{" "}
                        {/* {event.created_at + "  " + event.created_at.length} */}
                        {FormatDate(event.created_at)}
                      </span>
                    </div>
                    {/* text-[#166534] bg-[#DCFCE7]*/}
                    <div>
                      <span
                        className={`relative rounded-full shadow-lg border-transparent border  ${
                          event.open_status ? "bg-[#7ce7a1]" : "bg-red-400"
                        } px-2 py-1 font-medium text-black hover:text-black hover:bg-gray-100 hover:border hover:border-gray-700 hover:shadow-xl`}
                      >
                        {event.open_status ? "Active" : "Close"}
                      </span>
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

export default Fundraisers;

export async function getServerSideProps(context: NextPageContext) {
  const req = context.req;
  const res = context.res;
  const token = getCookie("org_token", { req, res });

  return {
    props: { token },
  };
}
