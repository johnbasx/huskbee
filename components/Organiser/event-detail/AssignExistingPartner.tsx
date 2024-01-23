import { Dispatch, useEffect, useState } from 'react';
import { notEventPartnersStore, orgTokenStore } from '@store/index';
import toast, { Toaster } from 'react-hot-toast';

import { BOOKING_BASE_URL } from '@constants/api-urls';
import { EventPartnersProps } from '../../../pages/event-detail/[eventId]';
import axios from 'axios';
import { eventPartnersStore } from '@store/index';

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

  const [selectedPartners, setSelectedPartners] = useState<
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

  const selectHandler = (id: string, name: string) => {
    if (selectedPartners.find((partner) => partner.name === name) != null) {
      return;
    }
    const newList = selectedPartners.concat({ id: id, name: name });
    setSelectedPartners(newList);

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
        `${BOOKING_BASE_URL}assign-event-partner/`,
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      let newPartner: any = [];

      for (let i = 0; i < response.data.length; i++) {
        newPartner = newPartner?.concat({
          id: response.data[i].id,
          name: response.data[i].name,
          description: response.data[i].description,
          logo: response.data[i].logo,
          hero_image: '',
        });
        const final = partners?.concat(newPartner);
        setPartners(final!);
      }

      toast.success('Partners assigned to the event');
      setOpen(false);
    } catch (e: any) {
      toast.error('Cannot assigned partner');
      console.log(e);
    }
  };

  return (
    <>
      {/* <Toaster /> */}
      <div>
        {selectedPartners.map((partner) => (
          <p className='text-white' key={partner.id}>
            {partner.name}
          </p>
        ))}
        <button
          type='button'
          onClick={() => SaveSelectedPartners()}
          className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Save
        </button>
      </div>

      <div className='mx-auto max-w-md'>
        <div className='relative flex h-12 w-full items-center overflow-hidden rounded-lg bg-white focus-within:shadow-lg'>
          <div className='grid h-full w-12 place-items-center text-neutral-300'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <title>Search SVG</title>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </div>

          <input
            onChange={(event) => {
              SearchPartner(event.target.value);
            }}
            className='peer h-full w-full  border-none pr-2 text-sm text-neutral-700 outline-none'
            type='text'
            id='search'
            placeholder='Search something..'
          />
        </div>
      </div>

      <div className=' mt-2 flex flex-wrap gap-2 py-4'>
        {searchedPartners?.map((item) => (
          <span
            onKeyDown={() => selectHandler(item.id, item.name)}
            onClick={() => selectHandler(item.id, item.name)}
            key={item.id}
            className='cursor-pointer rounded-3xl bg-blue-700 p-2 text-sm text-neutral-200'
          >
            {item.name}
          </span>
        ))}
      </div>
    </>
  );
};

export default AssignExistingPartner;
