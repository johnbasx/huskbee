import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useRef, useState } from 'react';

import { AtSymbolIcon } from '@heroicons/react/24/solid';
import { BsTwitterX } from 'react-icons/bs';
import { CROWDFUNDING_BASE_URL, FRONT_URL } from '@constants/api-urls';
import { FaTelegramPlane } from 'react-icons/fa';
import { IoShareSocial } from 'react-icons/io5';
import { RiWhatsappFill } from 'react-icons/ri';
import { ShareCountStore } from '@store/fundraiser-detail-store';
import { SiFacebook } from 'react-icons/si';
import { XMarkIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandX,
  TbBrandYoutube,
  TbCopy,
} from 'react-icons/tb';
import useCopyClipboard from '@hooks/useCopyClipboard';
import { cn } from '@utils/lib';

// import { socialShare } from '@constants/list-items';

export const socialShare = [
  {
    name: 'Facebook',
    logo: SiFacebook,
    color: 'text-[#3498db]',
  },
  {
    name: 'Whatsapp',
    logo: RiWhatsappFill,
    color: 'text-[#25d366]',
  },
  {
    name: 'Twitter',
    logo: BsTwitterX,
    color: 'text-[#000000]',
  },
  {
    name: 'Telegram',
    logo: FaTelegramPlane,
    color: 'text-[#229ED9]',
  },
  {
    name: 'E-mail',
    logo: AtSymbolIcon,
    color: 'text-[#000000]',
  },
];

const SocialShare = ({ fundraiser_id }: { fundraiser_id: string }) => {
  const { count, setCount } = ShareCountStore();
  const { handleCopyClick, isCopied } = useCopyClipboard();

  const [open, setOpen] = useState(false);
  const [shareCount, setShareCount] = useState<number>(count);
  const cancelButtonRef = useRef(null);
  const [link, setLink] = useState<string>(
    `${FRONT_URL}fundraiser/fundraiser-details/${fundraiser_id}`
  );

  useEffect(() => {
    setCount(shareCount);
  }, [shareCount]);

  const copyTextToClipboard = async () => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(link);
    } else {
      return document.execCommand('copy', true, link);
    }
  };

  const shareCountHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        CROWDFUNDING_BASE_URL + 'share-fundraiser/' + fundraiser_id
      );
      setShareCount(response.data.share_count);
      // toast.success('Share success');
      setTimeout(() => setOpen(false), 1000);
    } catch (e: any) {
      console.log(e);
      // toast.error('Share failed');
    }
  };

  return (
    <>
      <button
        type='button'
        onClick={() => setOpen(true)}
        className='inline-flex w-full items-center justify-center gap-2 rounded-xl border bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-600'
      >
        Share this fundraiser
        <TbBrandFacebook />
        <TbBrandInstagram />
        <TbBrandX />
        <TbBrandYoutube />
      </button>
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
                <Dialog.Panel className='relative w-full transform overflow-hidden rounded-3xl bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-lg'>
                  <div className='grid w-full place-content-center'>
                    <div
                      id='modal'
                      className='rounded-3xl bg-white px-12 py-10 transition-transform duration-300 lg:py-8'
                    >
                      <div className='mb-6 flex items-center justify-between'>
                        <span className='font-medium leading-5 text-neutral-500'>
                          Share with
                        </span>
                        <button id='close' onClick={() => setOpen(false)}>
                          <XMarkIcon className='h-7 w-7 text-neutral-600' />
                        </button>
                      </div>

                      <div className='mb-6 grid grid-cols-4 gap-4 sm:grid-cols-3 md:grid-cols-6'>
                        {socialShare.map((item) => (
                          <button
                            onClick={(e) => shareCountHandler(e)}
                            key={item.name}
                            className='group flex flex-col items-center justify-end gap-2'
                          >
                            <div
                              id='icon'
                              className='rounded-full p-3 transition-all duration-300 group-hover:bg-blue-50'
                            >
                              <item.logo className={`h-7 w-7 ${item.color}`} />
                            </div>
                            <h3
                              className={`text-black group-hover:${item.color} text-xs leading-[0.9375rem]`}
                            >
                              {item.name}
                            </h3>
                          </button>
                        ))}

                        <button className='group flex flex-col items-center justify-end gap-2'>
                          <div
                            id='icon'
                            className='rounded-full p-3 transition-all duration-300 group-hover:bg-blue-50'
                          >
                            <IoShareSocial className='h-7 w-7 text-neutral-700' />
                          </div>
                          <h3 className='text-xs text-black group-hover:text-blue-600'>
                            More
                          </h3>
                        </button>
                      </div>

                      <div className='flex flex-col justify-center'>
                        <span className='mb-4 text-center text-xs text-neutral-400'>
                          or share the link below
                        </span>
                        <div className='relative flex w-full'>
                          <input
                            type='text'
                            placeholder='sada'
                            className='placeholder:text-text-neutral-800 w-full rounded-lg border-neutral-400 px-3 py-2 pr-14 text-sm text-neutral-600 outline-none'
                            defaultValue={link}
                            readOnly
                            disabled
                          />
                          {/* <button
                            type='button'
                            onClick={(e) => {
                              copyTextToClipboard();
                              shareCountHandler(e);
                            }}
                            className='absolute right-4 top-1/2 -translate-y-1/2'
                          >
                            <TbCopy className='h-6 w-6 text-blue-500' />
                          </button> */}
                          <button
                            type='button'
                            onClick={(e) => {
                              handleCopyClick(link), shareCountHandler(e);
                            }}
                            className='absolute right-4 top-1/2 -translate-y-1/2'
                          >
                            <TbCopy
                              className={cn(
                                'h-6 w-6',
                                isCopied ? 'text-emerald-500' : 'text-blue-500'
                              )}
                            />
                          </button>
                          <Transition
                            as={Fragment}
                            // className='mx-auto my-16 max-w-md space-y-4'
                            show={isCopied}
                            enter='transition-all ease-out duration-300'
                            enterFrom='opacity-0 -translate-y-6 rotate-0'
                            enterTo='opacity-100 -translate-y-8 -rotate-3'
                            leave='transition-all ease-out duration-300'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                          >
                            <span
                              className={cn(
                                'right-0 rounded-md bg-emerald-50 px-2 py-1 text-sm text-emerald-600 duration-300',
                                isCopied
                                  ? 'absolute opacity-100 transition-transform'
                                  : 'top-0 hidden opacity-0'
                              )}
                            >
                              {isCopied && 'Copied!'}
                            </span>
                          </Transition>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default SocialShare;
