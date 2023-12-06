import { Toaster, toast } from "react-hot-toast";

import { OrganiserProfileProps } from "../../../pages/organiser/profile";
import React from "react";
import { USER_BASE_URL } from "@constants/api-urls";
import axios from "axios";
import { orgTokenStore } from "@store/index";

const OrganisationInfo = ({
  detail,
  title,
}: {
  detail: OrganiserProfileProps;
  title: string;
}) => {
  const { office_admin_token } = orgTokenStore();
  const ApprovedOrganiser = async () => {
    try {
      const response = await axios.put(
        USER_BASE_URL + "approved-organiser/" + detail.user_id,
        { is_active: true },
        {
          headers: { Authorization: "Bearer " + office_admin_token },
        }
      );

      // console.log("fundraiser_response: ", response.data);

      // const fundraiser = fundraisers?.concat({
      //   id: response.data.id,
      //   title: response.data.title,
      //   goal: response.data.goal,
      //   description: response.data.description,
      //   open_status: response.data.open_status,
      //   created_at: response.data.created_at,
      //   organiser: response.data.organiser,
      // });

      // setFundraisers(fundraiser!);

      toast.success("Organiser approved");
    } catch (e: any) {
      toast.error("Organiser cannot approved");
      console.log(e);
    }
  };

  return (
    <>
      <Toaster />
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="flex justify-between px-4 py-5 sm:px-6">
          <div className="flex space-x-2">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {title}
            </h3>
            {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Personal details and application.
        </p> */}
            <span></span>
            {detail.status ? (
              <span className="text-green-700">Active</span>
            ) : (
              <span className="text-red-500">Not active</span>
            )}
          </div>
          <button
            onClick={() => ApprovedOrganiser()}
            type="button"
            className="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
          >
            Approve
          </button>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <DataDisplay
              bgColor="bg-gray-50"
              title="Full name"
              content={detail.name}
            />
            <DataDisplay
              bgColor="bg-white"
              title="Organisation name"
              content={detail.organisation_name}
            />
            <DataDisplay
              bgColor="bg-gray-50"
              title="Email address"
              content={detail.email}
            />
            <DataDisplay
              bgColor="bg-white"
              title="Organisation type"
              content={detail.organiser_type}
            />
            <DataDisplay
              bgColor="bg-gray-50"
              title="Description"
              content={detail.description}
            />
          </dl>
        </div>
      </div>
    </>
  );
};

export default OrganisationInfo;

export const DataDisplay = ({
  bgColor,
  title,
  content,
}: {
  bgColor: string;
  title: string;
  content: string;
}) => {
  return (
    <div
      className={`${bgColor} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
    >
      <dt className="text-sm font-medium text-gray-500">{title}</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {content}
      </dd>
    </div>
  );
};
