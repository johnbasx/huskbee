import Image from 'next/image';
import Link from 'next/link';
import React, {
  FormEvent,
  HTMLInputTypeAttribute,
  ReducerState,
  useReducer,
} from 'react';
import * as yup from 'yup';
import { Path, SubmitHandler, UseFormRegister, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';

export interface signUpProps {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword: string;
  user_name: string;
}

function reducer<T extends signUpProps>(state: T, newState: Partial<T>) {
  return {
    ...state,
    ...newState,
  };
}

const initialState: signUpProps = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirmPassword: '',
  user_name: '',
};

const PHONENUMBER_REGEX = /^[0-9\- ]{10}$/;
const schema = yup
  .object({
    username: yup
      .string()
      .required('Username is required')
      .matches(/^[A-Za-z ]*$/, 'Please enter a valid name')
      .min(2, 'Enter a valid name')
      .max(40, 'Name is too long'),
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('Last name is required'),
    email: yup.string().required('Email is required'),
    phone: yup
      .string()
      .matches(PHONENUMBER_REGEX, {
        message: 'Phone number is not valid',
        excludeEmptyString: true,
      })
      // .min(10, 'Phone number should be of 10 digits')
      .nullable()
      .max(9999999999, "Phone number can't be more than 10 digits")
      .required('Phone is required'),
    password: yup.string().required('Password is required'),
    confirm_password: yup.string().required('Confirm password is required'),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  // const {useReducer} = React
  const router = useRouter();
  const [value, setValue] = useReducer(reducer, initialState);

  const handleSignup = (e: FormEvent) => {
    e.preventDefault();
    console.log(value);
  };

  const responseGoogle = (response: any) => {
    if (response.accessToken) {
      LoginWithGoogle(response.accessToken);
    }
    return response;
  };

  const LoginWithGoogle = async (token: string) => {
    const data = {
      access_token: token,
    };
    console.log(data);
    try {
      const response = await axios.post('/api/googleSignin', data);
      console.log(response);
      toast.success('Signup successful');
      router.push('/');
    } catch (e: any) {
      console.log(e);
    }
  };

  const onsubmit = (data: FormData) => {
    const comparePassword = ComparePassword(
      data.password,
      data.confirm_password
    );
    if (comparePassword) {
      console.log(comparePassword);
    } else {
      console.log(comparePassword, "Confirm password didn't match");
    }
  };

  const ComparePassword = (password: string, confirmPassword: string) => {
    if (password === confirmPassword) return true;
    return false;
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      // console.log("resp from google: ", tokenResponse)
      LoginWithGoogle(tokenResponse.access_token);
    },
  });
  return (
    <section className='bg-white'>
      <div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
        <aside className='relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6'>
          <Image
            fill
            quality={100}
            priority
            alt='Pattern'
            src='https://images.unsplash.com/photo-1652449823136-b279fbe5dfd3?q=80&w=2525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='absolute inset-0 h-full w-full object-cover'
          />
        </aside>

        <main className='relative flex items-center justify-center bg-white px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6'>
          <div className='pointer-events-none absolute h-full w-full'>
            <div className='relative min-h-screen w-full'>
              <Image
                height={100}
                width={100}
                className='h-full w-full object-cover opacity-30 blur-3xl'
                src='/logo/axewhy-colorful-logo.png'
                alt='Logo backdrop'
              />
            </div>
          </div>
          <div className='max-w-xl lg:max-w-3xl'>
            <Link className='block text-blue-600' href='/'>
              <span className='sr-only'>Exocrowd Sign up</span>
              <Image
                alt='Company Logo'
                src='/exocrowd-logo.svg'
                width={500}
                height={500}
                className='h-8 object-contain object-left lg:h-12'
              />
            </Link>

            <h1 className='mt-6 text-2xl font-medium text-neutral-900 sm:text-3xl md:text-4xl'>
              Welcome to Provide 🧚🏻‍♂️
            </h1>

            <p className='mt-4 leading-relaxed text-neutral-500'>
              It’ll take only 2 minutes. Just tell us a few details about you
              and the ones you are raising funds for.
            </p>
            <div className='col-span-6 mt-4 sm:flex sm:items-center sm:gap-4'>
              <button
                onClick={() => login()}
                type='button'
                className='flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2 text-neutral-700 transition duration-300 hover:border-neutral-400 hover:text-neutral-900 hover:shadow'
              >
                {/* <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"> */}
                <FcGoogle className='h-6 w-6' />
                <span>Sign up with Google</span>
              </button>
            </div>
            <div className='mt-4 flex items-center justify-between'>
              <span className='w-1/5 border-b border-neutral-400 lg:w-1/4' />
              <span className='text-center text-sm text-neutral-500 hover:underline'>
                or login with email
              </span>
              <span className='w-1/5 border-b border-neutral-400 lg:w-1/4' />
            </div>

            <form action='#' className='mt-8 grid grid-cols-6 gap-6'>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='FirstName'
                  className='block text-sm font-medium text-neutral-700'
                >
                  First Name
                </label>

                <input
                  type='text'
                  id='FirstName'
                  placeholder='your.username'
                  {...register('first_name')}
                  className='mt-1 w-full rounded-md border-neutral-200 bg-white text-sm text-neutral-700 shadow-sm'
                />
                <span className='text-sm text-rose-500'>
                  {errors.first_name?.message}
                </span>
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='LastName'
                  className='block text-sm font-medium text-neutral-700'
                >
                  Last Name
                </label>

                <input
                  type='text'
                  id='LastName'
                  placeholder='your.username'
                  {...register('last_name')}
                  className='mt-1 w-full rounded-md border-neutral-200 bg-white text-sm text-neutral-700 shadow-sm'
                />
                <span className='text-sm text-rose-500'>
                  {errors.last_name?.message}
                </span>
              </div>

              <div className='col-span-6'>
                <label
                  htmlFor='Email'
                  className='block text-sm font-medium text-neutral-700'
                >
                  {' '}
                  Email{' '}
                </label>

                <input
                  type='email'
                  id='Email'
                  placeholder='your.name@email.com'
                  {...register('email')}
                  className='mt-1 w-full rounded-md border-neutral-200 bg-white text-sm text-neutral-700 shadow-sm'
                />
                <span className='text-sm text-rose-500'>
                  {errors.email?.message}
                </span>
              </div>
              {/* Phone number */}
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='FirstName'
                  className='block text-sm font-medium text-neutral-700'
                >
                  Phone number
                </label>

                <input
                  type='text'
                  id='Phone'
                  placeholder='+917005654309'
                  {...register('phone')}
                  className='mt-1 w-full rounded-md border-neutral-200 bg-white text-sm text-neutral-700 shadow-sm'
                />
                <span className='text-sm text-rose-500'>
                  {errors.phone?.message}
                </span>
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='Password'
                  className='block text-sm font-medium text-neutral-700'
                >
                  {' '}
                  Password{' '}
                </label>

                <input
                  type='password'
                  id='Password'
                  placeholder='Must be at least 8 characters'
                  {...register('password')}
                  className='mt-1 w-full rounded-md border-neutral-200 bg-white text-sm text-neutral-700 shadow-sm'
                />
                <span className='text-sm text-rose-500'>
                  {errors.password?.message}
                </span>
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='PasswordConfirmation'
                  className='block text-sm font-medium text-neutral-700'
                >
                  Password Confirmation
                </label>

                <input
                  type='password'
                  id='ConfirmPassword'
                  placeholder='Same as password'
                  {...register('confirm_password')}
                  className='mt-1 w-full rounded-md border-neutral-200 bg-white text-sm text-neutral-700 shadow-sm'
                />
                <span className='text-sm text-rose-500'>
                  {errors.confirm_password?.message}
                </span>
              </div>

              <div className='col-span-6'>
                <label htmlFor='MarketingAccept' className='flex gap-4'>
                  <input
                    type='checkbox'
                    id='MarketingAccept'
                    name='marketing_accept'
                    className='h-5 w-5 rounded-md border-neutral-200 bg-white shadow-sm'
                  />

                  <span className='text-sm text-neutral-700'>
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div>

              <div className='col-span-6'>
                <p className='text-sm text-neutral-500'>
                  By creating an account, you agree to our
                  <a href='#' className='text-neutral-700 underline'>
                    {' '}
                    terms and conditions{' '}
                  </a>
                  and
                  <a href='#' className='text-neutral-700 underline'>
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              <div className='col-span-6 sm:flex sm:items-center sm:gap-4'>
                <button className='inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 hover:text-blue-50 focus:outline-none focus:ring active:text-blue-50'>
                  Create account
                </button>

                <p className='mt-4 text-sm text-neutral-500 sm:mt-0'>
                  Already have an account?
                  <Link
                    href='/exocrowd-user/signin'
                    className='text-neutral-700 underline'
                  >
                    Log in
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default SignUpPage;
