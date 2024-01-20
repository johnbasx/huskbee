import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { EventNameStore, PaymentAmountStore } from '@store/index';
import React, { ChangeEvent, useEffect, useState } from 'react';

import { BOOKING_BASE_URL } from '@constants/api-urls';
import BookedBy from '@components/book-event/BookedBy';
import BookingSummary from '@components/book-event/BookingSummary';
import Layout from '@components/layout/Layout';
import { NextPageContext } from 'next/types';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';

interface TicketsProps {
  id: string;
  available_tickets: number;
  original_price: number;
  offer_price: number;
  type: string;
  total_tickets: number;
  event: string;
}
export interface SelectedTicketsProps {
  // [key: string]: number;
  event_name?: string;
  total_amount?: number;
}

const BookEvent = ({ eventTickets }: { eventTickets: TicketsProps[] }) => {
  const { eventName } = EventNameStore();
  const { setAmt } = PaymentAmountStore();

  const router = useRouter();
  const [subtotal, setSubtotal] = useState(0);
  const [gst, setGst] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);

  const [selected_tickets, setSelected_tickets] = useState<
    SelectedTicketsProps[]
  >([]);

  const Options = () => {
    var arr = [];

    for (let i = 0; i <= 5; i++) {
      arr.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return arr;
  };

  const selectHandler = async (
    event: ChangeEvent<HTMLSelectElement>,
    price: number,
    ticket: string
  ) => {
    const number_of_tickets = parseInt(event.target.value, 10);
    let index = selected_tickets.findIndex((x) => x.event_name === ticket);

    if (index < 0) {
      let ticket_obj = {
        event_name: ticket,
        total_amount: number_of_tickets * price,
      };
      setSelected_tickets([...selected_tickets, ticket_obj]);
    } else {
      let newArray = [...selected_tickets];
      newArray[index].total_amount = number_of_tickets * price;
      setSelected_tickets(newArray);
    }
  };

  useEffect(() => {
    let total = 0;

    for (let i = 0; i < selected_tickets.length; i++) {
      total += selected_tickets[i].total_amount!;
    }

    setSubtotal(total);
    setGst(0.05 * subtotal);
    setOrderTotal(subtotal + gst);
    setAmt(subtotal + gst);
  }, [selected_tickets, subtotal, gst]);

  return (
    <Layout title='event-book'>
      <div className='bg-white'>
        <div className='mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8'>
          <h1 className='text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl'>
            Available Tickets for{' '}
            <span className='font-base text-xl text-indigo-700'>
              {eventName}
            </span>
          </h1>
          <form className='mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16'>
            <section aria-labelledby='cart-heading' className='lg:col-span-7'>
              <h2 id='cart-heading' className='sr-only'>
                Items in your shopping cart
              </h2>

              <ul
                role='list'
                className='divide-y divide-neutral-200 border-t border-neutral-200'
              >
                {eventTickets.length > 0 ? (
                  eventTickets.map((ticket, ticketIdx) => (
                    <li key={ticket.id} className='flex py-6 sm:py-10'>
                      {/*<div className="flex-shrink-0">
                        <img
                          src={ticket.imageSrc}
                          alt={ticket.imageAlt}
                          className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                        />
                      </div> */}

                      <div className='ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
                        <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
                          <div>
                            <div className='flex justify-between'>
                              <h3 className='text-sm'>
                                <a
                                  href='#!'
                                  className='font-medium text-neutral-700 hover:text-neutral-800'
                                >
                                  {ticket.type}
                                </a>
                              </h3>
                            </div>
                            <div className='mt-1 flex text-sm'>
                              <p className='text-neutral-500'>
                                {ticket.total_tickets} Tickets
                              </p>
                            </div>
                            <p className='mt-1 text-sm font-medium text-neutral-900'>
                              ₹{ticket.offer_price}
                            </p>
                          </div>

                          <div className='mt-4 sm:mt-0 sm:pr-9'>
                            <label
                              htmlFor={`quantity-${ticketIdx}`}
                              className='sr-only'
                            >
                              Quantity, {ticket.type}
                            </label>
                            <select
                              disabled={
                                ticket.available_tickets === 0 ? true : false
                              }
                              onChange={(event) => {
                                selectHandler(
                                  event,
                                  ticket.offer_price,
                                  ticket.type
                                );
                              }}
                              id={`quantity-${ticketIdx}`}
                              name={`quantity-${ticketIdx}`}
                              className='max-w-full rounded-md border border-neutral-300 py-1.5 text-left text-base font-medium leading-5 text-neutral-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm'
                            >
                              {Options()}
                            </select>

                            {/* <div className="absolute top-0 right-0">
                            <button
                              type="button"
                              className="-m-2 p-2 inline-flex text-neutral-400 hover:text-neutral-500"
                            >
                              <span className="sr-only">Remove</span>
                              <XMarkIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </button>
                          </div> */}
                          </div>
                        </div>

                        <p className='mt-4 flex space-x-2 text-sm text-neutral-700'>
                          {ticket.available_tickets > 0 ? (
                            <CheckIcon
                              className='h-5 w-5 flex-shrink-0 text-green-500'
                              aria-hidden='true'
                            />
                          ) : (
                            <XMarkIcon
                              className='h-5 w-5 flex-shrink-0 text-red-500'
                              aria-hidden='true'
                            />
                          )}

                          <span>
                            {ticket.available_tickets > 0
                              ? `${ticket.available_tickets} tickets available`
                              : `All tickets solded out`}
                          </span>
                        </p>
                      </div>
                    </li>
                  ))
                ) : (
                  <p className='text-black'>
                    No tickets available for this event
                  </p>
                )}
              </ul>
            </section>

            {/* Order summary */}
            <BookingSummary
              subtotal={subtotal}
              gst={gst}
              orderTotal={orderTotal}
            />
          </form>
        </div>
      </div>
      {/* <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="relative">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <BookedBy />
              <AvailableTickets />
            </div>
          </div>

          <BookingSummary />
        </dl>
      </div> */}
    </Layout>
  );
};

export default BookEvent;

export async function getServerSideProps(context: NextPageContext) {
  const { eventId } = context.query;
  const req = context.req;
  const res = context.res;
  const token = getCookie('access_token', { req, res });

  const response = await fetch(BOOKING_BASE_URL + 'event-tickets/' + eventId, {
    headers: { Authorization: 'Bearer ' + token },
  });

  const instance = await response.json();
  const eventTickets = instance.results;
  console.log(eventTickets);
  return {
    props: { eventTickets },
  };
}
