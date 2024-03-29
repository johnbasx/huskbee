import {
  DonationProps,
  FundraiserEventsProps,
} from '../../organiser/fundraiser-detail/[fundraiserId]';
import React, { useEffect } from 'react';

import Actions from '@components/admin/fundraiser-detail/Actions';
import { CROWDFUNDING_BASE_URL } from '@constants/api-urls';
import DetailWrapper from '@components/admin/fundraiser-detail/DetailWrapper';
import Donors from '@components/admin/fundraiser-detail/Donors';
import { FundraiserDetailStore } from '@store/office-admin-store';
import Layout from '@components/admin/layout/Layout';
import Link from 'next/link';
import { NextPageContext } from 'next';
import { PaperClipIcon } from '@heroicons/react/24/outline';
import { Toaster } from 'react-hot-toast';
import { getCookie } from 'cookies-next';
import { orgTokenStore } from '@store/index';

const attachments = [
  { name: 'resume_front_end_developer.pdf', href: '#!' },
  { name: 'coverletter_front_end_developer.pdf', href: '#!' },
];

interface FundraiserProp {
  token: string;
  detail: FundraiserEventsProps;
  donors: DonationProps[];
}

const FundraiserDetail = ({ token, detail, donors }: FundraiserProp) => {
  const { setOfficeAdminToken } = orgTokenStore();
  const { status, setStatus } = FundraiserDetailStore();

  const firstLoad = () => {
    setOfficeAdminToken(token);
    setStatus(detail.approved_status);
  };
  firstLoad();
  // useEffect(() => {
  //   firstLoad()
  // }, []);

  return (
    <Layout pageTitle='Fundraiser detail'>
      <Toaster />
      <main className='py-10'>
        <Actions fundraiserId={detail.id} />

        <div className='mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3'>
          <DetailWrapper status={status}>
            <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
              <div className='sm:col-span-1'>
                <DataDisplay
                  orgId={detail.organiser}
                  title='Title'
                  content={detail.title}
                />
              </div>
              <div className='sm:col-span-1'>
                <DataDisplay
                  orgId={detail.organiser}
                  title='Organise by'
                  content={detail.organiser_name}
                />
              </div>
              <div className='sm:col-span-1'>
                <DataDisplay
                  orgId={detail.organiser}
                  title='Goal'
                  content={`${detail.goal}Lorem ipsum dolor sit amet consecteturadipisicing elit. Iure, nemo.`}
                />
              </div>
              <div className='sm:col-span-1'>
                <DataDisplay
                  orgId={detail.organiser}
                  title='Target Amount'
                  content={`₹ ${detail.target_amount}`}
                />
              </div>
              <div className='sm:col-span-1'>
                <DataDisplay
                  orgId={detail.organiser}
                  title='Created on'
                  content={detail.created_at}
                />
              </div>
              <div className='sm:col-span-2'>
                <DataDisplay
                  orgId={detail.organiser}
                  title='Description'
                  content={`Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.${detail.description}`}
                />
              </div>
              <div className='sm:col-span-2'>
                <dt className='text-sm font-medium text-neutral-500'>
                  Attachments
                </dt>
                <dd className=' mt-1 text-sm text-neutral-900'>
                  <ul className='divide-y divide-neutral-200 rounded-md border border-neutral-200'>
                    {attachments.map((attachment) => (
                      <li
                        key={attachment.name}
                        className='flex items-center justify-between py-3 pl-3 pr-4 text-sm'
                      >
                        <div className='flex w-0 flex-1 items-center'>
                          <PaperClipIcon
                            className='h-5 w-5 flex-shrink-0 text-neutral-400'
                            aria-hidden='true'
                          />
                          <span className='ml-2 w-0 flex-1 truncate'>
                            {attachment.name}
                          </span>
                        </div>
                        <div className='ml-4 flex-shrink-0'>
                          <a
                            href={attachment.href}
                            className='font-medium text-blue-600 hover:text-blue-500'
                          >
                            Download
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </DetailWrapper>

          <Donors donors={donors} />
        </div>
      </main>
    </Layout>
  );
};

export default FundraiserDetail;

export const DataDisplay = ({
  orgId,
  title,
  content,
}: {
  orgId: string | null;
  title: string;
  content: string;
}) => {
  return (
    <>
      <dt className='text-sm font-medium text-neutral-500'>{title}</dt>
      {title === 'Organise by' ? (
        <Link href={`/admin/organiser-detail/${orgId}`}>
          <dd className='mt-1 text-sm capitalize text-blue-600'>{content}</dd>
        </Link>
      ) : (
        <dd className='mt-1 text-sm capitalize text-neutral-900'>{content}</dd>
      )}
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const { fundraiserId } = context.query;
  const req = context.req;
  const res = context.res;
  const token = getCookie('admin_token', { req, res });

  const response = await fetch(
    `${CROWDFUNDING_BASE_URL}a-fundraiser-detail/${fundraiserId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const detail = await response.json();

  const donors_res = await fetch(
    `${CROWDFUNDING_BASE_URL}a-fund-donors/${fundraiserId}`,
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
        destination: '/home',
        permanent: false,
      },
    };
  }

  return {
    props: { token, detail, donors },
  };
}
