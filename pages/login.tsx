import { NextPage, NextPageContext } from "next";
import React, { FormEvent, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

import AuthLayout from "@components/layout/AuthLayout";
import { GoogleLogin } from "react-google-login";
import { GoogleSvg } from "@components/common/GoogleSvg";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import cookie from "cookie";
import { useRouter } from "next/router";

const LoginPage: NextPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginNextServer = async (e: FormEvent) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    console.log(data);
    try {
      const response = await axios.post("/api/signin", data);
      console.log(response.status);
      toast.success("Successfully Login");
      router.push("/");
    } catch (e: any) {
      console.log(e);
    }
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
      toast.success("Login successful");
      router.push("/");
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <>
      <Toaster />
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
                      Log in with Google
                    </span>
                  </a>
                )}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
              />

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

              {/* <div className="mt-4">
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
            </div> */}

              <form
                onSubmit={(e) => {
                  loginNextServer(e);
                }}
              >
                <div className="mt-4">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-200"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    className="block w-full px-4 py-2 border-gray-700/50 bg-zinc-700/20 text-gray-200 border rounded-md   focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
                    type="email"
                    placeholder="yourEmail@xy.com"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div className="mt-4">
                  <div className="flex justify-start">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-200"
                      htmlFor="loggingPassword"
                    >
                      Password
                    </label>
                  </div>
                  <input
                    id="loggingPassword"
                    className="block w-full px-4 py-2 border-gray-700/50 bg-zinc-700/20 text-gray-200 border rounded-md   focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50 "
                    type="password"
                    placeholder="*******"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className="mt-2 flex justify-end">
                    <a
                      href="#"
                      className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    // onClick={() => {
                    //   loginNextServer();
                    // }}
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-purple-600 rounded hover:bg-purple-700 font-semibold focus:bg-purple-700 focus:ring-opacity-40 focus:border-purple-800 focus:outline-none focus:ring focus:ring-purple-700 cursor-pointer"
                  >
                    Login
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-center mt-4">
                <span className="text-xs text-gray-500  dark:text-gray-400 ">
                  Don't have an account yet?{" "}
                  <Link href="/signup">
                    <span className="text-white font-semibold hover:underline">
                      Sign up
                    </span>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default LoginPage;

export async function getServerSideProps(context: NextPageContext) {
  const { login } = cookie.parse(
    context.req ? context.req.headers.cookie || "" : document.cookie
  );

  if (login === "true") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { login: login || null },
  };
}
