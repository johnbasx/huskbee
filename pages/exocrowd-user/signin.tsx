import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import React, { FormEvent, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

import AuthLayout from '@components/layout/AuthLayout';
import { GoogleSvg } from '@components/common/GoogleSvg';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import { FcGoogle } from 'react-icons/fc';
import { TbArrowBack } from 'react-icons/tb';

const SignInPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Login with username & password
  const loginNextServer = async (e: FormEvent) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    try {
      const response = await axios.post('/api/signin', data);
      toast.success('Successfully Login');
      router.push('/');
    } catch (e: any) {
      console.log(e);
    }
  };

  // Google social login
  const LoginWithGoogle = async (token: string) => {
    const data = {
      access_token: token,
    };
    try {
      const response = await axios.post('/api/googleSignin', data);
      toast.success('Login successful');
      console.log('response: ', response);

      // router.back()
      // console.log("Router_obj: ", router);
    } catch (e: any) {
      if (e.response.status === 409) {
        toast.error(e.response.data.message);
        console.log(e.response.status);
      } else {
        toast.error('Login error');
      }
    }
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log('resp from google: ', tokenResponse);
      LoginWithGoogle(tokenResponse.access_token);
    },
  });

  return (
    <>
      <Toaster />
      <AuthLayout>
        <div className='relative mx-auto flex min-h-screen flex-1 flex-col items-center justify-center bg-gradient-to-b from-blue-50 via-emerald-100 to-blue-400 px-3'>
          <div className='pointer-events-none absolute h-full w-full'>
            <div className='relative h-screen w-full'>
              <Image
                height={100}
                width={100}
                className='h-full w-full object-cover opacity-30 blur-3xl'
                src='/logo/axewhy-colorful-logo.png'
                alt='Logo backdrop'
              />
            </div>
          </div>
          <div className='mx-auto -mt-12 flex w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg backdrop-blur-lg lg:max-w-4xl'>
            {/* Login image for Large Screens */}
            <div className='hidden bg-loginImage bg-cover lg:block lg:w-1/2' />
            <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
              <div className='relative flex w-full items-center justify-center py-4'>
                <Image
                  alt='Exocrowd Logo'
                  src='/exocrowd-logo.svg'
                  width={1000}
                  height={1000}
                  className='h-8 object-contain lg:h-12'
                />
              </div>
              {/* <h2 className='text-2xl font-bold text-center text-black'>
                HuskBee
              </h2> */}
              <p className='text-center text-sm lg:text-base'>
                by <span className='tracking-tighter'>Foxbeta</span>
              </p>
              <p className='my-4 text-center text-xl text-neutral-800'>
                Welcome back!
              </p>
              <button
                onClick={() => login()}
                type='button'
                className='flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-2 text-neutral-700 transition duration-300 hover:border-neutral-400 hover:text-neutral-900 hover:shadow'
              >
                {/* <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"> */}
                <FcGoogle className='h-6 w-6' />
                <span>Login with Google</span>
              </button>

              {/* <button
                onClick={() => login()}
                type='submit'
                className='w-full transform cursor-pointer rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition-colors duration-300 hover:bg-blue-700 focus:border-blue-800 focus:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-700 focus:ring-opacity-40'
              >
                Google Login
              </button> */}

              <div className='mt-4 flex items-center justify-between'>
                <span className='w-1/5 border-b border-neutral-400 lg:w-1/4' />
                <span className='text-center text-sm text-neutral-500 hover:underline'>
                  or login with email
                </span>
                <span className='w-1/5 border-b border-neutral-400 lg:w-1/4' />
              </div>

              <form
                onSubmit={(e) => {
                  loginNextServer(e);
                }}
              >
                <div className='mt-4'>
                  <label
                    className='mb-2 block text-sm font-medium text-neutral-600'
                    htmlFor='email'
                  >
                    Email
                  </label>
                  <input
                    id='email'
                    className='block w-full rounded-md border border-neutral-300 bg-neutral-100 px-4 py-1.5 text-neutral-900 shadow-sm placeholder:text-neutral-400 autofill:bg-neutral-50 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-40'
                    type='email'
                    placeholder='e.g. your.name@xyz.com'
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div className='mt-4'>
                  <div className='flex justify-start'>
                    <label
                      className='mb-2 block text-sm font-medium text-neutral-600'
                      htmlFor='loggingPassword'
                    >
                      Password
                    </label>
                  </div>
                  <input
                    id='loggingPassword'
                    className='block w-full rounded-md border border-neutral-300 bg-neutral-100 px-4 py-1.5 text-neutral-900 placeholder:text-neutral-400 autofill:bg-neutral-50 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-40'
                    type='password'
                    hidden
                    placeholder='Must have at least 8 characters'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className='mt-2 flex justify-end'>
                    <a href='#!' className='text-xs text-neutral-500 underline'>
                      Forgot Password?
                    </a>
                  </div>
                </div>

                <div className='mt-4'>
                  <button
                    type='submit'
                    className='w-full transform cursor-pointer rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors duration-300 hover:bg-blue-700 focus:border-blue-800 focus:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-700 focus:ring-opacity-40'
                  >
                    Login
                  </button>
                </div>
              </form>

              <div className='mt-4 flex items-center justify-center'>
                <span className='text-sm text-neutral-500'>
                  Don&apos;t have an account yet?{' '}
                  <Link href='/signup'>
                    <span className='font-medium text-blue-600 underline'>
                      Sign up
                    </span>
                  </Link>
                </span>
              </div>
              <div className='mt-4 flex items-center justify-center text-neutral-500'>
                <Link
                  href={'/'}
                  className='inline-flex items-center justify-center gap-2'
                >
                  Go to home
                  <TbArrowBack />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default SignInPage;
