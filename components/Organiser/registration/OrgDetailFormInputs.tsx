import { FieldError, useForm } from 'react-hook-form';
import { InputProps, OrgDetailFormValues } from './OrganisationDetail';
import React, { useEffect } from 'react';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { OrganiserTypes } from '@constants/list-items';
import { RegistrationFormDataStore } from '@store/index';
import { UseFormRegister } from 'react-hook-form';
import clsx from 'clsx';

type ErrorType = {
  label: string;
  error: FieldError | undefined;
};
const ErrorMessage = ({ label, error }: ErrorType) => {
  return (
    <>
      {error?.type === 'required' ? (
        <p role='alert' className='text-red-500'>
          {label} is required
        </p>
      ) : error ? (
        <p className='text-red-500' role='alert'>
          {label} is not valid
        </p>
      ) : (
        <></>
      )}
    </>
  );
};

export const UserName = ({
  error,
  label,
  name,
  register,
  required,
}: InputProps) => {
  const {
    formState: { errors },
  } = useForm<OrgDetailFormValues>();
  const { mainDetail } = RegistrationFormDataStore();

  return (
    <div>
      <label
        htmlFor='username'
        className='block text-sm font-semibold leading-6 text-neutral-900'
      >
        {label}
      </label>
      <div className='mt-2.5'>
        <input
          {...register(name, {
            required,
            pattern: /^[A-Za-z][A-Za-z0-9_]{7,29}$/i,
          })}
          defaultValue={mainDetail.username}
          type='text'
          name='username'
          id='username'
          autoComplete='given-name'
          className={clsx(
            'mb-1 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
            errors.username
              ? 'text-red-600 focus:ring-red-500'
              : 'text-neutral-900 focus:ring-indigo-600'
          )}
        />
        <ErrorMessage label={label} error={error} />
      </div>
    </div>
  );
};

export const FullName = ({
  error,
  label,
  name,
  register,
  required,
}: InputProps) => {
  const { mainDetail } = RegistrationFormDataStore();
  return (
    <div>
      <label
        htmlFor='full_name'
        className='block text-sm font-semibold leading-6 text-neutral-900'
      >
        {label}
      </label>
      <div className='mt-2.5'>
        <input
          {...register(name, { required, pattern: /^[A-Z][\sA-Z]{7,29}$/i })}
          defaultValue={mainDetail.name}
          type='text'
          name='name'
          id='full_name'
          autoComplete='full_name'
          className='mb-2 block w-full rounded-md border-0 px-3.5 py-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />
        <ErrorMessage label={label} error={error} />
      </div>
    </div>
  );
};

export const OrganisationName = ({
  error,
  label,
  name,
  register,
  required,
}: InputProps) => {
  const { mainDetail } = RegistrationFormDataStore();
  return (
    <div>
      <label
        htmlFor='organisation_name'
        className='block text-sm font-semibold leading-6 text-neutral-900'
      >
        {label}
      </label>
      <div className='mt-2.5'>
        <input
          {...register(name, { required })}
          defaultValue={mainDetail.organisation_name}
          type='text'
          name='organisation_name'
          id='organisation_name'
          autoComplete='organisation_name'
          className='mb-2 block w-full rounded-md border-0 px-3.5 py-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />
        <ErrorMessage label={label} error={error} />
      </div>
    </div>
  );
};

export const Email = ({
  error,
  label,
  name,
  register,
  required,
}: InputProps) => {
  const { mainDetail } = RegistrationFormDataStore();
  return (
    <div className='sm:col-span-1'>
      <label
        htmlFor='email'
        className='block text-sm font-semibold leading-6 text-neutral-900'
      >
        {label}
      </label>
      <div className='mt-2.5'>
        <input
          {...register(name, { required })}
          defaultValue={mainDetail.email}
          type='email'
          name='email'
          id='email'
          autoComplete='email'
          className='mb-2 block w-full rounded-md border-0 px-3.5 py-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />
        <ErrorMessage label={label} error={error} />
      </div>
    </div>
  );
};

export const PhoneNumber = ({
  error,
  label,
  name,
  register,
  required,
}: InputProps) => {
  const { mainDetail } = RegistrationFormDataStore();
  return (
    <div className=''>
      <label
        htmlFor='phone_number'
        className='block text-sm font-semibold leading-6 text-neutral-900'
      >
        {label}
      </label>
      <div className='relative mt-2.5'>
        <div className='absolute inset-y-0 left-0 flex items-center'>
          <label htmlFor='country' className='sr-only'>
            Country
          </label>
          <select
            id='country'
            name='country'
            className='h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm '
          >
            <option>IN</option>
          </select>
          <ChevronDownIcon
            className='pointer-events-none absolute right-3 top-0 h-full w-5 text-neutral-400'
            aria-hidden='true'
          />
        </div>
        <input
          {...register(name, {
            required,
            pattern: /^[0-9\- ]{10}$/i,
          })}
          defaultValue={mainDetail.phone}
          type='tel'
          name='phone'
          id='phone'
          autoComplete='tel'
          className='block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 '
        />
      </div>
      <div className=' mt-2'>
        <ErrorMessage label={label} error={error} />
      </div>
    </div>
  );
};

export const OrganisationLogo = ({
  error,
  label,
  name,
  register,
  required,
}: InputProps) => {
  const { mainDetail } = RegistrationFormDataStore();
  return (
    <div>
      <label
        className='block text-sm font-semibold leading-6 text-neutral-900'
        htmlFor='organisation_logo'
      >
        {label}
      </label>
      <input
        {...register(name, { required: true })}
        defaultValue={mainDetail.name}
        name='logo'
        className='mb-2 block w-full rounded-md border-0 px-3.5 py-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        id='organisation_logo '
        type='file'
      />
      <ErrorMessage label={label} error={error} />
    </div>
  );
};

export const About = ({
  error,
  label,
  name,
  register,
  required,
}: InputProps) => {
  const { mainDetail } = RegistrationFormDataStore();
  return (
    <div className='sm:col-span-2'>
      <label
        htmlFor='description'
        className='block text-sm font-semibold leading-6 text-neutral-900'
      >
        {label}
      </label>
      <div className='mt-2.5'>
        <textarea
          {...register(name, { required })}
          defaultValue={mainDetail.description}
          name='description'
          id='description'
          rows={4}
          className='mb-2 block w-full rounded-md border-0 px-3.5 py-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder='Write something about your organisation'
        />
        <ErrorMessage label={label} error={error} />
      </div>
    </div>
  );
};

const OrganisationType = React.forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<OrgDetailFormValues>>
>(({ onChange, onBlur, name, label }, ref) => {
  const { mainDetail } = RegistrationFormDataStore();
  return (
    <div className='sm:col-span-1'>
      <label
        htmlFor='organiser_type'
        className='block text-sm font-medium leading-6 text-neutral-900'
      >
        {label}
      </label>
      <div className='mt-2'>
        <select
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          id='organiser_type'
          defaultValue={mainDetail.organiser_type}
          name='organiser_type'
          autoComplete='organiser_type'
          className='block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
        >
          {OrganiserTypes.map((item, idx) => (
            <option key={item.id + idx}>{item.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
});

OrganisationType.displayName = 'OrganisationType';

export default OrganisationType;
