import Image from 'next/image';
import React from 'react';

export interface MovieProps {
  id: number;
  name: string;
  year: string;
  runtime: number;
  rating?: number;
  category?: string[];
  releaseDate: string;
  director: string;
  poster: string;
  writer: string[];
  actors: string[];
  storyline: string;
}

const Movie = ({ ...movie }: MovieProps) => {
  return (
    <div className='px-3 py-2 sm:mx-auto'>
      <div className='flex max-h-80 space-x-4 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-3 shadow-lg sm:rounded-3xl'>
        <div className='h-full max-h-72 w-1/2 overflow-hidden rounded-3xl'>
          <Image
            className='h-full max-h-72 w-full rounded-3xl object-cover shadow-lg'
            src={movie.poster}
            alt='movie card'
            height={100}
            width={100}
          />
        </div>
        <div className='flex w-1/2 flex-col space-y-2'>
          <div className='flex items-start justify-between'>
            <h2 className='text-xl font-bold'>{movie.name}</h2>
            <div className='rounded-lg bg-yellow-400 px-2 py-1 text-2xs font-bold'>
              {movie.rating?.toFixed(1)}
            </div>
          </div>
          <div>
            <div className='text-sm text-neutral-400'>Year</div>
            <div className='text-lg text-zinc-200'>{movie.year}</div>
          </div>
          <div className='max-h-16 overflow-y-hidden text-ellipsis'>
            <p className=' h-16 text-xs text-neutral-400'>{movie.storyline}</p>
          </div>

          <div className='text-a flex text-2xl font-bold'>&#8377;90</div>
          <button
            type='button'
            className='text-a flex justify-center rounded-lg border border-purple-500 bg-purple-600 px-4 py-1 text-center text-lg font-bold transition duration-200 hover:bg-purple-700'
          >
            Go watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
