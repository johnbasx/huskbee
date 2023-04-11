import { Path, SubmitHandler, UseFormRegister, useForm } from "react-hook-form";

import { IFormValues } from "../../../pages/organiser/create-event";
import { InputProps } from "../../../pages/organiser/create-event";
import React from "react";

export const EventName = ({ label, name, register, required }: InputProps) => (
  <>
    <label htmlFor="name" className="block text-sm font-medium text-gray-50">
      {label}
    </label>
    <div className="mt-1">
      <input
        {...register(name, { required })}
        type="text"
        name="name"
        id="name"
        autoComplete="given-name"
        className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
      />
    </div>
  </>
);

export const Tagline = ({ label, name, register, required }: InputProps) => (
  <>
    <label
      htmlFor="tag_line"
      className="block text-sm font-medium text-gray-50"
    >
      {label}
    </label>
    <div className="mt-1">
      <input
        {...register(name, { required })}
        type="text"
        name="tag_line"
        id="tag_line"
        autoComplete="given-name"
        className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
      />
    </div>
  </>
);

export const EventDescription = ({
  label,
  name,
  register,
  required,
}: InputProps) => (
  <>
    <label
      htmlFor="description"
      className="block text-sm font-medium text-gray-50"
    >
      {label}
    </label>
    <div className="mt-1">
      <textarea
        {...register(name, { required })}
        name="description"
        rows={3}
        id="description"
        autoComplete="given-name"
        className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
      />
    </div>
  </>
);

export const StartDate = ({ label, name, register, required }: InputProps) => {
  return (
    <>
      <label
        htmlFor="start_date"
        className="block text-sm font-medium text-gray-50"
      >
        {label}
      </label>
      <div className="mt-1">
        {/* <div
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
              </div> */}

        <input
          {...register(name, { required })}
          type="date"
          name="start_date"
          id="start_date"
          autoComplete="address-level2"
          className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
        />
      </div>
    </>
  );
};

export const EndDate = ({ label, name, register, required }: InputProps) => {
  return (
    <>
      <label
        htmlFor="end_date"
        className="block text-sm font-medium text-gray-50"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          {...register(name, { required })}
          type="date"
          name="end_date"
          id="end_date"
          autoComplete="address-level2"
          className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
        />
      </div>
    </>
  );
};

export const StartTime = ({ label, name, register, required }: InputProps) => {
  return (
    <>
      <label
        htmlFor="start_time"
        className="block text-sm font-medium text-gray-50"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          // matInput
          // type="datetime-local"
          {...register(name, { required })}
          type="time"
          color="white"
          name="start_time"
          id="start_time"
          autoComplete="start_time"
          className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
        />
      </div>
    </>
  );
};

export const EventLogo = ({ label, name, register, required }: InputProps) => {
  return (
    <>
      <label
        className="block mb-2 text-sm font-medium text-gray-50 "
        htmlFor="logo"
      >
        {label}
      </label>
      <input
        {...register(name, { required })}
        className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
        id="logo"
        type="file"
      />
    </>
  );
};

export const EventHeroImage = ({
  label,
  name,
  register,
  required,
}: InputProps) => {
  return (
    <>
      <label
        className="block mb-2 text-sm font-medium text-gray-50 "
        htmlFor="hero_image"
      >
        {label}
      </label>
      <input
        {...register(name, { required })}
        className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
        id="hero_image"
        type="file"
      />
    </>
  );
};

export const SelectEventType = React.forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select
      className="block w-full px-4 py-2 text-gray-200 border rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
      name={name}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
    >
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));
