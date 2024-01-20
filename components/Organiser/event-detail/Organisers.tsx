import { BASE_URL, BOOKING_BASE_URL } from '@constants/api-urls';
import React from 'react';
import { eventPartnersStore, orgTokenStore } from '@store/index';
import toast, { Toaster } from 'react-hot-toast';

import AddEventPartner from './AddEventPartner';
import axios from 'axios';
import Image from 'next/image';

const Organisers = ({ eventId }: { eventId: string }) => {
  const { token } = orgTokenStore();

  const { partners, setPartners } = eventPartnersStore();

  const deletePartnerHandler = async (partnerId: string) => {
    const data = {
      partner_id: partnerId,
      event_id: eventId,
    };
    try {
      const response = await axios.post(
        `${BOOKING_BASE_URL}remove-partner-event`,
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success('Partner removed successfully');

      const newPartners = partners?.filter(
        (partner) => partner.id !== partnerId
      );
      newPartners && setPartners(newPartners);
    } catch (e) {
      toast.error('Cannot delete partner !');
      console.log(e);
    }
  };

  return (
    <>
      <Toaster />
      <section
        aria-labelledby='timeline-title'
        className='lg:col-span-1 lg:col-start-3'
      >
        <div className='bg-neutral-800/50 px-4 py-5 shadow sm:rounded-lg sm:px-6'>
          <div>
            <h3 className='font-medium text-neutral-100'>Event partners</h3>
            <ul className='mt-2 '>
              {partners?.map((detail) => (
                <li
                  key={detail.id}
                  className='flex cursor-pointer items-center justify-between border-b border-transparent py-3 hover:border-neutral-400'
                >
                  <div className='flex items-center'>
                    <Image
                      height={20}
                      width={20}
                      quality={30}
                      src={BASE_URL + detail.logo}
                      alt=''
                      className='h-8 w-8 rounded-full'
                    />
                    <p className='ml-4 text-sm font-medium text-neutral-100'>
                      {detail.name}
                    </p>
                  </div>
                  <button
                    type='button'
                    onClick={() => deletePartnerHandler(detail.id)}
                    className='ml-6 cursor-pointer rounded-md bg-transparent text-sm font-medium text-red-300 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  >
                    Remove<span className='sr-only'> {detail.name}</span>
                  </button>
                </li>
              ))}
              <li className='flex items-center justify-between py-2'>
                <AddEventPartner eventId={eventId} />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Organisers;
