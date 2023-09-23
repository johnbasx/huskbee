import { Toaster, toast } from "react-hot-toast";

import { CRAWDFUNDING_BASE_URL } from "@constants/api-urls";
import { FundraiserDetailStore } from "@store/office-admin-store";
import React from "react";
import axios from "axios";
import { orgTokenStore } from "@store/index";

type onClickParamType = {
  e: React.MouseEvent;
  data: { approved_status: string };
  msg: string;
};

const Actions = ({ fundraiserId }: { fundraiserId: string }) => {
  const { office_admin_token } = orgTokenStore();
  const { status, setStatus } = FundraiserDetailStore();

  const OnClickHandler = async ({ e, data, msg }: onClickParamType) => {
    e.preventDefault();

    const url = CRAWDFUNDING_BASE_URL + "approve-crowd-funding/" + fundraiserId;
    try {
      const response = await axios.put(url, data, {
        headers: {
          Authorization: `Bearer ${office_admin_token}`,
        },
      });
      setStatus(response.data.approved_status);
      toast.success(msg);
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <>
      <Toaster />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
        <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
          <button
            type="button"
            onClick={(e) =>
              OnClickHandler({
                e: e,
                data: { approved_status: "RE" },
                msg: "Fundraiser Rejected",
              })
            }
            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          >
            Reject with mail
          </button>
          <button
            type="button"
            onClick={(e) =>
              OnClickHandler({
                e: e,
                data: { approved_status: "AP" },
                msg: "Fundraiser event approved",
              })
            }
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          >
            Approved this event
          </button>
        </div>
      </div>
    </>
  );
};

export default Actions;
