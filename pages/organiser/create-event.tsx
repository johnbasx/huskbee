import Layout from "@components/Organiser/Layout/Layout";
import React from "react";

const CreateEvent = () => {
  return (
    <Layout>
      <div className="p-8 max-w-5xl mt-10 mx-auto bg-gray-800/50 border-zinc-800/50 backdrop-blur-lg rounded-xl">
        <div>
          <h3 className="text-2xl leading-6 font-medium text-gray-50">
            Create event
          </h3>
          {/* <p className="mt-1 text-sm text-gray-100">
            Use a permanent address where you can receive mail.
          </p> */}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-6">
            <label
              htmlFor="event-name"
              className="block text-sm font-medium text-gray-50"
            >
              Event name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="event-name"
                id="event-name"
                autoComplete="given-name"
                className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-600/50 bg-gray-800/20 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="event-description"
              className="block text-sm font-medium text-gray-50"
            >
              Event description
            </label>
            <div className="mt-1">
              <textarea
                id="event-description"
                name="event-description"
                rows={3}
                className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-600/50 bg-gray-800/20 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
                defaultValue={""}
                placeholder="Write something about event"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            {/* <label
              htmlFor="start-date"
              className="block text-sm font-medium text-gray-50"
            >
              Start Date
            </label> */}
            <div className="mt-1">
              <div
                className="relative mb-3 xl:w-96"
                data-te-datepicker-init
                data-te-input-wrapper-init
              >
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  placeholder="Select a date"
                />
                <label
                  htmlFor="floatingInput"
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                >
                  Select a date
                </label>
              </div>
              {/* <input
                type="date"
                name="start-date"
                id="start-date"
                autoComplete="address-level2"
                className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-600/50 bg-gray-800/20 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
              /> */}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="end-date"
              className="block text-sm font-medium text-gray-50"
            >
              End date
            </label>
            <div className="mt-1">
              <input
                type="date"
                name="end-date"
                id="end-date"
                autoComplete="address-level1"
                className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-600/50 bg-gray-800/20 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="start-time"
              className="block text-sm font-medium text-gray-50"
            >
              Start time
            </label>
            <div className="mt-1">
              <input
                type="time"
                color="white"
                name="start-time"
                id="start-time"
                autoComplete="start-time"
                className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-600/50 bg-gray-800/20 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-50"
            >
              Last name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-600/50 bg-gray-800/20 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-50"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-600/50 bg-gray-800/20 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-50"
            >
              Country
            </label>
            <div className="mt-1">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-600/50 bg-gray-800/20 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="street-address"
              className="block text-sm font-medium text-gray-50"
            >
              Street address
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
                className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-600/50 bg-gray-800/20 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateEvent;
