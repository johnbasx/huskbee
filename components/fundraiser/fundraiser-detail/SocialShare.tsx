import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useRef, useState } from 'react'

import { AtSymbolIcon } from '@heroicons/react/24/solid';
import { BsTwitterX } from "react-icons/bs";
import { CROWDFUNDING_BASE_URL } from '@constants/api-urls';
import { FaRegCopy } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import { ShareCountStore } from '@store/fundraiser-detail-store';
import { SiFacebook } from "react-icons/si";
import { XMarkIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import toast from 'react-hot-toast';

// import { socialShare } from '@constants/list-items';

export const socialShare = [{
    name: "Facebook",
    logo: SiFacebook,
    color: "text-[#3498db]"
},
{
    name: "Whatsapp",
    logo: RiWhatsappFill,
    color: "text-[#25d366]"
},
{
    name: "Twitter",
    logo: BsTwitterX,
    color: "text-[#000000]"
},
{
    name: "Telegram",
    logo: FaTelegramPlane,
    color: "text-[#229ED9]"
},
{
    name: "E-mail",
    logo: AtSymbolIcon,
    color: "text-[#000000]"
}]


const SocialShare = ({ fundraiser_id }: { fundraiser_id: string }) => {
    const { count, setCount } = ShareCountStore()

    const [open, setOpen] = useState(false)
    const [shareCount, setShareCount] = useState<number>(count)
    const cancelButtonRef = useRef(null)
    const [link, setLink] = useState<string>("https://www.figma.com/file/NlfVhYygR9mAQasassdsada/Share...")

    useEffect(() => {
        setCount(shareCount)
    }, [shareCount])

    const copyTextToClipboard = async () => {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(link);
        } else {
            return document.execCommand('copy', true, link);
        }
    }

    const shareCountHandler = async (e: React.MouseEvent) => {
        e.preventDefault()
        try {
            const response = await axios.put(CROWDFUNDING_BASE_URL + 'share-fundraiser/' + fundraiser_id)
            setShareCount(response.data.share_count)
            // console.log("Share_count: ", response.data.share_count);
            toast.success('Share success');
            setOpen(false)
        } catch (e: any) {
            console.log(e);
            toast.error('Share failed');

        }
    }

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="rounded-xl py-3 px-4 bg-blue-600 text-white w-full font-semibold text-lg"
            >
                Share this fundraiser
            </button>
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
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="w-full grid place-content-center p-3">

                                        <div id="modal" className="rounded-2xl bg-[#FEFEFE] p-8 transition-transform duration-300">

                                            <div className="flex justify-between items-center mb-11">
                                                <span className="text-[#3D5A80] font-semibold leading-5">Share with</span>
                                                <button id="close" onClick={() => setOpen(false)}>
                                                    <XMarkIcon className='h-7 w-7 text-black' />
                                                </button>
                                            </div>

                                            <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4 mb-11">
                                                {socialShare.map(item => (
                                                    <button onClick={(e) => shareCountHandler(e)} key={item.name} className="flex flex-col justify-end items-center gap-2 group">
                                                        <div id="icon" className="p-6 rounded-full bg-[#9d9d9d0a] group-hover:bg-[#ee6c4d14] transition-all duration-300 ">
                                                            <item.logo className={`h-7 w-7 ${item.color}`} />
                                                        </div>
                                                        <h3 className={`text-black group-hover:${item.color} text-xs leading-[0.9375rem]`}>{item.name}</h3>
                                                    </button>
                                                ))}

                                                <button className="flex flex-col justify-end items-center gap-2 group">
                                                    <div id="icon" className="p-6 rounded-full bg-[#9d9d9d0a] group-hover:bg-[#ee6c4d14] transition-all duration-300">
                                                        <IoShareSocial className='h-7 w-7 text-slate-700' />
                                                    </div>
                                                    <h3 className="text-black group-hover:text-[#EE6C4D] text-xs leading-[0.9375rem]">More</h3>
                                                </button>
                                            </div>

                                            <div className="flex flex-col justify-center">
                                                <span className="text-gray-700 text-center text-xs leading-[0.9375rem] mb-4">Or share with link</span>
                                                <div className="flex relative w-full">
                                                    <input type="text" placeholder="sada" className="w-full bg-[#9d9d9d0a] outline-none p-4 placeholder:text-text-slate-800 text-sm leading-[1.09375rem] text-slate-800 pr-16 rounded-2xl"
                                                        defaultValue={link} readOnly />
                                                    <button type='button' onClick={() => copyTextToClipboard()} className="absolute right-6 top-1/2 -translate-y-1/2">
                                                        <FaRegCopy className='h-6 w-6 text-[#EE6C4D]' />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

export default SocialShare