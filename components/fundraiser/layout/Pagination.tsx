import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/20/solid';
import { cn } from '@utils/lib';

export default function Pagination() {
  return (
    <nav className='mt-12 flex items-center justify-between border-neutral-200 px-2 sm:px-0'>
      <div className='-mt-px flex w-0 flex-1'>
        <a
          href='#'
          className='inline-flex items-center border-transparent py-2 pr-1 text-sm font-medium text-neutral-500 hover:border-neutral-300 hover:text-neutral-700'
        >
          <ArrowLongLeftIcon
            className='mr-3 h-5 w-5 text-neutral-400'
            aria-hidden='true'
          />
          Previous
        </a>
      </div>
      <div className='hidden gap-x-1 md:-mt-px md:flex'>
        <PageNumber number={1} />
        {/* Current: "border-blue-500 text-blue-600", Default: "border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300" */}
        <PageNumber active number={2} />
        <PageNumber number={3} />
        {/* in between pages */}
        <span className='inline-flex items-center border-transparent px-4 py-2 text-sm font-medium text-neutral-500'>
          ...
        </span>

        <PageNumber number={8} />
        <PageNumber number={9} />
        <PageNumber number={10} />
      </div>
      <div className='-mt-px flex w-0 flex-1 justify-end'>
        <a
          href='#'
          className='inline-flex items-center border-transparent py-2 pl-1 text-sm font-medium text-neutral-500 hover:border-neutral-300 hover:text-neutral-700'
        >
          Next
          <ArrowLongRightIcon
            className='ml-3 h-5 w-5 text-neutral-400'
            aria-hidden='true'
          />
        </a>
      </div>
    </nav>
  );
}

const PageNumber = ({
  active = false,
  number,
  link = '#!',
}: {
  active?: boolean;
  number: number;
  link?: string;
}) => {
  return (
    <a
      href={link}
      aria-current={active ? 'page' : 'false'}
      className={cn(
        'inline-flex h-8 w-8 items-center justify-center rounded-full border-transparent text-center text-sm font-normal',
        active
          ? 'bg-blue-500 font-medium text-blue-50'
          : 'border text-neutral-500 duration-500 ease-out hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700'
      )}
    >
      {number}
    </a>
  );
};
