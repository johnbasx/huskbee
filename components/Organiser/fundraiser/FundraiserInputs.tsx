import { Dialog, Transition } from '@headlessui/react';
import { Dispatch, Fragment, useRef, useState } from 'react';

import { FundraiserInputProps } from '../../../pages/organiser/create-fundraiser';
import Image from 'next/image';

export const Title = ({
  label,
  name,
  register,
  required,
}: FundraiserInputProps) => {
  return (
    <div className='sm:col-span-4'>
      <label
        htmlFor='title'
        className='block text-sm font-medium leading-6 text-neutral-900'
      >
        {label}
      </label>
      <div className='mt-2'>
        <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-neutral-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
          <input
            {...register(name, { required })}
            type='text'
            name='title'
            id='title'
            autoComplete='title'
            className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            placeholder='Fundraiser title'
          />
        </div>
      </div>
    </div>
  );
};

export const Goal = ({
  label,
  name,
  register,
  required,
}: FundraiserInputProps) => {
  return (
    <>
      <label
        htmlFor='goal'
        className='block text-sm font-medium leading-6 text-neutral-900'
      >
        {label}
      </label>
      <div className='mt-2.5'>
        <input
          {...register(name, { required })}
          type='text'
          name='goal'
          id='goal'
          autoComplete='goal'
          className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
        />
      </div>
    </>
  );
};

export const Description = ({
  label,
  name,
  register,
  required,
}: FundraiserInputProps) => {
  return (
    <>
      <label
        htmlFor='description'
        className='block text-sm font-medium leading-6 text-neutral-900'
      >
        {label}
      </label>
      <div className='mt-2.5'>
        <textarea
          {...register(name, { required })}
          name='description'
          id='description'
          placeholder='Write about your fundraiser event'
          rows={4}
          className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          defaultValue={''}
        />
      </div>
    </>
  );
};

export const TargetAmount = ({
  label,
  name,
  register,
  required,
}: FundraiserInputProps) => {
  return (
    <>
      <label
        htmlFor='target_amount'
        className='block text-sm font-medium leading-6 text-neutral-900'
      >
        {label}
      </label>
      <div className='mt-2.5'>
        <input
          {...register(name, { required })}
          name='target_amount'
          id='target_amount'
          type='number'
          className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
        />
      </div>
    </>
  );
};

export const FirstImage = ({
  label,
  name,
  register,
  required,
}: FundraiserInputProps) => {
  const [previewImage, setPreviewImage] = useState<string>();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='col-span-full flex justify-between'>
        <div className='w-3/4'>
          <label
            className='mb-2 block text-sm font-medium text-neutral-900 dark:text-white'
            htmlFor='first_image'
          >
            {label}
          </label>
          <input
            {...register(name, { required })}
            onChange={(e) => {
              setPreviewImage(URL.createObjectURL(e.target.files![0]));
            }}
            name='first_image'
            className='block w-full cursor-pointer rounded-lg border border-neutral-300 bg-neutral-50 text-sm text-neutral-900 focus:outline-none dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-400'
            id='first_image'
            type='file'
          />
        </div>
        <div className='pt-9'>
          {previewImage && (
            <button
              type='button'
              onClick={() => {
                previewImage && setOpen(true);
              }}
              className='mr-4 inline-flex items-center rounded-full border border-neutral-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-neutral-700 shadow-sm hover:bg-neutral-50'
            >
              Preview
            </button>
          )}
        </div>
      </div>
      {previewImage && (
        <ImagePreview image={previewImage} open={open} setOpen={setOpen} />
      )}
    </>
  );
};

export const SecondImage = ({
  label,
  name,
  register,
  required,
}: FundraiserInputProps) => {
  const [previewImage, setPreviewImage] = useState<string>();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='col-span-full flex justify-between'>
        <div className='w-3/4'>
          <label
            className='mb-2 block text-sm font-medium text-neutral-900 dark:text-white'
            htmlFor='second_image'
          >
            {label}
          </label>
          <input
            {...register(name, { required })}
            onChange={(e) => {
              setPreviewImage(URL.createObjectURL(e.target.files![0]));
            }}
            name='second_image'
            className='block w-full cursor-pointer rounded-lg border border-neutral-300 bg-neutral-50 text-sm text-neutral-900 focus:outline-none dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-400'
            id='second_image'
            type='file'
          />
        </div>
        <div className='pt-9'>
          {previewImage && (
            <button
              type='button'
              onClick={() => {
                previewImage && setOpen(true);
              }}
              className='mr-4 inline-flex items-center rounded-full border border-neutral-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-neutral-700 shadow-sm hover:bg-neutral-50'
            >
              Preview
            </button>
          )}
        </div>
      </div>
      {previewImage && (
        <ImagePreview image={previewImage} open={open} setOpen={setOpen} />
      )}
    </>
  );
};

export const ThirdImage = ({
  label,
  name,
  register,
  required,
}: FundraiserInputProps) => {
  const [previewImage, setPreviewImage] = useState<string>();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='col-span-full flex justify-between'>
        <div className='w-3/4'>
          <label
            className='mb-2 block text-sm font-medium text-neutral-900 dark:text-white'
            htmlFor='third_image'
          >
            {label}
          </label>
          <input
            {...register(name, { required })}
            onChange={(e) => {
              setPreviewImage(URL.createObjectURL(e.target.files![0]));
            }}
            name='third_image'
            className='block w-full cursor-pointer rounded-lg border border-neutral-300 bg-neutral-50 text-sm text-neutral-900 focus:outline-none dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-400'
            id='third_image'
            type='file'
          />
        </div>
        <div className='pt-9'>
          {previewImage && (
            <button
              type='button'
              onClick={() => {
                setOpen(true);
              }}
              className='mr-4 inline-flex items-center rounded-full border border-neutral-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-neutral-700 shadow-sm hover:bg-neutral-50'
            >
              Preview
            </button>
          )}
        </div>
      </div>
      {previewImage && (
        <ImagePreview image={previewImage} open={open} setOpen={setOpen} />
      )}
    </>
  );
};

export const ImagePreview = ({
  image,
  open,
  setOpen,
}: {
  image: string;
  open: boolean;
  setOpen: Dispatch<boolean>;
}) => {
  const cancelButtonRef = useRef(null);

  return (
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
          <div className='fixed inset-0 bg-neutral-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
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
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                {image != null ? (
                  <Image
                    alt='first Image'
                    src={image}
                    height={500}
                    width={500}
                  />
                ) : (
                  <span className='text-black'>Select an Image</span>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
