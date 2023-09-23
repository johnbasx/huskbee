import { Description, Goal, Title } from "./FundraiserInputs";
import { Dialog, Transition } from "@headlessui/react";
import { FundraiserStore, orgTokenStore } from "@store/index";
import { Path, SubmitHandler, UseFormRegister, useForm } from "react-hook-form";
import React, { Fragment, useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { CROWDFUNDING_BASE_URL } from "@constants/api-urls";
import axios from "axios";

export interface FundraiserFormValues {
  title: string;
  goal: string;
  description: string;
}

export type FundraiserInputProps = {
  label: string;
  name: Path<FundraiserFormValues>;
  register: UseFormRegister<FundraiserFormValues>;
  required: boolean;
};

const CreateFundraiser = () => {
  const { token } = orgTokenStore();
  const { fundraisers, setFundraisers } = FundraiserStore();
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const { register, handleSubmit } = useForm<FundraiserFormValues>();

  const onSubmit: SubmitHandler<FundraiserFormValues> = async (data) => {
    const newData = {
      ...data,
      open_status: true,
    };

    try {
      const response = await axios.post(
        CROWDFUNDING_BASE_URL + "create-fundraiser-event",
        newData,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );

      // console.log("fundraiser_response: ", response.data);

      const fundraiser = fundraisers?.concat({
        id: response.data.id,
        title: response.data.title,
        goal: response.data.goal,
        description: response.data.description,
        open_status: response.data.open_status,
        created_at: response.data.created_at,
        organiser: response.data.organiser,
      });

      setFundraisers(fundraiser!);
      setOpen(false);
      toast.success("Fundraiser event created");

      // console.log(response);
    } catch (e: any) {
      toast.error("Cannot create fundraiser event");
      console.log(e);
      setOpen(false);
    }
  };

  return (
    <>
      <Toaster />
      <button
        onClick={() => {
          setOpen(true);
        }}
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
      >
        Create Fundraiser event
      </button>
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
            <Dialog.Overlay className="fixed inset-0 backdrop-blur-md bg-gray-900/50" />
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
                  <div className="bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                    <div className="w-full max-w-md px-2 py-4 sm:px-0">
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        // method="POST"
                        className="mx-auto max-w-xl "
                      >
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                          <div className="sm:col-span-2">
                            {" "}
                            <Title
                              label="Title"
                              name="title"
                              register={register}
                              required
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <Goal
                              label="Goal"
                              name="goal"
                              register={register}
                              required
                            />
                          </div>

                          <div className="sm:col-span-2">
                            <Description
                              label="Description"
                              name="description"
                              register={register}
                              required
                            />
                          </div>
                        </div>
                        <div className="mt-10">
                          <button
                            type="submit"
                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
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

export default CreateFundraiser;
