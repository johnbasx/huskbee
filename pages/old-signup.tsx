import * as yup from 'yup';

import { Path, SubmitHandler, UseFormRegister, useForm } from 'react-hook-form';
import React, {
  FormEvent,
  HTMLInputTypeAttribute,
  ReducerState,
  useReducer,
} from 'react';
import toast, { Toaster } from 'react-hot-toast';

import AuthLayout from '@components/layout/AuthLayout';
import ColorfulBlur from '@components/blur/ColorfulBlur';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleSvg } from '@components/common/GoogleSvg';
import Image from 'next/image';
import Link from 'next/link';
import { NextPage } from 'next';
import Username from '@components/signUp/FormInputs/Username';
import axios from 'axios';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';

// import { GoogleLogin } from "react-google-login";

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

const Signup: NextPage = () => {
  // const { register } = useForm<IFormValues>();
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
  return (
    <>
      <Toaster />
      <AuthLayout>
        <div className='relative mx-auto my-8 flex h-screen max-w-7xl flex-1 flex-col items-center justify-center bg-gradient-to-b from-blue-50 via-emerald-100 to-blue-400 px-3'>
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
          <div className='mx-auto -mt-12 flex w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg backdrop-blur-lg lg:max-w-4xl'>
            {/* Login image for Large Screens */}
            {/* <div className="hidden bg-cover lg:block lg:w-1/2 bg-loginImage"></div> */}
            <div className='w-full px-6 py-8 md:px-8 lg:w-full'>
              <div className='relative flex w-full items-center justify-center py-4'>
                <Image
                  alt='Company Logo'
                  src='/exocrowd-logo.svg'
                  width={500}
                  height={500}
                  className='h-8 object-contain lg:h-12'
                />
              </div>
              <p className='text-center text-sm lg:text-base'>
                by <span className='tracking-tighter'>Foxbeta</span>
              </p>
              <form onSubmit={handleSubmit(onsubmit)} className=''>
                <div className='grid grid-cols-6 gap-6'>
                  <div className='col-span-6 mt-4 sm:col-span-3'>
                    <label
                      className='mb-2 block text-sm font-medium text-neutral-600'
                      htmlFor='user_name'
                    >
                      Username
                    </label>
                    <input
                      className='block w-full rounded-md border border-neutral-300 bg-neutral-100 px-4 py-1.5 text-neutral-900 shadow-sm placeholder:text-neutral-400 autofill:bg-neutral-50 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-40'
                      type='text'
                      placeholder='your.username'
                      {...register('username')}
                    />
                    <p>{errors.username?.message}</p>
                    {/* <Input
                      label="Username"
                      value="username"
                      register={register}
                      type="text"
                      required
                    /> */}
                  </div>

                  <div className='col-span-6 mt-4 sm:col-span-3'>
                    <label
                      className='mb-2 block text-sm font-medium text-neutral-600'
                      htmlFor='user_name'
                    >
                      First name
                    </label>
                    <input
                      className='block w-full rounded-md border border-neutral-300 bg-neutral-100 px-4 py-1.5 text-neutral-900 shadow-sm placeholder:text-neutral-400 autofill:bg-neutral-50 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-40'
                      type='text'
                      {...register('first_name')}
                    />
                    <p>{errors.first_name?.message}</p>
                  </div>

                  <div className='col-span-6 mt-4 sm:col-span-3'>
                    <label
                      className='mb-2 block text-sm font-medium text-neutral-600'
                      htmlFor='user_name'
                    >
                      Last name
                    </label>
                    <input
                      className='block w-full rounded-md border border-neutral-300 bg-neutral-100 px-4 py-1.5 text-neutral-900 shadow-sm placeholder:text-neutral-400 autofill:bg-neutral-50 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-40'
                      type='text'
                      {...register('last_name')}
                    />
                    <p>{errors.last_name?.message}</p>
                  </div>

                  <div className='col-span-6 mt-4 sm:col-span-3'>
                    <label
                      className='mb-2 block text-sm font-medium text-neutral-600'
                      htmlFor='user_name'
                    >
                      Email
                    </label>
                    <input
                      className='block w-full rounded-md border border-neutral-300 bg-neutral-100 px-4 py-1.5 text-neutral-900 shadow-sm placeholder:text-neutral-400 autofill:bg-neutral-50 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-40'
                      type='text'
                      {...register('email')}
                    />
                    <p>{errors.email?.message}</p>
                  </div>
                  <div className='col-span-6 mt-4 sm:col-span-3'>
                    <label
                      className='mb-2 block text-sm font-medium text-neutral-600'
                      htmlFor='user_name'
                    >
                      Phone Number
                    </label>
                    <input
                      className='block w-full rounded-md border border-neutral-300 bg-neutral-100 px-4 py-1.5 text-neutral-900 shadow-sm placeholder:text-neutral-400 autofill:bg-neutral-50 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-40'
                      type='text'
                      {...register('phone')}
                    />
                    <p>{errors.phone?.message}</p>
                  </div>

                  <div className='col-span-6 mt-4 sm:col-span-3'>
                    <label
                      className='mb-2 block text-sm font-medium text-neutral-600'
                      htmlFor='user_name'
                    >
                      Password
                    </label>
                    <input
                      className='block w-full rounded-md border border-neutral-300 bg-neutral-100 px-4 py-1.5 text-neutral-900 shadow-sm placeholder:text-neutral-400 autofill:bg-neutral-50 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-40'
                      type='password'
                      {...register('password')}
                    />
                    <p>{errors.password?.message}</p>
                  </div>

                  <div className='col-span-6 mt-4 sm:col-span-3'>
                    <label
                      className='mb-2 block text-sm font-medium text-neutral-600'
                      htmlFor='user_name'
                    >
                      Confirm Password
                    </label>
                    <input
                      className='block w-full rounded-md border border-neutral-300 bg-neutral-100 px-4 py-1.5 text-neutral-900 shadow-sm placeholder:text-neutral-400 autofill:bg-neutral-50 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-40'
                      type='password'
                      {...register('confirm_password')}
                    />
                    <p>{errors.confirm_password?.message}</p>
                  </div>
                </div>

                <div className='mt-8'>
                  <button
                    type='submit'
                    className='w-full transform rounded bg-purple-600 px-4 py-2 font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-purple-700 focus:border-purple-800 focus:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-700 focus:ring-opacity-40'
                  >
                    Sign up
                  </button>
                </div>
              </form>

              <GoogleLogin
                onSuccess={responseGoogle}
                onError={() =>
                  console.log('Something went wrong in google sign up')
                }
                useOneTap
              />
              {/* <GoogleLogin
								clientId="829759909963-gqla1538rhsb9gj92b8dbfkl0oan496u.apps.googleusercontent.com"
								render={(renderProps) => (
									// <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>

									<button
										type="button"
										// onClick={() => loginWithGoogle()}
										onClick={renderProps.onClick}
										// disabled={renderProps.disabled}
										className="flex items-center justify-center mt-4 transition-colors duration-300 transform border rounded-lg border-neutral-700/50 bg-zinc-800/20 text-neutral-600 hover:bg-zinc-700/50 cursor-pointer"
									>
										<div className="px-4 py-2">
											<GoogleSvg />
										</div>

										<span className="px-4 py-3 font-bold text-center">
											Sign up with Google
										</span>
									</button>
								)}
								buttonText="Login with Google"
								onSuccess={responseGoogle}
								onFailure={responseGoogle}
								cookiePolicy="single_host_origin"
							/> */}

              <div className='mt-4 flex items-center justify-center'>
                {/* <span className="w-1/5 border-b dark:border-neutral-600 md:w-1/4"></span> */}

                <span className='text-xs text-neutral-500  dark:text-neutral-400 '>
                  Already have an account?{' '}
                  <Link href='/login'>
                    <span className='font-semibold text-white hover:underline'>
                      Login{' '}
                    </span>
                  </Link>
                </span>

                {/* <span className="w-1/5 border-b dark:border-neutral-600 md:w-1/4"></span> */}
              </div>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default Signup;

// interface IFormValues {
//   username: string;
//   first_name: string;
//   last_name: string;
//   email: string;
//   phone: string;
//   password: string;
//   confirm_password: string;
//   // Age: number;
// }

// type InputProps = {
//   label: string;
//   value: Path<IFormValues>;
//   type: HTMLInputTypeAttribute;
//   register: UseFormRegister<IFormValues>;
//   required: boolean;
// };

// const Input = ({ label, value, type, register, required }: InputProps) => {
//   const schema = yup
//     .object({
//       username: yup.string().required(),
//   first_name: yup.string().required(),
//   last_name: yup.string().required(),
//   email: yup.string().required(),
//   phone: yup.string().required(),
//   password: yup.string().required(),
//   confirm_password: yup.string().required(),
//     })
//     .required();
//   type FormData = yup.InferType<typeof schema>;

//   const {
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });
//   return (
//     <>
//       <label
//         className="block mb-2 text-sm font-medium text-neutral-600"
//         htmlFor="user_name"
//       >
//         {label}
//       </label>
//       <input
//         className="block w-full px-4 py-2 border-neutral-700/50 bg-zinc-700/20 text-neutral-600 border rounded-md   focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
//         type={type}
//         {...register(value, { required: true, minLength: 3 })}
//       />
//       <p>{errors.}</p>
//     </>
//   );
// };
