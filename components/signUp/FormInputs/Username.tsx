import * as yup from "yup";

import { Path, UseFormRegister, useForm } from "react-hook-form";
import React, { HTMLInputTypeAttribute } from "react";

import { yupResolver } from "@hookform/resolvers/yup";

interface IFormValues {
  username: string;
  //   first_name: string;
  //   last_name: string;
  //   email: string;
  //   phone: string;
  //   password: string;
  //   confirm_password: string;
}

type InputProps = {
  label: string;
  username: Path<IFormValues>;
  type: HTMLInputTypeAttribute;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

const schema = yup
  .object({
    username: yup.string().required(),
    firstname: yup.string().required(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const Username = ({ label, username, type }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <label
        className="block mb-2 text-sm font-medium text-gray-200"
        htmlFor="user_name"
      >
        {label}
      </label>
      <input
        className="block w-full px-4 py-2 border-gray-700/50 bg-zinc-700/20 text-gray-200 border rounded-md   focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
        type={type}
        {...register(username, { required: true, minLength: 3 })}
      />
      <p>{errors.username?.message}</p>
    </>
  );
};

export default Username;
