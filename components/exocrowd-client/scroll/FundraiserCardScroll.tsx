import { GetPercentage, toIndianCurrency } from '@utils/index';
import React, { useState } from 'react';
import { TbArrowLeft, TbArrowRight } from 'react-icons/tb';

import { BASE_URL } from '@constants/api-urls';
import { FundraiserEventsProps } from '../../../pages/organiser/fundraiser-detail/[fundraiserId]';
import Image from 'next/image';
import Link from 'next/link';
import { RecentDonorType } from '../../../pages/organiser/fundraisers';
import { useKeenSlider } from 'keen-slider/react';

export default function FundraiserCardScroll({
  fundraisers,
}: {
  fundraisers: FundraiserEventsProps[];
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      breakpoints: {
        '(min-width:300px)': {
          slides: {
            perView: window.innerWidth / 300,
            spacing: 12,
          },
        },
        '(min-width: 1000px)': {
          slides: { perView: 4, spacing: 18 },
        },
      },
      slides: {
        origin: 'center',
        // perView:
        //   window.innerWidth >= 1200
        //     ? window.innerWidth / 400
        //     : window.innerWidth / 300,

        // spacing: window.innerWidth >= 1200 ? 18 : 12,
      },
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <section className='sm:py-18 mx-auto max-w-screen-2xl px-0 py-14 sm:px-6 lg:px-8 lg:py-24'>
      <div className='navigation-wrapper relative'>
        <div ref={sliderRef} className='keen-slider px-6 py-12 lg:px-0'>
          {fundraisers.reverse().map((data, index) => (
            <DisplayCardBlock
              key={`display-card-block-${data.id}${index}`}
              data={data}
            />
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </section>
  );
}

export type DisplayCardBlockType = {
  title: string;
  description: string;
  donated_amount: number;
  required_amount: number;
  cover_image: string;
  created_by: {
    profile_id: number;
    name: string;
    profile_image: string;
  };
};

export type DisplayCardBlockDataType = { data: FundraiserEventsProps };
const DisplayCardBlock = ({ data }: DisplayCardBlockDataType) => {
  return (
    <Link
      href={`/fundraiser/fundraiser-details/${data.id}`}
      className='keen-slider__slide flex max-w-sm cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-lg'
    >
      <Image
        className='h-[8rem] w-full object-cover md:h-[12rem]'
        width={500}
        height={500}
        priority
        quality={100}
        src={
          data.fundraiser_photo.length === 0
            ? 'https://picsum.photos/45/500'
            : BASE_URL + data.fundraiser_photo[0].photo
        }
        alt='donate'
      />
      <div className='flex flex-col gap-2 px-4 py-4 text-black'>
        <div className=''>
          <div className='mb-2 line-clamp-2 h-14 text-xl font-bold'>
            <h3>{data.title}</h3>
          </div>
          <div
            className='line-clamp-2 text-xs text-neutral-700'
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          {/* {data.description} */}
          {/* </div> */}
        </div>
        <div className='grid grid-cols-2 gap-1 divide-x'>
          <div className='flex flex-col text-base'>
            <span className='text-sm text-neutral-500'>Raised</span>
            <span className='text-lg font-extrabold tracking-tight text-blue-600'>
              {toIndianCurrency(data.donation_detail.total_donation)}
            </span>
            <span className='text-xs font-normal'>
              out of{' '}
              <span className='tracking-tight'>
                {toIndianCurrency(data.target_amount)}
              </span>
            </span>
          </div>
          <div className='flex flex-col gap-1 px-2 text-base text-neutral-500'>
            <span className='text-sm'>Created by</span>
            <div className='relative flex items-center justify-start gap-1'>
              <Image
                height={20}
                width={20}
                className='h-8 w-8 rounded-full object-cover'
                alt={data.organiser_name}
                src={
                  data.organiser_logo === ''
                    ? 'https://picsum.photos/45/500'
                    : `${BASE_URL}media/${data.organiser_logo}`
                }
              />
              <span className='line-clamp-1 text-xs'>
                {data.organiser_name}
              </span>
            </div>
          </div>
        </div>
        <div className='mt-2'>
          <span id='ProgressLabel' className='sr-only'>
            Loading
          </span>

          <span
            // role="progressbar"
            // aria-labelledby="ProgressLabel"
            // aria-valuenow="75"
            className='block rounded-full bg-neutral-200'
          >
            <span
              className='block h-2.5 rounded-full bg-gradient-to-r from-purple-200 via-violet-500 to-blue-600'
              style={{
                width: GetPercentage(
                  data.donation_detail.total_donation,
                  data.target_amount
                ),
              }}
              // Dynamic data for progress bar
            />
          </span>
        </div>

        <LatestSupportersAvatars
          recent_donors={data.donation_detail.recent_donors}
          total_donors={data.donation_detail.total_donors}
        />
      </div>
    </Link>
  );
};

export type LatestSupporterType = {
  recent_donors: RecentDonorType[];
  total_donors: number;
};

const LatestSupportersAvatars = ({
  recent_donors,
  total_donors,
}: LatestSupporterType) => {
  return (
    <div>
      <span className='text-xs text-neutral-500'>Latest Supporters</span>
      <div className='flex flex-row-reverse justify-end px-3'>
        <div className='relative m-1 ml-0 mr-1 flex h-8 w-auto items-center justify-center rounded-full text-[0.6rem] text-neutral-500 md:text-xs'>
          {total_donors > recent_donors.length &&
            `+ ${total_donors - recent_donors.length} others`}
        </div>
        {recent_donors.slice(0, 4).map((data, index) => (
          <AvatarImage
            key={`avatar-image${data.donated_by__photo}${index}`}
            photo={data.donated_by__photo}
          />
        ))}
        {/* {[20, 68, 8, 51].map((data, index) => (
          <AvatarImage
            key={"avatar-image" + data + index}
            temporaryProp={data}
          />
        ))} */}
      </div>
    </div>
  );
};

// const AvatarImage = ({ temporaryProp }: { temporaryProp: number }) => {
const AvatarImage = ({ photo }: { photo: string }) => {
  return (
    <div className='relative m-1 -ml-3 mr-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white'>
      <Image
        height={20}
        width={20}
        quality={10}
        priority
        className='h-7 w-7 rounded-full object-cover'
        alt='avatar image'
        src={`${BASE_URL}media/${photo}`}
        // src={`https://randomuser.me/api/portraits/men/${temporaryProp}.jpg`}
      />
    </div>
  );
};

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? ' arrow--disabled' : '';
  return (
    <button type='button' onClick={props.onClick}>
      {props.left ? (
        <TbArrowLeft
          className={`arrow arrow--left absolute -top-1 right-16 h-9 w-9 cursor-pointer rounded-full border border-neutral-600 p-2 text-neutral-600 transition-colors duration-150 hover:border-neutral-900 hover:text-neutral-900 ${disabled}`}
        />
      ) : (
        <TbArrowRight
          className={`arrow arrow--right absolute -top-1 right-4 h-9 w-9 cursor-pointer rounded-full border border-neutral-600 p-2 text-neutral-600 transition-colors duration-150 hover:border-neutral-900 hover:text-neutral-900 ${disabled}`}
        />
      )}
    </button>
  );
}
