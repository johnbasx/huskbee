import { Address, GoogleMap, Landmark, Pincode } from "./AddressFormInputs";
import { Path, SubmitHandler, UseFormRegister, useForm } from "react-hook-form";
import React, { useState } from "react";
import {
  RegistrationFormDataStore,
  RegistrationFormsStore,
} from "@store/index";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Switch } from "@headlessui/react";

export interface AddressFormValues {
  name: string;
  pin_code: string;
  land_mark: string;
  google_map: string;
}

export type AddressInputProps = {
  label: string;
  name: Path<AddressFormValues>;
  register: UseFormRegister<AddressFormValues>;
  required: boolean;
};

const AddressForm = () => {
  const [agreed, setAgreed] = useState(false);
  const { setAddress } = RegistrationFormDataStore();
  const { register, handleSubmit } = useForm<AddressFormValues>();
  const {
    setAddressFormStatus,
    setBankDetailFormStatus,
    setOrgDetailFormStatus,
  } = RegistrationFormsStore();
  const onSubmit: SubmitHandler<AddressFormValues> = (data) => {
    // console.log("Test", data);
    setAddress(data);
  };

  const PrevStep = () => {
    setOrgDetailFormStatus(true);
    setAddressFormStatus(false);
    setBankDetailFormStatus(false);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mt-16 max-w-5xl sm:mt-20"
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <Address label="Address" name="name" register={register} required />
        <Pincode label="Pincode" name="pin_code" register={register} required />
        <Landmark
          label="Landmark"
          name="land_mark"
          register={register}
          required
        />
        <GoogleMap
          label="Google map link"
          name="google_map"
          register={register}
          required
        />
      </div>
      <div className="flex justify-between mt-10 space-x-4">
        <a
          onClick={() => {
            PrevStep();
          }}
          className="cursor-pointer block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Prev
        </a>
        <button
          type="submit"
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default AddressForm;
