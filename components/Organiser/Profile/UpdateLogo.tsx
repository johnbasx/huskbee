import { BASE_URL, USER_BASE_URL } from "@constants/api-urls";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";

import Image from "next/image";
import { OrganiserProfileStore } from "@store/organiser-profile-store";
import React from "react";
import axios from "axios";
import { orgTokenStore } from "@store/index";
import toast from "react-hot-toast";

const UpdateLogo = ({ user_id }: { user_id: string }) => {
  const { setOrgLogo } = OrganiserProfileStore();
  const { token } = orgTokenStore();

  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [previewImage, setPreviewImage] = useState<string>("");
  const [logo, setLogo] = useState<File | null>(null);

  const UpdateHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    let form_data: any = new FormData();
    form_data.append("logo", logo);
    try {
      const response = await axios.put(
        USER_BASE_URL + "update-organiser-profile/" + user_id,
        form_data,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log("logo ", response.data);
      localStorage.setItem("logo", response.data.logo);

      setOrgLogo(response.data.logo);
      setOpen(false);
      toast.success("Logo updated Successfully");
    } catch (e: any) {
      toast.error("Cannot Update");
      console.log(e);
      setOpen(false);
    }
  };

  return (
    <>
      <a
        onClick={() => {
          setOpen(true);
        }}
        className="inline-flex items-center shadow-sm px-2.5 py-0.5 text-sm leading-5 font-medium rounded-full text-blue-600 hover:bg-gray-50 hover:text-black cursor-pointer"
      >
        Update logo
      </a>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    {/* <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 "> */}
                    <div className="flex justify-center">
                      <Image
                        src={
                          previewImage === ""
                            ? "/logo/placeholder_image.png"
                            : previewImage
                        }
                        height={200}
                        width={200}
                        alt="Organiser logo"
                      />
                    </div>
                    {/* </div> */}
                  </div>
                  <div className="bg-white px-4 py-3 mb-2 sm:flex sm:flex-row-reverse sm:px-10">
                    {/* <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-1/2"
                      
                    >
                      Save
                    </button> */}

                    <div className="flex justify-center w-full">
                      <div className="relative">
                        <label
                          title="Click to upload"
                          htmlFor="button2"
                          className="cursor-pointer flex items-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group dark:before:bg-darker dark:hover:before:border-gray-500 before:bg-gray-100 dark:before:border-gray-600 before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                        >
                          {/* <div className="w-max relative">
                            <img
                              className="w-12"
                              src="https://www.svgrepo.com/show/485545/upload-cicle.svg"
                              alt="file upload icon"
                              width="512"
                              height="512"
                            />
                          </div> */}
                          <div className="relative">
                            <span className="block text-base font-semibold relative text-blue-900 dark:text-white group-hover:text-blue-500">
                              Select logo
                            </span>
                            {/* <span className="mt-0.5 block text-sm text-gray-500 dark:text-gray-400">
                              Max 2 MB
                            </span> */}
                          </div>
                        </label>
                        <input
                          onChange={(e) => {
                            setPreviewImage(
                              URL.createObjectURL(e.target.files![0])
                            );
                            setLogo(e.target.files![0]);
                          }}
                          hidden
                          type="file"
                          name="button2"
                          id="button2"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={(e) => UpdateHandler(e)}
                        className="inline-flex w-20  justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-1/2 h-10 "
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default UpdateLogo;
