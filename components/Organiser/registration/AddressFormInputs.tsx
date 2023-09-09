import { AddressFormValues, AddressInputProps } from "./AddressForm";

import React from "react";
import { RegistrationFormDataStore } from "@store/index";

export const Address = ({
  label,
  name,
  register,
  required,
}: AddressInputProps) => {
  const { address } = RegistrationFormDataStore();
  return (
    <div>
      <label
        htmlFor="address"
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2.5">
        <input
          {...register(name, { required })}
          type="text"
          name="name"
          defaultValue={address.name}
          id="address"
          autoComplete="given-name"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export const Pincode = ({
  label,
  name,
  register,
  required,
}: AddressInputProps) => {
  const { address } = RegistrationFormDataStore();

  return (
    <div>
      <label
        htmlFor="pincode"
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2.5">
        <input
          {...register(name, { required })}
          type="text"
          name="pin_code"
          id="pin_code"
          defaultValue={address.pin_code}
          autoComplete="family-name"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export const Landmark = ({
  label,
  name,
  register,
  required,
}: AddressInputProps) => {
  const { address } = RegistrationFormDataStore();

  return (
    <div className="sm:col-span-1">
      <label
        htmlFor="landmark"
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2.5">
        <input
          {...register(name, { required })}
          type="text"
          name="land_mark"
          id="land_mark"
          defaultValue={address.land_mark}
          autoComplete="organization"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export const GoogleMap = ({
  label,
  name,
  register,
  required,
}: AddressInputProps) => {
  const { address } = RegistrationFormDataStore();

  return (
    <div className="sm:col-span-1">
      <label
        htmlFor="google_map"
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2.5">
        <input
          {...register(name, { required })}
          type="text"
          name="google_map"
          defaultValue={address.google_map}
          id="google_map"
          autoComplete="google_map"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};
