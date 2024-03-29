import { BASE_URL, CROWDFUNDING_BASE_URL } from '@constants/api-urls';
import { Dialog, Transition } from '@headlessui/react';
import { Dispatch, FormEvent, Fragment, useRef, useState } from 'react';

import { FundraiserPhotoType } from '../../../pages/organiser/fundraiser-detail/[fundraiserId]';
import axios from 'axios';
import { orgTokenStore } from '@store/index';
import toast from 'react-hot-toast';

const AddMorePhoto = ({
  fundraiserPhotos,
  setFundraiserPhoto,
  fundraiserId,
}: {
  fundraiserPhotos: FundraiserPhotoType[];
  setFundraiserPhoto: Dispatch<FundraiserPhotoType[]>;
  fundraiserId: string;
}) => {
  const { token } = orgTokenStore();
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const cancelButtonRef = useRef(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const form_data: any = new FormData();
      form_data.append('photo', image);
      form_data.append('fundraiser', fundraiserId);

      const response = await axios.post(
        `${CROWDFUNDING_BASE_URL}add-fundraiser-photo/`,
        form_data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // console.log(response.data.photo);
      const photo = response.data.photo.replace(BASE_URL, '');
      const newPhotoObj = {
        id: response.data.id,
        fundraiser: response.data.fundraiser,
        photo: photo,
      };
      const newFundraiserPhotos = [newPhotoObj].concat(fundraiserPhotos);

      newFundraiserPhotos && setFundraiserPhoto(newFundraiserPhotos);
      toast.success('Photo uploaded successfully');

      setOpen(false);
    } catch (e) {
      toast.error('Failed Photo upload');
      console.log(e);
    }
  };

  return (
    <>
      {fundraiserPhotos.length > 0 ? (
        <button
          type='button'
          onClick={() => {
            setOpen(true);
          }}
          className='inline-flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-100'
        >
          Add more photo
        </button>
      ) : (
        <button
          type='button'
          onClick={() => {
            setOpen(true);
          }}
          className='cursor-pointer text-base text-blue-700'
        >
          Add photo
        </button>
      )}

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
            <div className='fixed inset-0 bg-neutral-500 bg-opacity-25 transition-opacity' />
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
                <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                  <form
                    onSubmit={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                      <div className=''>
                        <div className='mt-3 text-center sm:mx-4 sm:mt-0 sm:text-left'>
                          <Dialog.Title
                            as='h3'
                            className='text-base font-semibold leading-6 text-neutral-700'
                          >
                            Add new photo
                          </Dialog.Title>
                          <div className='mt-2'>
                            <input
                              required
                              onChange={(e) => {
                                setImage(e.target.files![0]);
                              }}
                              name='first_image'
                              className='block w-full cursor-pointer rounded-lg border border-neutral-300 bg-neutral-50 text-sm text-neutral-900 focus:outline-none dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-400'
                              id='first_image'
                              type='file'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='mb-2 bg-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-10'>
                      <button
                        type='submit'
                        className='inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-1/2'
                      >
                        Save
                      </button>
                      <button
                        type='button'
                        className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50 sm:mt-0 sm:w-1/2'
                        onClick={() => {
                          setOpen(false);
                          setImage(null);
                        }}
                        ref={cancelButtonRef}
                      >
                        Cancel
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

export default AddMorePhoto;
