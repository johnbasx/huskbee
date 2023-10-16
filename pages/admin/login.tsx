import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import React, { FormEvent, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { Spinner } from "flowbite-react";
import axios from "axios";
import { useRouter } from "next/router";

const login = () => {
  useEffect(() => {
    const el = document.querySelector("html") as HTMLElement | null;
    el != null ? el.classList.add("bg-white") : "";
  }, []);

  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState("password");

  const login = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post("/api/officeAdminSignin", data);
      localStorage.setItem("off_username", response.data.user);
      toast.success("Successfully Login");
      router.push("/admin/home");
      setLoading(false);
    } catch (e: any) {
      console.log(e);
      toast.error("Cannot Login");
      setLoading(false);
    }
  };

  useEffect(() => {
    togglePassword
      ? setPasswordInputType("text")
      : setPasswordInputType("password");
  }, [togglePassword]);

  return (
    <>
      <Toaster />
      <div className="min-h-full bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8 ">
        <div className="">
          <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white">
            <img
              className="mx-auto h-12 w-auto"
              src="/logo/axewhy-colorful-logo.png"
              alt="Company-logo"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Huskbee Admin
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {/* Or{" "} */}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                All activities are strictly monitored
              </a>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 sm:px-10">
              <form
                onSubmit={(e) => {
                  login(e);
                }}
                className="space-y-6"
                action="#"
                method="POST"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        id="password"
                        name="password"
                        type={passwordInputType}
                        autoComplete="current-password"
                        required
                        className="appearance-none text-black block w-full px-3 py-2 border  border-r-0 border-gray-300 rounded-l-md shadow-sm placeholder-gray-400  sm:text-sm"
                      />
                      <span
                        onClick={(e) => setTogglePassword(!togglePassword)}
                        className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
                      >
                        {togglePassword ? (
                          <EyeIcon className="h-6 w-6" />
                        ) : (
                          <EyeSlashIcon className="h-6 w-6" />
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {loading ? (
                      <>
                        {" "}
                        <span className="mr-2">Signing in...</span>{" "}
                        <Spinner className="text-white h-6 w-6" />
                      </>
                    ) : (
                      "Sign in"
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span>
                      <ExclamationTriangleIcon className="h-6 w-6 text-red-500" />
                    </span>
                    <span className="px-2 bg-white text-gray-500">
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

export default login;
