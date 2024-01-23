import { Dialog, Transition } from '@headlessui/react';
import { EventTicketStore, orgTokenStore } from '@store/index';
import {
  OfferPrice,
  OriginalPrice,
  TotalTickets,
  Type,
} from './TicketVariantsInput';
import { Path, SubmitHandler, UseFormRegister, useForm } from 'react-hook-form';
import React, { Dispatch, Fragment, useEffect, useRef, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

import { BOOKING_BASE_URL } from '@constants/api-urls';
import axios from 'axios';

const TicketVariants = ({ eventId }: { eventId: string }) => {
  const { eventTickets, setEventTickets } = EventTicketStore();

  return (
    <section aria-labelledby='notes-title'>
      <div className='bg-neutral-800/50 shadow sm:overflow-hidden sm:rounded-lg'>
        <div className='divide-y divide-neutral-400'>
          <div className='flex justify-between px-4 py-5 sm:px-6'>
            <h2
              id='notes-title'
              className='text-lg font-medium text-neutral-100'
            >
              Ticket variants
            </h2>
            <AddTicketVariant eventId={eventId} />
          </div>
          <div className=''>
            <div className='mx-auto mt-8 max-w-5xl px-4 pb-12 sm:px-6'>
              <div className='mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2'>
                {eventTickets?.map((ticket) => (
                  <div
                    key={ticket.type}
                    className='relative flex items-center space-x-3 rounded-lg border border-neutral-500 bg-neutral-800/50 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 hover:border-neutral-400'
                  >
                    <div className='min-w-0 flex-1'>
                      <div className='space-y-2 focus:outline-none'>
                        {/* <span className="absolute inset-0" aria-hidden="true" /> */}
                        <p className='text-sm font-medium text-neutral-50'>
                          {ticket.type}
                        </p>
                        <p className='text-sm font-medium text-neutral-300'>
                          {ticket.available_tickets === ticket.total_tickets ? (
                            'No tickets had been soled'
                          ) : (
                            <span>
                              {' '}
                              ticket.available_tickets &quot;tickets available
                              out of&quot; ticket.total_tickets
                            </span>
                          )}
                        </p>
                        {ticket.available_tickets === ticket.total_tickets ? (
                          <p>{ticket.total_tickets} tickets available</p>
                        ) : (
                          <></>
                        )}
                        <p className='text-sm text-neutral-300'>
                          ₹ {ticket.original_price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketVariants;

export interface TicketFormValues {
  original_price: number;
  offer_price: number;
  type: string;
  total_tickets: number;
}

export type TicketInputProps = {
  label: string;
  name: Path<TicketFormValues>;
  register: UseFormRegister<TicketFormValues>;
  required: boolean;
};

const AddTicketVariant = ({ eventId }: { eventId: string }) => {
  const { token } = orgTokenStore();
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const { register, handleSubmit } = useForm<TicketFormValues>();
  const { eventTickets, setEventTickets } = EventTicketStore();

  const onSubmit: SubmitHandler<TicketFormValues> = async (data) => {
    const newdata = {
      ...data,
      event: eventId,
    };

    try {
      const response = await axios.post(
        `${BOOKING_BASE_URL}add-ticket-variant`,
        newdata,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const newTickets = eventTickets?.concat({
        id: response.data.data.id,
        available_tickets: response.data.data.available_tickets,
        original_price: response.data.data.original_price,
        offer_price: response.data.data.offer_price,
        type: response.data.data.type,
        total_tickets: response.data.data.total_tickets,
        event: response.data.data.event,
      });

      newTickets && setEventTickets(newTickets);
      toast.success('Ticket variant added');

      setOpen(false);
    } catch (e) {
      toast.error('Cannot add ticket variant');
      console.log(e);
    }
  };

  return (
    <>
      <Toaster />
      <button
        onClick={() => setOpen(true)}
        type='button'
        className='inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-100'
      >
        Add ticket variant
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-neutral-900/50 backdrop-blur-md' />
            {/* <Dialog.Overlay className="fixed inset-0 bg-neutral-500/75" /> */}
          </Transition.Child>

          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-neutral-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='bg-neutral-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4 '
                  >
                    <div className='flex justify-center text-base '>
                      Add Ticket Variant
                    </div>
                    <div className='mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6'>
                      {/* {eventId} */}
                      <OriginalPrice
                        label='Original Price'
                        name='original_price'
                        register={register}
                        required
                      />

                      <OfferPrice
                        label='Offer Price'
                        name='offer_price'
                        register={register}
                        required
                      />
                      <Type
                        label='Ticket type'
                        name='type'
                        register={register}
                        required
                      />
                      <TotalTickets
                        label='Total tickets'
                        name='total_tickets'
                        register={register}
                        required
                      />
                    </div>

                    <div className='flex justify-center py-4'>
                      <button
                        type='submit'
                        className='inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-100'
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
