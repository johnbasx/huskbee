import React from 'react';

interface SearchButtonProps {
  hidden: boolean;
  handleSearchClick: () => void;
}

const SearchButton = ({ hidden, handleSearchClick }: SearchButtonProps) => {
  return (
    <button
      type='button'
      className={`-my-1 ml-auto flex h-8 w-8 items-center justify-center text-neutral-100 hover:text-neutral-300 ${
        // hidden
        hidden ? 'lg:hidden' : 'block'
      } `}
      // onClick={() => handleSearchClick()}
    >
      <span className='sr-only'>Search</span>
      <svg
        width='24'
        height='24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        aria-hidden='true'
      >
        <path d='m19 19-3.5-3.5' />
        <circle cx='11' cy='11' r='6' />
      </svg>
    </button>
  );
};

export default SearchButton;
