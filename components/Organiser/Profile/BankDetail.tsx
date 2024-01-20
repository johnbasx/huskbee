import {
  BankDetailProps,
  ProfileContent,
} from '../../../pages/organiser/profile';
import { CheckBadgeIcon, PlayCircleIcon } from '@heroicons/react/24/outline';
import React, { ReactNode } from 'react';

import { Tab } from '@headlessui/react';
import { USER_BASE_URL } from '@constants/api-urls';
import axios from 'axios';
import clsx from 'clsx';
import { orgTokenStore } from '@store/index';
import toast from 'react-hot-toast';

const BankDetail = ({ BankAccounts }: { BankAccounts: BankDetailProps[] }) => {
  const { token } = orgTokenStore();

  const MarkDefault = async (
    e: React.MouseEvent,
    id: string,
    mark_default: Boolean
  ) => {
    e.preventDefault();

    if (!mark_default) {
      try {
        const response = await axios.put(
          USER_BASE_URL + 'update-organiser-bank/' + id,
          { default: true },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log(response);
        toast.success(`Default marked`);
      } catch (e) {
        toast.error(`Cannot mark default`);
        console.log(e);
      }
    } else {
      toast.success('Already mark as default account');
    }
  };

  return (
    <Wrapper BankAccounts={BankAccounts}>
      {BankAccounts.length > 0 ? (
        BankAccounts.map((detail, idx) => (
          <React.Fragment key={`bank-account-${idx}`}>
            <Tab.Panel
              className={clsx(
                'rounded-xl bg-transparent p-3',
                'ring-white ring-opacity-60 ring-offset-2  focus:outline-none '
              )}
            >
              <ProfileContent
                lookUp={detail.id}
                name='acc_name'
                label='Account name'
                value={detail.acc_name}
                link='update-organiser-bank/'
              />
              <ProfileContent
                lookUp={detail.id}
                name='acc_number'
                label='Acc number'
                value={detail.acc_number}
                link='update-organiser-bank/'
              />
              <ProfileContent
                lookUp={detail.id}
                name='ifsc'
                label='IFSC'
                value={detail.ifsc}
                link='update-organiser-bank/'
              />
              <ProfileContent
                lookUp={detail.id}
                name='branch'
                label='Branch'
                value={detail.branch}
                link='update-organiser-bank/'
              />
              {!detail.default && (
                <button
                  type='button'
                  onClick={(e) => MarkDefault(e, detail.id, detail.default)}
                  className='flex items-center justify-center gap-x-2.5 p-3 font-semibold text-neutral-900 hover:bg-neutral-100'
                >
                  <PlayCircleIcon
                    className='h-5 w-5 flex-none text-neutral-400'
                    aria-hidden='true'
                  />
                  Mark as default
                </button>
              )}
            </Tab.Panel>
          </React.Fragment>
        ))
      ) : (
        <span className='text-black'>No Bank account added</span>
      )}
    </Wrapper>
  );
};

export default BankDetail;

const Wrapper = ({
  children,
  BankAccounts,
}: {
  children: ReactNode;
  BankAccounts: BankDetailProps[];
}) => {
  return (
    <div className='w-full max-w-full px-2 sm:px-0'>
      <Tab.Group>
        <Tab.List className='flex space-x-1 rounded-xl bg-transparent p-1'>
          {BankAccounts.map((detail) => (
            <Tab
              key={detail.id}
              className={({ selected }) =>
                clsx(
                  'w-full py-2.5 text-sm font-medium leading-5 text-neutral-50',
                  'ring-white focus:outline-none',
                  selected
                    ? 'border-b-2 border-white border-b-blue-400 shadow'
                    : 'border-b-2 border-b-white text-neutral-700 hover:bg-white/[0.12]'
                )
              }
            >
              <span className='flex justify-center gap-x-2 text-xl text-black'>
                {detail.acc_name}{' '}
                {detail.default && (
                  <CheckBadgeIcon className='h-7 w-7 font-bold text-green-500' />
                )}
              </span>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>{children}</Tab.Panels>
      </Tab.Group>
    </div>
  );
};
