import { BASE_URL, CROWDFUNDING_BASE_URL } from "@constants/api-urls";
import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, FormEvent, Fragment, useRef, useState } from "react";

import { FunraiserPhotoType } from "../../../pages/organiser/fundraiser-detail/[fundraiserId]";
import axios from "axios";
import { orgTokenStore } from "@store/index";
import toast from "react-hot-toast";

const AddMorePhoto = ({
  fundraiserPhotos,
  setFundraiserPhoto,
  fundraiserId,
}: {
  fundraiserPhotos: FunraiserPhotoType[];
  setFundraiserPhoto: Dispatch<FunraiserPhotoType[]>;
  fundraiserId: string;
}) => {
  const { token } = orgTokenStore();
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const cancelButtonRef = useRef(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      let form_data: any = new FormData();
      form_data.append("photo", image);
      form_data.append("fundraiser", fundraiserId);

      const response = await axios.post(
        CROWDFUNDING_BASE_URL + "add-fundraiser-photo/",
        form_data,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );

      // console.log(response.data.photo);
      const photo = response.data.photo.replace(BASE_URL, "");
      const newPhotoObj = {
        id: response.data.id,
        fundraiser: response.data.fundraiser,
        photo: photo,
      };
      const newFundraiserPhotos = [newPhotoObj].concat(fundraiserPhotos);

      setFundraiserPhoto(newFundraiserPhotos!);
      toast.success("Photo uploaded successfully");

      setOpen(false);
    } catch (e: any) {
      toast.error("Failed Photo upload");
      console.log(e);
    }
  };

  return (
    <>
      {fundraiserPhotos.length > 0 ? (
        <a
          onClick={() => {
            setOpen(true);
          }}
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500 cursor-pointer"
        >
          Add more photo
        </a>
      ) : (
        <a
          onClick={() => {
            setOpen(true);
          }}
          className="text-blue-700 text-base cursor-pointer"
        >
          Add photo
        </a>
      )}

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
                  <form
                    onSubmit={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="">
                        <div className="mt-3 text-center sm:mx-4 sm:mt-0 sm:text-left">
                          <Dialog.Title
                            as="h3"
                            className="text-base font-semibold leading-6 text-gray-700"
                          >
                            Add new photo
                          </Dialog.Title>
                          <div className="mt-2">
                            <input
                              required
                              onChange={(e) => {
                                setImage(e.target.files![0]);
                              }}
                              name="first_image"
                              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                              id="first_image"
                              type="file"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white px-4 py-3 mb-2 sm:flex sm:flex-row-reverse sm:px-10">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-1/2"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-1/2"
                        onClick={() => {
                          setOpen(false);
                          setImage(null);
                        }}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default AddMorePhoto;
