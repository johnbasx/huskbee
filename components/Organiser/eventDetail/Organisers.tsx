import { BASE_URL, BOOKING_BASE_URL } from "@constants/api-urls";
import React from "react";
import { eventPartnersStore, orgTokenStore } from "@store/index";
import toast, { Toaster } from "react-hot-toast";

import AddEventPartner from "./AddEventPartner";
import axios from "axios";

const Organisers = ({ eventId }: { eventId: string }) => {
  const { token } = orgTokenStore();

  const { partners, setPartners } = eventPartnersStore();

  const DeletePartnerHandler = async (partnerId: string) => {
    const data ={
      partner_id: partnerId,
      event_id: eventId
    }
    try {
      const response = await axios.post(
        BOOKING_BASE_URL + "remove-partner-event",
        data,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      toast.success("Partner removed successfully");

      const newPartners = partners?.filter(
        (partner) => partner.id !== partnerId
      );
      setPartners(newPartners!);
    } catch (e: any) {
      toast.error("Cannot delete partner !");
      console.log(e);
    }
  };

  return (
    <>
      <Toaster />
      <section
        aria-labelledby="timeline-title"
        className="lg:col-start-3 lg:col-span-1"
      >
        <div className="bg-gray-800/50 px-4 py-5 shadow sm:rounded-lg sm:px-6">
          <div>
            <h3 className="font-medium text-gray-100">Event partners</h3>
            <ul role="list" className="mt-2 ">
              {partners &&
                partners.map((detail) => (
                  <li
                    key={detail.id}
                    className="cursor-pointer py-3 flex justify-between items-center border-b border-transparent hover:border-gray-400"
                  >
                    <div className="flex items-center">
                      <img
                        src={BASE_URL + detail.logo}
                        alt=""
                        className="w-8 h-8 rounded-full"
                      />
                      <p className="ml-4 text-sm font-medium text-gray-100">
                        {detail.name}
                      </p>
                    </div>
                    <a
                      onClick={() => DeletePartnerHandler(detail.id)}
                      className="ml-6 bg-transparent rounded-md text-sm font-medium text-red-300 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                    >
                      Remove<span className="sr-only"> {detail.name}</span>
                    </a>
                  </li>
                ))}
              <li className="py-2 flex justify-between items-center">
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
