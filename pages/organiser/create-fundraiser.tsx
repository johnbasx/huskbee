import {
  Description,
  FirstImage,
  Goal,
  SecondImage,
  TargetAmount,
  ThirdImage,
  Title,
} from '@components/organiser/fundraiser/FundraiserInputs';
import { Path, SubmitHandler, UseFormRegister, useForm } from 'react-hook-form';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { CROWDFUNDING_BASE_URL } from '@constants/api-urls';
import { ConvertDateToYMD } from '@utils/index';
import { Datepicker } from 'flowbite-react';
import Layout from '@components/organiser/layout/Layout';
import { NextPageContext } from 'next';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';

export interface FundraiserFormValues {
  title: string;
  goal: string;
  target_amount: number;
  description: string;
  first_image: File[];
  second_image: File[];
  third_image: File[];
}

export type FundraiserInputProps = {
  label: string;
  name: Path<FundraiserFormValues>;
  register: UseFormRegister<FundraiserFormValues>;
  required: boolean;
};

const CreateFundraiser = ({ token }: { token: string }) => {
  const { register, handleSubmit } = useForm<FundraiserFormValues>();
  const [endDate, setEndDate] = useState('');
  const router = useRouter();

  const handleDatePickerChange = (date: Date) => {
    setEndDate(ConvertDateToYMD(date)); // converting date in yyyy-mm-dd
  };

  const onSubmit: SubmitHandler<FundraiserFormValues> = async (data) => {
    const newData = {
      ...data,
      open_status: true,
      end_date: endDate,
    };

    const form_data: any = new FormData();
    let key: keyof typeof newData;

    for (key in newData) {
      if (
        typeof newData[key] === 'object' &&
        (key === 'first_image' ||
          key === 'second_image' ||
          key === 'third_image')
      ) {
        form_data.append(key, newData[key][0]);
      } else {
        form_data.append(key, newData[key as keyof FundraiserFormValues]);
      }
    }

    console.log('form data: ', form_data);

    try {
      const response = await axios.post(
        `${CROWDFUNDING_BASE_URL}list-create-fundraiser-event/`,
        form_data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log('Fund response: ', response);
      router.push(`/organiser/fundraiser-detail/${response.data.id}`);
      toast.success('Fundraiser event created');
    } catch (e: any) {
      toast.error('Cannot create fundraiser event');
      console.log(e);
    }
  };

  return (
    <Layout pageTitle='Create fundraiser'>
      <Toaster />
      <div className='py-10'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='mx-auto max-w-5xl rounded-lg border bg-white p-6 shadow-lg'
        >
          <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
            <span className='text-2xl font-bold text-black'>
              Create Fundraiser for CrowdFunding
            </span>
            <div className='sm:col-span-2'>
              {' '}
              <Title label='Title' name='title' register={register} required />
            </div>
            <div className='sm:col-span-2'>
              <Goal label='Goal' name='goal' register={register} required />
            </div>
            <div className='sm:col-span-1'>
              <TargetAmount
                label='Target Amount (₹)'
                name='target_amount'
                register={register}
                required
              />
            </div>
            <div className='sm:col-span-1'>
              <label
                htmlFor='target_amount'
                className='mb-2.5 block text-sm font-medium leading-6 text-neutral-900'
              >
                End Date
              </label>
              <Datepicker
                name='selectedDate'
                onSelectedDateChanged={handleDatePickerChange}
              />
            </div>

            <div className='sm:col-span-2'>
              <Description
                label='Description'
                name='description'
                register={register}
                required
              />
            </div>

            <div className='sm:col-span-2'>
              <FirstImage
                label='First Image'
                name='first_image'
                register={register}
                required
              />
            </div>

            <div className='sm:col-span-2'>
              <SecondImage
                label='Second Image'
                name='second_image'
                register={register}
                required
              />
            </div>

            <div className='sm:col-span-2'>
              <ThirdImage
                label='Third Image'
                name='third_image'
                register={register}
                required
              />
            </div>
          </div>
          <div className='mt-10 px-20'>
            <button
              type='button'
              className='block w-full  rounded-md  bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CreateFundraiser;

export async function getServerSideProps(context: NextPageContext) {
  const req = context.req;
  const res = context.res;
  const token = getCookie('org_token', { req, res });

  return {
    props: { token },
  };
}
