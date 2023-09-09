import { Dispatch, useEffect, useState } from "react";
import { notEventPartnersStore, orgTokenStore } from "@store/index";
import toast, { Toaster } from "react-hot-toast";

import { BOOKING_BASE_URL } from "@constants/api-urls";
import { EventPartnersProps } from "../../../pages/event-detail/[eventId]";
import axios from "axios";
import { eventPartnersStore } from "@store/index";

type SelectedPartnerType = {
  id: string;
  name: string;
};

const AssignExistingPartner = ({
  setOpen,
  eventId,
}: {
  filteredList: EventPartnersProps[];
  setOpen: Dispatch<boolean>;
  eventId: string;
}) => {
  const { token } = orgTokenStore();
  const { partners, setPartners } = eventPartnersStore();
  const { notEventPartners } = notEventPartnersStore();

  const [searchedPartners, setSearchedPartners] = useState<
    EventPartnersProps[] | null
  >(notEventPartners);

  const [selectedPartners, setselectedPartners] = useState<
    SelectedPartnerType[]
  >([]);

  const [partnersList, setPartnersList] = useState<string[]>([]);

  const SearchPartner = (query: string) => {
    const filteredList = query
      ? notEventPartners &&
        notEventPartners.filter((partner) =>
          partner.name.toLowerCase().includes(query.toLowerCase())
        )
      : notEventPartners;

    setSearchedPartners(filteredList);
  };

  const SelectHandler = (id: string, name: string) => {
    if (selectedPartners.find((partner) => partner.name == name) != null) {
      return;
    }
    const newList = selectedPartners.concat({ id: id, name: name });
    setselectedPartners(newList);

    const newData = partnersList.concat(id);
    setPartnersList(newData);
  };

  const SaveSelectedPartners = async () => {
    const data = {
      event_id: eventId,
      partner_list: partnersList,
    };

    try {
      const response = await axios.post(
        BOOKING_BASE_URL + "assign-event-partner/",
        data,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );

      let newPartner: any = [];

      for (let i = 0; i < response.data.length; i++) {
        newPartner = newPartner?.concat({
          id: response.data[i].id,
          name: response.data[i].name,
          description: response.data[i].description,
          logo: response.data[i].logo,
          hero_image: "",
        });
        const final = partners?.concat(newPartner);
        setPartners(final!);
      }

      toast.success("Partners assigned to the event");
      setOpen(false);
    } catch (e: any) {
      toast.error("Cannot assigned partner");
      console.log(e);
    }
  };

  return (
    <>
      {/* <Toaster /> */}
      <div>
        {selectedPartners.map((partner) => (
          <p className="text-white" key={partner.id}>
            {partner.name}
          </p>
        ))}
        <button
          onClick={() => SaveSelectedPartners()}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>

      <div className="max-w-md mx-auto">
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            onChange={(event) => {
              SearchPartner(event.target.value);
            }}
            className="peer h-full w-full  outline-none border-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search something.."
          />
        </div>
      </div>

      <div className=" mt-2 py-4 gap-2 flex flex-wrap">
        {searchedPartners &&
          searchedPartners.map((item) => (
            <span
              onClick={() => SelectHandler(item.id, item.name)}
              key={item.id}
              className="bg-blue-700 p-2 rounded-3xl text-sm text-slate-200 cursor-pointer"
            >
              {item.name}
            </span>
          ))}
      </div>
    </>
  );
};

export default AssignExistingPartner;
