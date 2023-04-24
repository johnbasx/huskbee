import React from "react";
import { TicketVariantProps } from "../../../pages/event-detail/[eventId]";

const EventTicketVariants = ({
  ticketVariants,
}: {
  ticketVariants: TicketVariantProps[];
}) => {
  return (
    <section aria-labelledby="notes-title">
      <div className="bg-gray-800/50 shadow sm:rounded-lg sm:overflow-hidden">
        <div className="divide-y divide-gray-400">
          <div className="px-4 py-5 sm:px-6">
            <h2 id="notes-title" className="text-lg font-medium text-gray-100">
              Ticket variants
            </h2>
          </div>
          <div className="">
            <div className="mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6">
              <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {ticketVariants.map((ticket) => (
                  <div
                    key={ticket.type}
                    className="relative rounded-lg border border-gray-500 bg-gray-800/50 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="focus:outline-none space-y-2">
                        {/* <span className="absolute inset-0" aria-hidden="true" /> */}
                        <p className="text-sm font-medium text-gray-50">
                          {ticket.type}
                        </p>
                        <p className="text-sm font-medium text-gray-300">
                          {ticket.available_tickets === ticket.total_tickets ? (
                            "No tickets had been soled"
                          ) : (
                            <span>
                              {" "}
                              ticket.available_tickets "tickets available out
                              of" ticket.total_tickets
                            </span>
                          )}
                        </p>
                        {ticket.available_tickets === ticket.total_tickets ? (
                          <p>{ticket.total_tickets} tickets available</p>
                        ) : (
                          <></>
                        )}
                        <p className="text-sm text-gray-300">
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

export default EventTicketVariants;
