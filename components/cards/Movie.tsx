import Image from "next/image";
import React from "react";

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
    <div className="py-2 sm:mx-auto px-3">
      <div className="bg-zinc-900/50 rounded-3xl shadow-lg border-zinc-800 max-h-80 border sm:rounded-3xl p-3 flex space-x-4">
        <div className="h-full rounded-3xl overflow-hidden w-1/2 max-h-72">
          <Image
            className="rounded-3xl h-full max-h-72 w-full object-cover shadow-lg"
            src={movie.poster}
            alt="movie card"
            height={100}
            width={100}
          />
        </div>
        <div className="flex flex-col w-1/2 space-y-2">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold">{movie.name}</h2>
            <div className="bg-yellow-400 font-bold rounded-lg text-2xs py-1 px-2">
              {movie.rating?.toFixed(1)}
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-400">Year</div>
            <div className="text-lg text-zinc-200">{movie.year}</div>
          </div>
          <div className="max-h-16 text-ellipsis overflow-y-hidden">
            <p className=" text-gray-400 text-xs h-16">{movie.storyline}</p>
          </div>

          <div className="flex text-2xl font-bold text-a">&#8377;90</div>
          <button className="flex justify-center text-center text-lg bg-purple-600 hover:bg-purple-700 transition duration-200 border-purple-500 border rounded-lg py-1 px-4 font-bold text-a">
            Go watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
