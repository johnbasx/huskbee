import * as yup from "yup";

import { Path, SubmitHandler, UseFormRegister, useForm } from "react-hook-form";
import React, {
  FormEvent,
  HTMLInputTypeAttribute,
  ReducerState,
  useReducer,
} from "react";
import toast, { Toaster } from "react-hot-toast";

import AuthLayout from "@components/layout/AuthLayout";
import ColorfulBlur from "@components/blur/ColorfulBlur";
import { GoogleLogin } from "react-google-login";
import { GoogleSvg } from "@components/common/GoogleSvg";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";
import Username from "@components/signUp/FormInputs/Username";
import axios from "axios";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";

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
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirmPassword: "",
  user_name: "",
};

const PHONENUMBER_REGEX = /^[0-9\- ]{10}$/;
const schema = yup
  .object({
    username: yup
      .string()
      .required("Username is required")
      .matches(/^[A-Za-z ]*$/, "Please enter a valid name")
      .min(2, "Enter a valid name")
      .max(40, "Name is too long"),
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    email: yup.string().required("Email is required"),
    phone: yup
      .string()
      .matches(PHONENUMBER_REGEX, {
        message: "Phone number is not valid",
        excludeEmptyString: true,
      })
      // .min(10, 'Phone number should be of 10 digits')
      .nullable()
      .max(9999999999, "Phone number can't be more than 10 digits")
      .required("Phone is required"),
    password: yup.string().required("Password is required"),
    confirm_password: yup.string().required("Confirm password is required"),
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
      const response = await axios.post("/api/googleSignin", data);
      console.log(response);
      toast.success("Signup successful");
      router.push("/");
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
        <div className="my-8 flex flex-1 h-screen max-w-7xl mx-auto flex-col justify-center items-center relative px-2">
          <div className="h-full w-full pointer-events-none absolute">
            <div className="relative h-screen w-full">
              <Image
                height={100}
                width={100}
                className="h-full w-full blur-3xl object-cover opacity-30"
                src="/logo/axewhy-colorful-logo.png"
                alt="Logo backdrop"
              />
            </div>
          </div>
          <div className="flex w-full max-w-sm mx-auto overflow-hidden rounded-3xl shadow-lg bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-lg lg:max-w-4xl">
            {/* Login image for Large Screens */}
            {/* <div className="hidden bg-cover lg:block lg:w-1/2 bg-loginImage"></div> */}
            <div className="w-full px-6 py-8 md:px-8 lg:w-full">
              <div className="w-full flex justify-center py-4 relative items-center">
                <Image
                  alt="Company Logo"
                  src="/logo/axewhy-colorful-logo.png"
                  width={100}
                  height={100}
                  className="object-contain h-5"
                />
              </div>
              <h2 className="text-2xl font-bold text-center text-white">
                HuskBee
              </h2>

              <form onSubmit={handleSubmit(onsubmit)} className="">
                <div className="grid grid-cols-6 gap-6">
                  <div className="mt-4 col-span-6 sm:col-span-3">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-200"
                      htmlFor="user_name"
                    >
                      Username
                    </label>
                    <input
                      className="block w-full px-4 py-2 border-gray-700/50 bg-zinc-700/20 text-gray-200 border rounded-md   focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
                      type="text"
                      {...register("username")}
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

                  <div className="mt-4 col-span-6 sm:col-span-3">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-200"
                      htmlFor="user_name"
                    >
                      First name
                    </label>
                    <input
                      className="block w-full px-4 py-2 border-gray-700/50 bg-zinc-700/20 text-gray-200 border rounded-md   focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
                      type="text"
                      {...register("first_name")}
                    />
                    <p>{errors.first_name?.message}</p>
                  </div>

                  <div className="mt-4 col-span-6 sm:col-span-3">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-200"
                      htmlFor="user_name"
                    >
                      Last name
                    </label>
                    <input
                      className="block w-full px-4 py-2 border-gray-700/50 bg-zinc-700/20 text-gray-200 border rounded-md   focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
                      type="text"
                      {...register("last_name")}
                    />
                    <p>{errors.last_name?.message}</p>
                  </div>

                  <div className="mt-4 col-span-6 sm:col-span-3">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-200"
                      htmlFor="user_name"
                    >
                      Email
                    </label>
                    <input
                      className="block w-full px-4 py-2 border-gray-700/50 bg-zinc-700/20 text-gray-200 border rounded-md   focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
                      type="text"
                      {...register("email")}
                    />
                    <p>{errors.email?.message}</p>
                  </div>
                  <div className="mt-4 col-span-6 sm:col-span-3">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-200"
                      htmlFor="user_name"
                    >
                      Phone Number
                    </label>
                    <input
                      className="block w-full px-4 py-2 border-gray-700/50 bg-zinc-700/20 text-gray-200 border rounded-md   focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
                      type="text"
                      {...register("phone")}
                    />
                    <p>{errors.phone?.message}</p>
                  </div>

                  <div className="mt-4 col-span-6 sm:col-span-3">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-200"
                      htmlFor="user_name"
                    >
                      Password
                    </label>
                    <input
                      className="block w-full px-4 py-2 border-gray-700/50 bg-zinc-700/20 text-gray-200 border rounded-md   focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
                      type="password"
                      {...register("password")}
                    />
                    <p>{errors.password?.message}</p>
                  </div>

                  <div className="mt-4 col-span-6 sm:col-span-3">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-200"
                      htmlFor="user_name"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="block w-full px-4 py-2 border-gray-700/50 bg-zinc-700/20 text-gray-200 border rounded-md   focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
                      type="password"
                      {...register("confirm_password")}
                    />
                    <p>{errors.confirm_password?.message}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-purple-600 rounded hover:bg-purple-700 font-semibold focus:bg-purple-700 focus:ring-opacity-40 focus:border-purple-800 focus:outline-none focus:ring focus:ring-purple-700"
                  >
                    Sign up
                  </button>
                </div>
              </form>

              <GoogleLogin
                clientId="829759909963-gqla1538rhsb9gj92b8dbfkl0oan496u.apps.googleusercontent.com"
                render={(renderProps) => (
                  // <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>

                  <a
                    // onClick={() => loginWithGoogle()}
                    onClick={renderProps.onClick}
                    // disabled={renderProps.disabled}
                    className="flex items-center justify-center mt-4 transition-colors duration-300 transform border rounded-lg border-gray-700/50 bg-zinc-800/20 text-gray-200 hover:bg-zinc-700/50 cursor-pointer"
                  >
                    <div className="px-4 py-2">
                      <GoogleSvg />
                    </div>

                    <span className="px-4 py-3 font-bold text-center">
                      Sign up with Google
                    </span>
                  </a>
                )}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
              />

              <div className="flex items-center justify-center mt-4">
                {/* <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span> */}

                <span className="text-xs text-gray-500  dark:text-gray-400 ">
                  Already have an account?{" "}
                  <Link href="/login">
                    <span className="text-white font-semibold hover:underline">
                      Login{" "}
                    </span>
                  </Link>
                </span>

                {/* <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span> */}
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
//         className="block mb-2 text-sm font-medium text-gray-200"
//         htmlFor="user_name"
//       >
//         {label}
//       </label>
//       <input
//         className="block w-full px-4 py-2 border-gray-700/50 bg-zinc-700/20 text-gray-200 border rounded-md   focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
//         type={type}
//         {...register(value, { required: true, minLength: 3 })}
//       />
//       <p>{errors.}</p>
//     </>
//   );
// };
