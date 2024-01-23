import * as yup from 'yup';

import { Path, UseFormRegister, useForm } from 'react-hook-form';
import React, { HTMLInputTypeAttribute } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';

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
        className='mb-2 block text-sm font-medium text-neutral-200'
        htmlFor='user_name'
      >
        {label}
      </label>
      <input
        className='block w-full rounded-md border border-neutral-700/50 bg-zinc-700/20 px-4 py-2 text-neutral-200   autofill:bg-zinc-700/50 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
        type={type}
        {...register(username, { required: true, minLength: 3 })}
      />
      <p>{errors.username?.message}</p>
    </>
  );
};

export default Username;
