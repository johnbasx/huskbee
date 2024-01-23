import {
  Description,
  HeroImage,
  Logo,
  PartnerName,
} from './AddEventPartnerInputs';
import { Path, SubmitHandler, UseFormRegister, useForm } from 'react-hook-form';
import { eventPartnersStore, orgTokenStore } from '@store/index';

import { BOOKING_BASE_URL } from '@constants/api-urls';
import { Dispatch } from 'react';
import { EventPartnersProps } from '../../../pages/event-detail/[eventId]';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export interface PartnerFormValues {
  name: string;
  description: string;
  logo: File[] | null;
  hero_image: File[] | null;
  event_input: string;
}

export type PartnerInputProps = {
  label: string;
  name: Path<PartnerFormValues>;
  register: UseFormRegister<PartnerFormValues>;
  required: boolean;
};

type Response = {
  data: EventPartnersProps;
};

const AddNewPartner = ({
  eventId,
  setOpen,
}: {
  eventId: string;
  setOpen: Dispatch<boolean>;
}) => {
  const { partners, setPartners } = eventPartnersStore();
  const { token } = orgTokenStore();
  const { register, handleSubmit } = useForm<PartnerFormValues>();

  // Add Partner
  const onSubmit: SubmitHandler<PartnerFormValues> = async (data) => {
    let form_data: any = new FormData();
    const newdata = {
      ...data,
      event_input: eventId,
    };

    for (const key in newdata) {
      if (key == 'logo' && data['logo'] != null) {
        form_data.append(key, data['logo'][0]);
      } else if (key == 'hero_image' && data['hero_image'] != null) {
        form_data.append(key, data['hero_image'][0]);
      } else {
        // console.log("data: ", newdata[key as keyof PartnerFormValues]);
        form_data.append(key, newdata[key as keyof PartnerFormValues]);
      }
    }

    try {
      const response: Response = await axios.post(
        BOOKING_BASE_URL + 'add-partner',
        form_data,
        {
          headers: { Authorization: 'Bearer ' + token },
        }
      );

      const newPartner = partners?.concat({
        id: response.data.id,
        name: response.data.name,
        description: response.data.description,
        logo: response.data.logo,
        hero_image: '',
      });

      setPartners(newPartner!);
      toast.success('Partner added');

      setOpen(false);
    } catch (e: any) {
      toast.error('Cannot add partner');
      console.log(e);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='space-y-12'>
          <div className='border-b border-neutral-900/10 pb-12'>
            <div className='mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6'>
              <PartnerName
                label='Partner'
                name='name'
                register={register}
                required
              />

              <Description
                label='Description'
                name='description'
                register={register}
                required
              />
              <Logo label='Logo' name='logo' register={register} required />

              <HeroImage
                label='Hero image'
                name='hero_image'
                register={register}
                required
              />
            </div>
          </div>
        </div>

        <div className='flex items-center justify-end gap-x-2'>
          <button
            onClick={() => setOpen(false)}
            type='button'
            className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50 sm:mt-0 sm:w-1/2'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-1/2'
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default AddNewPartner;
