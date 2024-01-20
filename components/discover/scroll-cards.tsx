import { BOOKING_BASE_URL } from '@constants/api-urls';
import { FaFire } from 'react-icons/fa';
import { GiRoundStar } from 'react-icons/gi';
import Image from 'next/image';
import Link from 'next/link';
import Moment from 'react-moment';
import { upcomingEvents } from '@store/index';

export type HEventCardProps = {
  imageSrc: string;
  pill?: string;
  title: string;
  link: string;
  about: string;
  date: string;
  star?: boolean;
  managedBy?: string;
};

const ScrollCards = () => {
  const { events } = upcomingEvents();

  const BookButton = ({ link }: { link: string }) => (
    <Link href={link} className='w-full'>
      <button
        type='button'
        className='flex w-full justify-center rounded-lg border border-purple-500 bg-purple-600 px-3 py-1 text-center text-lg font-bold transition duration-200 hover:bg-purple-700'
      >
        Book Now
      </button>
    </Link>
  );

  const Card = ({
    imageSrc,
    pill,
    title,
    link,
    about,
    date,
    star = false,
    managedBy,
  }: HEventCardProps) => {
    const dateToFormat = new Date(date);
    return imageSrc ? (
      title ? (
        <div className='relative mr-4 w-4/5 flex-none overflow-hidden rounded-3xl border border-zinc-500/20 bg-zinc-900/30 pb-2 sm:w-1/4'>
          <div className='relative flex h-full flex-col'>
            {pill && (
              <div className='pointer-events-none absolute right-2 top-2 inline-flex space-x-1 rounded-md border border-pink-400/50 bg-pink-600 px-2 py-1 text-3xs font-bold shadow-lg'>
                <span className=''>{pill}</span>
                <FaFire className='h-3 w-3 text-yellow-400' />
              </div>
            )}
            <a href='#!' className='space-y-2'>
              <div className='flex-1'>
                <Image
                  className='aspect-video w-full rounded-t-3xl object-cover shadow-md hover:shadow-xl'
                  src={imageSrc}
                  alt='Scroll Cards'
                  width={100}
                  height={100}
                />
              </div>
              <div className='space-y-3 px-4 py-2'>
                <div className='flex items-baseline justify-between overflow-hidden text-ellipsis'>
                  <h3 className='w-4/5 truncate text-xl font-bold text-neutral-100'>
                    {title}
                  </h3>
                  {star && <GiRoundStar className='h-4 w-4 text-yellow-400' />}
                </div>
                <div className='grid grid-cols-2 space-x-2'>
                  {managedBy && (
                    <div className=''>
                      <p className='text-xs text-neutral-400'>Organized by</p>
                      <p className='line-clamp-1 text-ellipsis text-sm text-zinc-200'>
                        {managedBy}
                      </p>
                    </div>
                  )}
                  <div>
                    <p className='text-xs text-neutral-400'>Date</p>
                    <p className='line-clamp-1 text-ellipsis text-sm text-zinc-200'>
                      <Moment date={dateToFormat} />
                    </p>
                  </div>
                </div>

                <div className='h-10 overflow-hidden text-xs'>
                  <p className='line-clamp-2 text-ellipsis'>{about}</p>
                </div>

                <div className='flex items-center justify-between space-x-2'>
                  <BookButton link={link} />
                </div>
              </div>
            </a>
          </div>
        </div>
      ) : null
    ) : null;
  };

  const MoreCard = () => (
    <div className='relative mr-4 grid w-4/5 flex-none grid-cols-1 content-center overflow-hidden rounded-3xl pb-2'>
      <div className='relative flex h-full flex-col rounded-3xl border border-zinc-500/20 bg-zinc-900/30'>
        <a href='#!' className='space-y-2'>
          <div className='flex-1'>
            <p>more</p>
          </div>
        </a>
      </div>
    </div>
  );

  return (
    <div className=''>
      <div
        id='scrollContainer'
        className='flex-no-wrap hide-scroll-bar scrolling-touch flex items-start overflow-visible overflow-x-scroll'
      >
        {events?.map((event) => (
          <Card
            key={event.id}
            imageSrc={event.hero_image}
            title={event.name}
            date={event.start_date}
            about={event.description}
            link={`/event-detail/${event.id}`}
            pill='Hot'
            managedBy='NOS Groups'
            star
          />
        ))}
        {/* <Card
          imageSrc="https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          title="Chand Nigthou's Soulful voice is coming"
          date="30 Nov, 2022"
          about="Chand Ningthou at his best concert yet. Event organized by NOS Groups."
          link="#!"
          pill="Upcoming"
          managedBy="Foxbeta Pvt. Ltd."
          star
        />
        <Card
          imageSrc="https://images.unsplash.com/photo-1569930784237-ea65a2f40a83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          title="Esgou - Grand Opening"
          date="12 Dec, 2022"
          about="Ready to use Tailwind CSS Portfolio Components, copy-paste HTML components code, and build your awesome website, dashboard, landing page, and more."
          link="#!"
          pill="Trending"
          managedBy="Meraki Unagi Private Limited"
          star
        /> */}
        <MoreCard />
      </div>
    </div>
  );
};

export default ScrollCards;
