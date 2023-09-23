import { BASE_URL, CRAWDFUNDING_BASE_URL } from "@constants/api-urls";
import {
  EnvelopeIcon,
  PaperClipIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import React, { Dispatch, useEffect, useState } from "react";

import { FundraiserEventProps } from "../fundraiser";
import Layout from "@components/Organiser/Layout/Layout";
import { NextPageContext } from "next";
import UploadPhoto from "@components/Organiser/UploadPhoto";
import { getCookie } from "cookies-next";
import { orgTokenStore } from "@store/index";

export type FunraiserPhotoType = {
  id: string;
  photo: string;
  fundraiser: string;
};
export interface FundraiserEventsProps extends FundraiserEventProps {
  fundraiser_photo: FunraiserPhotoType[];
}

export interface DonationProps {
  id: string;
  donor_id: string;
  donated_to: string;
  donated_by: string;
  amount: number;
  fundraiser_title: string;
  organise_by: string;
  donor_name: string;
  donor_email: string;
  organiser_email: string;
  donor_photo_url: string;
  created_at: string;
}

type PhotoType = {
  image: File;
};
const FunraiserDetail = ({
  token,
  fundraiserId,
  detail,
  donors,
}: {
  token: string;
  fundraiserId: string;
  detail: FundraiserEventsProps;
  donors: DonationProps[];
}) => {
  const [photo, setPhoto] = useState<PhotoType>();
  const { setOrgToken } = orgTokenStore();
  useEffect(() => {
    setOrgToken(token);
  }, []);

  return (
    <Layout>
      {/* <div>FunraiserDetail {fundraiserId}</div> */}
      <div className="max-w-5xl mx-auto py-20">
        <div className="px-4 sm:px-0">
          <h3 className="text-2xl font-semibold leading-7 text-gray-200">
            Fundraiser detail
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div className="mt-6 border-t border-gray-400">
          <dl className="divide-y divide-gray-400">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-200">
                Title
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
                {detail.title}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-200">
                Goal
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
                {detail.goal}
              </dd>
            </div>
            {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-200">
                Email address
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
                margotfoster@example.com
              </dd>
            </div> */}
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-200">
                Total donars
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
                120,000
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-200">
                Description
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
                {detail.description}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mx-auto py-20">
          <div className="px-4 sm:px-0 mb-10">
            <h3 className="text-2xl font-semibold leading-7 text-gray-200">
              Donors
            </h3>
          </div>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {donors &&
              donors.map((donor) => (
                <li
                  key={donor.created_at}
                  className="col-span-1 flex flex-col text-center bg-white rounded-lg  divide-y divide-gray-200 shadow-xl"
                >
                  <div className="flex-1 flex flex-col p-8">
                    <img
                      className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
                      src={BASE_URL + donor.donor_photo_url}
                      alt=""
                    />
                    <h3 className="mt-6 text-gray-900 text-sm font-medium">
                      {donor.donor_email}
                    </h3>
                    <dl className="mt-1 flex-grow flex flex-col justify-between">
                      <dt className="sr-only">Title</dt>
                      <dd className="text-gray-500 text-sm">
                        {donor.donor_name}
                      </dd>
                      <dt className="sr-only">Role</dt>
                      <dd className="mt-3">
                        <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                          {"Donated ₹" + donor.amount}
                        </span>
                      </dd>
                    </dl>
                  </div>
                  {/* <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="w-0 flex-1 flex">
                      <a
                        href={`mailto:${person.email}`}
                        className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                      >
                        <EnvelopeIcon
                          className="w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3">Email</span>
                      </a>
                    </div>
                    <div className="-ml-px w-0 flex-1 flex">
                      <a
                        href={`tel:${person.telephone}`}
                        className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                      >
                        <PhoneIcon
                          className="w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3">Call</span>
                      </a>
                    </div>
                  </div>
                </div> */}
                </li>
              ))}
          </ul>
        </div>
      </div>

      <UploadPhoto funraiserId={fundraiserId} />
    </Layout>
  );
};

export default FunraiserDetail;

export async function getServerSideProps(context: NextPageContext) {
  const { fundraiserId } = context.query;
  const req = context.req;
  const res = context.res;
  const token = getCookie("org_token", { req, res });

  const response = await fetch(
    CRAWDFUNDING_BASE_URL + "fundraiser-detail/" + fundraiserId,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const detail = await response.json();

  const donors_res = await fetch(
    CRAWDFUNDING_BASE_URL + "donors/" + fundraiserId,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const donors = await donors_res.json();

  if (!detail || !donors) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  return {
    props: { token, fundraiserId, detail, donors },
  };
}
