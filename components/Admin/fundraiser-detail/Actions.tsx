import { Toaster, toast } from 'react-hot-toast';

import { CROWDFUNDING_BASE_URL } from '@constants/api-urls';
import { FundraiserDetailStore } from '@store/office-admin-store';
import React from 'react';
import axios from 'axios';
import { orgTokenStore } from '@store/index';

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

    const url = `${CROWDFUNDING_BASE_URL}approve-crowd-funding/${fundraiserId}`;
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
      <div className='mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8'>
        <div className='mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3'>
          <button
            type='button'
            onClick={(e) =>
              OnClickHandler({
                e: e,
                data: { approved_status: 'RE' },
                msg: 'Fundraiser Rejected',
              })
            }
            className='inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-100'
          >
            Reject with mail
          </button>
          <button
            type='button'
            onClick={(e) =>
              OnClickHandler({
                e: e,
                data: { approved_status: 'AP' },
                msg: 'Fundraiser event approved',
              })
            }
            className='inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-100'
          >
            Approved this event
          </button>
        </div>
      </div>
    </>
  );
};

export default Actions;
