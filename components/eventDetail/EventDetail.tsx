import React from "react";

export interface EventDetailProps {
  name: string;
  version: string;
  datetime: string;
  date: string;
  review: number;
  description: string;
}
const EventDetail = ({
  name,
  version,
  datetime,
  date,
  review,
  description,
}: EventDetailProps) => {
  return (
    <>
      <div className="flex flex-col-reverse">
        <div className="mt-4">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            {name}
          </h1>

          <h2 id="information-heading" className="sr-only">
            Product information
          </h2>
          <p className="text-sm text-gray-300 mt-2">
            Version {version} (Updated <time dateTime={datetime}>{date}</time>)
          </p>
        </div>

        <div>
          <h3 className="sr-only">Reviews</h3>
          <p className="sr-only">{review} out of 5 stars</p>
        </div>
      </div>

      <p className="text-gray-500 mt-6">{description}</p>

      <div className="mt-10 gap-y-4">
        <button
          type="button"
          className="w-full bg-purple-600 hover:bg-purple-700 border border-transparent rounded-lg py-3 px-8 flex items-center justify-center text-lg font-bold text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
        >
          Book this event
        </button>
        {/* <button
      type="button"
      className="w-full bg-indigo-50 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
    >
      Preview
    </button> */}
      </div>
    </>
  );
};

export default EventDetail;
