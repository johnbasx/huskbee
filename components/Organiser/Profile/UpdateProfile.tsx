import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

import { USER_BASE_URL } from "@constants/api-urls";
import axios from "axios";
import { orgTokenStore } from "@store/index";

export type UpdateProfleProp = {
  lookUp: string;
  name: string;
  label: string;
  link: string;
  setContent: Dispatch<string>;
};

const UpdateProfile = ({
  lookUp,
  name,
  label,
  link,
  setContent,
}: UpdateProfleProp) => {
  const [open, setOpen] = useState(false);
  const { token } = orgTokenStore();
  const [value, setvalue] = useState("");

  const cancelButtonRef = useRef(null);

  const UpdateHandler = async () => {
    const data = { [name]: value };

    try {
      const response = await axios.put(USER_BASE_URL + link + lookUp, data, {
        headers: { Authorization: "Bearer " + token },
      });

      setOpen(false);
      setContent(value);
      toast.success(label + "updated Successfully");
    } catch (e: any) {
      toast.error("Cannot Update" + label);
      console.log(e);
      setOpen(false);
    }
  };

  return (
    <>
      <Toaster />
      <dl className="mt-8 divide-y divide-gray-200 text-sm lg:mt-0 lg:col-span-6">
        <div className="pb-4 flex items-end justify-end">
          <a
            onClick={() => {
              setOpen(true);
            }}
            className="font-medium text-blue-300 cursor-pointer"
          >
            Edit
          </a>
        </div>
      </dl>
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
            <div className="fixed inset-0  backdrop-blur-md bg-gray-900/50 transition-opacity" />
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-gray-800  px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="">
                      <div className="mt-3 text-center sm:mx-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-200"
                        >
                          Change {label}
                        </Dialog.Title>
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                            <input
                              onChange={(e) => setvalue(e.target.value)}
                              type="text"
                              name={name}
                              id={name}
                              autoComplete={name}
                              className="block w-full px-4 py-2 text-gray-200 border-b rounded-md border-gray-500 bg-gray-800 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
                              placeholder="fullname"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800 px-4 py-3 mb-2 sm:flex sm:flex-row-reverse sm:px-10">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-1/2"
                      onClick={() => UpdateHandler()}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-1/2"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
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

export default UpdateProfile;