import React, { useState } from 'react';
import { TbArrowLeft, TbArrowRight } from 'react-icons/tb';

import { BASE_URL } from '@constants/api-urls';
import { DisplayCardBlockDataType } from './FundraiserCardScroll';
import { FundraiserEventsProps } from '../../../pages/organiser/fundraiser-detail/[fundraiserId]';
import Image from 'next/image';
import { staticCardData } from '@constants/fundraiser';
import { toIndianCurrency } from '@utils/index';
import { useKeenSlider } from 'keen-slider/react';

const MoreWaysScroll = ({
  fundraisers,
}: {
  fundraisers: FundraiserEventsProps[];
}) => {
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
    <section className='sm:py-18 bg-blue-700 px-0 py-8 text-white lg:px-8 lg:py-24'>
      <div className='mx-auto flex max-w-screen-2xl flex-col'>
        <div className='max-w-3xl px-6 py-8 lg:px-0'>
          <h2 className='text-2xl font-bold md:text-4xl'>
            More ways to make a difference. Find fundraisers inspired by what
            you care about.
          </h2>
        </div>
        <div className='navigation-wrapper relative'>
          <div ref={sliderRef} className='keen-slider px-6 py-12 lg:px-0'>
            {fundraisers.map((data, index) => (
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
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
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
      </div>
    </section>
  );
};

export const DisplayCardBlock = ({ data }: DisplayCardBlockDataType) => {
  return (
    <div className='keen-slider__slide group flex max-w-sm cursor-pointer flex-col overflow-hidden rounded-2xl bg-blue-900 p-2 transition-colors duration-150 lg:bg-transparent lg:hover:bg-blue-900/50'>
      <div className='relative overflow-hidden rounded-xl'>
        <Image
          className='h-[8rem] w-full rounded-xl object-cover transition-transform duration-200 ease-in group-hover:scale-110 md:h-[12rem]'
          width={500}
          height={500}
          priority
          quality={100}
          src={
            data.fundraiser_photo.length === 0
              ? '/images/carousel/carousel-1.jpg'
              : BASE_URL + data.fundraiser_photo[0].photo
          }
          alt='donate'
        />
        <div className='absolute bottom-2 left-2 rounded-full bg-black/30 px-2 py-1.5 text-xs font-semibold tracking-tight backdrop-blur-md'>
          <span>1.6K donations</span>
        </div>
      </div>
      <div className='flex flex-col gap-2 px-3 py-3'>
        <div className=''>
          <div className='mb-2 line-clamp-2 h-14 text-xl font-bold'>
            {data.title}
          </div>
        </div>
        {/* <div className='grid grid-cols-2 divide-x gap-1'> */}
        <div className='flex flex-col gap-1 text-base font-semibold text-neutral-100'>
          <span className='text-sm'>by {data.title}</span>
          <span className='line-clamp-1 text-xs text-blue-200'>for Family</span>
        </div>
        {/* </div> */}
        <div className='mt-2'>
          <span id='ProgressLabel' className='sr-only'>
            Donation Progress
          </span>

          <span
            // role="progressbar"
            // aria-labelledby="ProgressLabel"
            // aria-valuenow="75"
            className='block rounded-full bg-blue-400/50 lg:bg-blue-900'
          >
            <span
              className='block h-1.5 rounded-full bg-gradient-to-r from-blue-100 to-blue-50'
              style={{ width: '78%' }}
              // Dynamic data for progress bar
            />
          </span>
        </div>

        {/* <LatestSupportersAvatars /> */}
        <div className='flex flex-col text-base'>
          <span className='text-sm font-extrabold tracking-tight text-neutral-50'>
            {toIndianCurrency(data.donation_detail.total_donation)}{' '}
            <span>raised</span>
          </span>
          <span className='text-xs font-semibold text-blue-200'>
            out of{' '}
            <span className='tracking-tight'>
              {toIndianCurrency(data.target_amount)}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? 'arrow--disabled' : '';
  return (
    <button type='button' onClick={props.onClick}>
      {props.left ? (
        <TbArrowLeft
          className={`arrow arrow--left absolute -top-1 right-16 h-9 w-9 cursor-pointer rounded-full border border-neutral-300 p-2 text-neutral-300 transition-colors duration-150 hover:border-neutral-100 hover:text-neutral-100 ${disabled}`}
        />
      ) : (
        <TbArrowRight
          className={`arrow arrow--right absolute -top-1 right-4 h-9 w-9 cursor-pointer rounded-full border border-neutral-300 p-2 text-neutral-300 transition-colors duration-150 hover:border-neutral-100 hover:text-neutral-100 ${disabled}`}
        />
      )}
    </button>
  );
}

export default MoreWaysScroll;
