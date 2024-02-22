import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'
import { Dispatch, FormEvent, Fragment, useRef, useState } from 'react'
import axios, { FormDataVisitorHelpers } from 'axios';

import toast from 'react-hot-toast';

const GetPhoneNumberModal = ({ open, setOpen, googleToken }: { open: boolean; setOpen: Dispatch<boolean>; googleToken: string }) => {
    const [phoneNumber, setPhoneNumber] = useState('')

    const LoginWithGoogle = async (e: FormEvent) => {
        e.preventDefault()

        const data = {
            access_token: googleToken,
            phone_number: phoneNumber
        };
        console.log('FM: ', phoneNumber);
        console.log('FM: ', googleToken);
        // try {
        //     const response = await axios.post('/api/googleSignup', data);
        //     console.log(response);
        //     toast.success('Signup successful');
        //     //   router.push('/');
        // } catch (e: any) {
        //     console.log(e.response);
        // }
    };

    const cancelButtonRef = useRef(null)
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
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
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                                    <button
                                        type="button"
                                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XMarkIcon className="h-6 w-6 text-black" aria-hidden="true" />
                                    </button>
                                </div>
                                <form onSubmit={(e) => { LoginWithGoogle(e) }} >
                                    <div>
                                        <label htmlFor="phone_number" className="block text-base font-medium leading-6 text-black">
                                            Phone number
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                type="phone_number"
                                                name="phone_number"
                                                id="phone_number"
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="+91 1234567842"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-6 flex justify-center mx-auto sm:gap-3">
                                        <button
                                            type="submit"
                                            className="inline-flex  justify-center rounded-md border-blue-600 bg-blue-600 hover:bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:col-start-2"
                                        >
                                            Proceed signing up
                                        </button>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default GetPhoneNumberModal