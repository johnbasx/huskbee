import {
  KeenSliderInstance,
  KeenSliderPlugin,
  useKeenSlider,
} from 'keen-slider/react';
import React, { MutableRefObject, useState } from 'react';
import { TbArrowLeft, TbArrowRight } from 'react-icons/tb';

import { BASE_URL } from '@constants/api-urls';
import { FundraiserPhotoType } from '../../../pages/organiser/fundraiser-detail/[fundraiserId]';
import Image from 'next/image';
import { cn } from '@utils/lib';
import { fundraiserImages } from '@constants/fundraiser-static-data';

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.map((slide) => {
        slide.classList.remove('active');
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add('active');
    }

    function addClickEvents() {
      slider.slides.map((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on('created', () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on('animationStarted', (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

const ImageScrollWithThumbnails = ({
  fundraisers_photos,
}: {
  fundraisers_photos: FundraiserPhotoType[];
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        spacing: 12,
      },
      loop: true,
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

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      breakpoints: {
        '(min-width:300px)': {
          slides: {
            perView: 6,
            spacing: 8,
          },
        },
        '(min-width: 1200px)': {
          slides: { perView: 12, spacing: 10 },
        },
      },
      // slides: {
      // 	perView: 8,
      // 	spacing: 10,
      // },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );
  return (
    <div className='navigation-wrapper relative'>
      <div ref={sliderRef} className='keen-slider'>
        {fundraisers_photos.length > 0 ? (
          fundraisers_photos.map((data, index) => (
            <div
              key={data.id}
              className='keen-slider__slide flex h-[28vh] max-h-screen items-center justify-center overflow-hidden rounded-2xl bg-neutral-200 text-2xl font-medium text-white lg:h-[45vh]'
            >
              <Image
                height={1000}
                width={1000}
                priority
                quality={100}
                className='h-full overflow-hidden rounded-2xl object-cover'
                alt={`fundraiser-carousel-image-${+data.id}`}
                src={BASE_URL + data.photo}
              />
            </div>
          ))
        ) : (
          <div
            // key={data.id}
            className='keen-slider__slide flex h-[28vh] max-h-screen items-center justify-center overflow-hidden rounded-2xl bg-neutral-200 text-2xl font-medium text-white lg:h-[45vh]'
          >
            <Image
              height={1000}
              width={1000}
              priority
              quality={100}
              className='h-full overflow-hidden rounded-2xl object-cover'
              alt={`fundraiser-carousel-image`}
              src={fundraiserImages[0].image_link}
            />
          </div>
        )}
      </div>

      {loaded && instanceRef.current && (
        <div className='h-0'>
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
        </div>
      )}

      {loaded && instanceRef.current && (
        <div className='absolute inset-x-0 bottom-1 flex justify-center gap-1 p-2 lg:hidden lg:gap-2'>
          {fundraisers_photos.length > 0
            ? fundraisers_photos.map((data, idx) => (
                <button
                  key={data.id}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={cn(
                    'my-2 h-2 w-2 cursor-pointer rounded-full border focus:outline-none lg:h-2 lg:w-2' +
                      (currentSlide === idx
                        ? ' active border-neutral-200 bg-white'
                        : 'border-neutral-300/50 bg-neutral-200/50')
                  )}
                ></button>
              ))
            : null}
        </div>
      )}

      <div ref={thumbnailRef} className='keen-slider thumbnail mt-2'>
        {fundraisers_photos.length > 0 ? (
          fundraisers_photos.map((data, index) => (
            <div
              key={data.id}
              className='keen-slider__slide hidden h-[3rem] max-h-screen w-[3rem] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-neutral-200 text-2xl font-medium text-white opacity-30 lg:flex lg:h-[4rem] lg:w-[4rem] lg:rounded-lg'
            >
              <Image
                height={100}
                width={100}
                quality={30}
                priority
                className='h-full w-full rounded-lg object-cover lg:rounded-lg'
                alt={`fundraiser-carousel-thumbnail-${+data.id}`}
                src={BASE_URL + data.photo}
              />
            </div>
          ))
        ) : (
          <div className='keen-slider__slide hidden h-[3rem] max-h-screen w-[3rem] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-neutral-300 text-2xl font-medium text-white opacity-20 lg:flex lg:h-[4rem] lg:w-[4rem] lg:rounded-lg'>
            <Image
              height={100}
              width={100}
              quality={30}
              priority
              className='h-full w-full rounded-lg object-cover lg:rounded-lg'
              alt={`fundraiser-carousel-thumbnail`}
              src={fundraiserImages[0].image_link}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageScrollWithThumbnails;

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
          className={`arrow arrow--left absolute left-2 top-[40%] h-9 w-9 cursor-pointer rounded-full border border-blue-300/50 bg-blue-400/50 p-2 text-neutral-100 backdrop-blur transition-colors duration-150 hover:border-neutral-200 hover:text-neutral-200 md:h-10 md:w-10 lg:top-[40%] ${disabled}`}
        />
      ) : (
        <TbArrowRight
          className={`arrow arrow--right absolute right-2 top-[40%] h-9 w-9 cursor-pointer rounded-full border border-blue-300/50 bg-blue-400/50 p-2 text-neutral-100 backdrop-blur transition-colors duration-150 hover:border-neutral-200 hover:text-neutral-200 md:h-10 md:w-10 lg:top-[40%] ${disabled}`}
        />
      )}
    </button>
  );
}
