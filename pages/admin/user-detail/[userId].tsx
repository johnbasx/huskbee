import { CRAWDFUNDING_BASE_URL, USER_BASE_URL } from "@constants/api-urls";

import { DonationProps } from "../../organiser/fundraiser-detail/[fundraiserId]";
import Donations from "@components/Admin/DonorDetail/Donations";
import Layout from "@components/Admin/Layout/Layout";
import { NextPageContext } from "next";
import React from "react";
import { getCookie } from "cookies-next";

interface HuskbeeUser {
  full_name: string;
  total_donation_amount: number;
  email: string;
  phone: string;
  photo: string;
  created_at: string;
}
const DonorDetail = ({
  detail,
  donations,
}: {
  detail: HuskbeeUser;
  donations: DonationProps[];
}) => {
  return (
    <Layout pageTitle="Donor detail">
      <div className="max-w-6xl my-10 mx-auto bg-white shadow overflow-hidden sm:rounded-lg space-y-4">
        <div>
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Donor's Information
            </h3>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 capitalize">
                  {detail.full_name}
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Phone number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {detail.phone}
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {detail.email}
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Account created on
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {detail.created_at}
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Total donated amount
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {"₹ " + detail.total_donation_amount}
                </dd>
              </div>

              {/* <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 flex-1 w-0 truncate">resume_back_end_developer.pdf</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 flex-1 w-0 truncate">coverletter_back_end_developer.pdf</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div> */}
            </dl>
          </div>
        </div>
        <div>
          <Donations donations={donations} donor={detail.full_name} />
        </div>
      </div>
    </Layout>
  );
};

export default DonorDetail;

export async function getServerSideProps(context: NextPageContext) {
  const { userId } = context.query;
  const req = context.req;
  const res = context.res;
  const token = getCookie("admin_token", { req, res });

  const response = await fetch(
    USER_BASE_URL + "huskbee-user-detail/" + userId,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const detail = await response.json();

  const donations_res = await fetch(
    CRAWDFUNDING_BASE_URL + "user-donations/" + userId,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const donations = await donations_res.json();

  if (!detail) {
    return {
      redirect: {
        destination: "admin/home",
        permanent: false,
      },
    };
  }

  return {
    props: { token, detail, donations },
  };
}
