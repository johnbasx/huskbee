import ColorfulBlur from "@components/blur/ColorfulBlur";
import AuthLayout from "@components/layout/AuthLayout";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";

const LoginPage: NextPage = () => {
  const GoogleSvg = () => (
    <svg className="w-6 h-6" viewBox="0 0 40 40">
      <path
        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
        fill="#FFC107"
      />
      <path
        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
        fill="#FF3D00"
      />
      <path
        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
        fill="#4CAF50"
      />
      <path
        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
        fill="#1976D2"
      />
    </svg>
  );
  return (
    <AuthLayout>
      <div className="flex flex-1 h-screen max-w-7xl mx-auto flex-col justify-center items-center relative px-2">
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
          <div className="hidden bg-cover lg:block lg:w-1/2 bg-loginImage"></div>
          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
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
            <p className="text-center text-xs">
              by <span className="font-black tracking-tighter">Foxbeta</span>
            </p>
            <p className="text-xl text-center mt-4 text-gray-200">
              Welcome back!
            </p>
            <a
              href="#"
              className="flex items-center justify-center mt-4 transition-colors duration-300 transform border rounded-lg border-gray-700/50 bg-zinc-800/20 text-gray-200 hover:bg-zinc-700/50"
            >
              <div className="px-4 py-2">
                <GoogleSvg />
              </div>

              <span className="w-5/6 px-6 py-3 font-bold text-center">
                Sign in with Google
              </span>
            </a>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                or login with email
              </a>

              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>

            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-200"
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 border-gray-700/50 bg-zinc-700/20 text-gray-200 border rounded-md   focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
                type="email"
                placeholder="huskbee@example.com"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-200"
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>

              <input
                id="loggingPassword"
                className="block w-full px-4 py-2 border-gray-700/50 bg-zinc-700/20 text-gray-200 border rounded-md   focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50 "
                type="password"
                placeholder="*******"
              />
            </div>

            <div className="mt-8">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-purple-600 rounded hover:bg-purple-700 font-semibold focus:bg-purple-700 focus:ring-opacity-40 focus:border-purple-800 focus:outline-none focus:ring focus:ring-purple-700">
                Login
              </button>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

              <a
                href="#"
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                or sign up
              </a>

              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
