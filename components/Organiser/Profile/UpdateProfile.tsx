import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef, useState } from 'react';

import { AddressTabListStore } from '@store/organiser-profile-store';
import { OrganiserProfileStore } from '@store/organiser-profile-store';
import { USER_BASE_URL } from '@constants/api-urls';
import axios from 'axios';
import { orgTokenStore } from '@store/index';
import { toast } from 'react-hot-toast';

export type UpdateProfleProp = {
  lookUp: string;
  name: string;
  label: string;
  link: string;
  defaultValue: string;
};

const UpdateProfile = ({
  lookUp,
  name,
  label,
  link,
  defaultValue,
}: UpdateProfleProp) => {
  const [open, setOpen] = useState(false);
  const { token } = orgTokenStore();
  const [value, setvalue] = useState('');
  // const { addressTabList, setAddressTabList } = AddressTabListStore();

  const cancelButtonRef = useRef(null);
  const {
    setOrgProfile,
    addresses,
    setAddresses,
    bankAccounts,
    setBankAccounts,
  } = OrganiserProfileStore();

  const UpdateHandler = async () => {
    const data = { [name]: value };

    try {
      const response = await axios.put(USER_BASE_URL + link + lookUp, data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setOpen(false);
      toast.success(`${label} updated Successfully`);

      if (link === 'update-organiser-address/') {
        const temp_list = addresses;
        const index = temp_list.findIndex((el) => el.id === response.data.id);
        temp_list[index] = response.data;

        setAddresses(temp_list);

        // const newTabList = addressTabList.map((item) => {
        // 	if (item.name === defaultValue) {
        // 		return { ...item, name: value };
        // 	}
        // 	return item;
        // });

        // setAddressTabList(newTabList);
      } else if (link === 'update-organiser-bank/') {
        const temp_list = bankAccounts;
        const index = temp_list.findIndex((el) => el.id === response.data.id);
        temp_list[index] = response.data;

        setBankAccounts(temp_list);
      } else if (link === 'update-organiser-profile/') {
        setOrgProfile(response.data);
      }
    } catch (e) {
      toast.error(`Cannot Update${label}`);
      console.log(e);
      setOpen(false);
    }
  };

  return (
    <>
      <button
        type='button'
        onClick={() => {
          setOpen(true);
        }}
        className='inline-flex cursor-pointer items-center rounded-full px-2.5 py-0.5 text-sm font-medium leading-5 text-blue-600 shadow-sm hover:bg-neutral-50 hover:text-black'
      >
        Edit
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-neutral-500 bg-opacity-25 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                  <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                    <div className=''>
                      <div className='mt-3 text-center sm:mx-4 sm:mt-0 sm:text-left'>
                        <Dialog.Title
                          as='h3'
                          className='text-base font-semibold leading-6 text-neutral-700'
                        >
                          Change {label}
                        </Dialog.Title>
                        <div className='mt-2'>
                          <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-neutral-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 '>
                            {label === 'Description' ? (
                              <textarea
                                onChange={(e) => setvalue(e.target.value)}
                                name={name}
                                id={name}
                                autoComplete={name}
                                rows={4}
                                className='block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                defaultValue={defaultValue}
                              />
                            ) : (
                              <input
                                onChange={(e) => setvalue(e.target.value)}
                                type='text'
                                name={name}
                                id={name}
                                autoComplete={name}
                                defaultValue={defaultValue}
                                className='block w-full rounded-md border-b border-neutral-500 px-4 py-2 text-neutral-700 autofill:bg-zinc-700/50 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
                                placeholder='fullname'
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mb-2 bg-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-10'>
                    <button
                      type='button'
                      className='inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-1/2'
                      onClick={() => UpdateHandler()}
                    >
                      Save
                    </button>
                    <button
                      type='button'
                      className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50 sm:mt-0 sm:w-1/2'
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
