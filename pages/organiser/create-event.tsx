import {
  EndDate,
  EndTime,
  EventDescription,
  EventHeroImage,
  EventLogo,
  EventName,
  StartDate,
  StartTime,
  Tagline,
} from "@components/organiser/create-event/FormInputs";
import { Path, SubmitHandler, UseFormRegister, useForm } from "react-hook-form";

import { BOOKING_BASE_URL } from "@constants/api-urls";
import Layout from "@components/organiser/layout/Layout";
import { NextPageContext } from "next";
import React from "react";
import SelectEventType from "@components/organiser/create-event/FormInputs";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useMutation } from "react-query";

// interface IObjectKeys {
//   [key: string]: string;
// }

export interface IFormValues {
  name: string;
  tag_line: string;
  description: string;
  start_date: Date | string;
  end_date: Date | string;
  start_time: string;
  end_time: string;
  event_type: string;
  logo: File[] | null;
  hero_image: File[] | null;
}

export type InputProps = {
  label: string;
  name: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

const CreateEvent = ({ token }: { token: string }) => {
  const { register, handleSubmit } = useForm<IFormValues>();

  const [message, setMessage] = React.useState("");

  const [formData, setFormData] = React.useState<object>({});

  const { isLoading, isError, error, mutate } = useMutation(createEvent);

  async function createEvent() {
    const response = await axios.post(
      BOOKING_BASE_URL + "list-create-event",
      formData,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    setMessage(response.data);
  }

  // const Create = () => {
  //   mutate({ id: Date.now(), name })
  // }

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    let form_data = new FormData();
    console.log("check_form_data: ", data);

    for (let key in data) {
      let k: keyof typeof data = key as keyof typeof data;

      if (key == "logo" && data["logo"] != null) {
        form_data.append(key, data["logo"][0]);
      } else if (key == "hero_image" && data["hero_image"] != null) {
        form_data.append(key, data["hero_image"][0]);
      } else if (data[key as keyof IFormValues] != undefined) {
        form_data.append(key, data[key as keyof IFormValues] as string);
      }

      // if (k == "logo" || k == "hero_image") {
      //   let val = Object.values(data)[0]
      //   form_data.append(k,val);
      // } else {
      //   form_data.append(k, data[k]);
      // }
    }
    setFormData(form_data);
    mutate();
  };

  return (
    <Layout pageTitle='Create New event'>
      <div className='p-8 max-w-5xl mt-10 mx-auto bg-gray-800/50 border-zinc-800/50 backdrop-blur-lg rounded-xl'>
        <div>
          <h3 className='text-2xl leading-6 font-medium text-gray-50'>
            Create event
          </h3>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'
        >
          <div className='sm:col-span-6'>
            <EventName
              label='Event name'
              name='name'
              register={register}
              required
            />
          </div>

          <div className='sm:col-span-6'>
            <Tagline
              label='Tagline'
              name='tag_line'
              register={register}
              required
            />
          </div>

          <div className='sm:col-span-3'>
            <EventDescription
              label='Event description'
              name='description'
              register={register}
              required
            />
          </div>

          <div className='sm:col-span-3'>
            <SelectEventType label='Event type' {...register("event_type")} />
          </div>

          <div className='sm:col-span-2'>
            <StartDate
              label='Start date'
              name='start_date'
              register={register}
              required
            />
          </div>

          <div className='sm:col-span-2'>
            <EndDate
              label='End date'
              name='end_date'
              register={register}
              required
            />
          </div>

          <div className='sm:col-span-2'>
            <StartTime
              label='Start time'
              name='start_time'
              register={register}
              required
            />
          </div>

          <div className='sm:col-span-2'>
            <EndTime
              label='End time'
              name='end_time'
              register={register}
              required
            />
          </div>

          <div className='sm:col-span-3'>
            <EventLogo
              label='Event logo'
              name='logo'
              register={register}
              required
            />
          </div>
          <div className='sm:col-span-3'>
            <EventHeroImage
              label='Event hero image'
              name='hero_image'
              register={register}
              required
            />
          </div>
          <div className='mt-6 sm:col-span-6'>
            <button
              type='submit'
              className='w-full  bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CreateEvent;

export async function getServerSideProps(context: NextPageContext) {
  const req = context.req;
  const res = context.res;
  const token = getCookie("org_token", { req, res });
  return {
    props: { token },
  };
}
