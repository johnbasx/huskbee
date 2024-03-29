import React, { FormEvent, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { Spinner } from 'flowbite-react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { TbEye, TbEyeOff } from 'react-icons/tb';

const OfficeAdminLoginPage = () => {
  useEffect(() => {
    const el = document.querySelector('html') as HTMLElement | null;
    el != null ? el.classList.add('bg-white') : '';
  }, []);

  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState('password');

  const login = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post('/api/officeAdminSignin', data);
      localStorage.setItem('off_username', response.data.user);
      toast.success('Successfully Login');
      router.push('/admin/home');
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error('Cannot Login');
      setLoading(false);
    }
  };

  useEffect(() => {
    togglePassword
      ? setPasswordInputType('text')
      : setPasswordInputType('password');
  }, [togglePassword]);

  return (
    <>
      <Toaster />
      <div className='flex min-h-full flex-col justify-center bg-white py-12 sm:px-6 lg:px-8 '>
        <div className=''>
          <div className='bg-white sm:mx-auto sm:w-full sm:max-w-md'>
            <Image
              height={500}
              width={500}
              className='mx-auto h-12 w-auto'
              src='/exocrowd-logo.svg'
              alt='Exocrowd-logo'
            />
            <h2 className='mt-6 text-center text-3xl font-extrabold text-neutral-900'>
              Exocrowd Admin
            </h2>
            <p className='mt-2 text-center text-sm text-neutral-600'>
              {/* Or{" "} */}
              <a
                href='#!'
                className='font-medium text-blue-600 hover:text-blue-500'
              >
                All activities are strictly monitored
              </a>
            </p>
          </div>

          <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white px-4 py-8 sm:px-10'>
              <form
                onSubmit={(e) => {
                  login(e);
                }}
                className='space-y-6'
                action='#'
                method='POST'
              >
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-neutral-700'
                  >
                    Username
                  </label>
                  <div className='mt-1'>
                    <input
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      id='username'
                      name='username'
                      type='text'
                      autoComplete='username'
                      placeholder='Company provided username or email...'
                      required
                      className='block w-full appearance-none rounded-md border border-neutral-300 px-3 py-2 text-black placeholder-neutral-400 shadow-sm placeholder:text-xs focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium text-neutral-700'
                  >
                    Password
                  </label>
                  <div className='mt-1'>
                    <div className='relative mt-1 flex rounded-md shadow-sm'>
                      <input
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        id='password'
                        name='password'
                        type={passwordInputType}
                        autoComplete='current-password'
                        placeholder='Must have at least 8 characters'
                        required
                        className='block w-full appearance-none rounded-md border border-neutral-300 px-3 py-2 font-[Verdana] tracking-widest text-black placeholder-neutral-400 shadow-sm placeholder:font-sans placeholder:text-xs placeholder:tracking-normal  sm:text-sm'
                      />
                      <button
                        type='button'
                        onClick={(event) => setTogglePassword(!togglePassword)}
                        className='absolute right-1 top-1 bg-white p-1.5 text-sm text-neutral-500'
                      >
                        {togglePassword ? (
                          <TbEye className='h-5 w-5' />
                        ) : (
                          <TbEyeOff className='h-5 w-5' />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type='submit'
                    className='flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                  >
                    {loading ? (
                      <>
                        {' '}
                        <span className='mr-2'>Signing in...</span>{' '}
                        <Spinner className='h-6 w-6 text-white' />
                      </>
                    ) : (
                      'Sign in'
                    )}
                  </button>
                </div>
              </form>

              <div className='mt-6'>
                <div className='relative'>
                  <div className='absolute inset-0 flex items-center'>
                    <div className='w-full border-t border-white' />
                  </div>
                  <div className='relative flex justify-center text-sm'>
                    <span>
                      <ExclamationTriangleIcon className='h-6 w-6 text-red-500' />
                    </span>
                    <span className='bg-white px-2 text-neutral-500'>
                      Consider changing your password everyday.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfficeAdminLoginPage;
