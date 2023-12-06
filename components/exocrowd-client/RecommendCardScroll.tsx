import { recommendedData, RecommendedProps } from "@/src/contents/recommendData";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { TbMoodPlus } from "react-icons/tb";

const RecommendCard = ({ ...data }: RecommendedProps) => {
    return (
        <div className='inline-block pr-3'>
            <Link href={data.link}>
                <div className='relative w-40 h-40 md:w-[30rem] md:h-[20rem] max-w-7xl overflow-hidden duration-300 ease-in-out bg-gray-200 rounded-3xl'>
                    <Image
                        src={data.imageUrl}
                        alt={data.name}
                        height={100}
                        width={100}
                        className='object-cover w-full h-full aspect-square'
                    />
                    <div
                        className={clsx(
                            "absolute inset-0 bg-gradient-to-b from-black/10 to-black/90 flex justify-left items-end p-4"
                        )}
                    >
                        <h3 className='font-bold leading-tight tracking-tight text-white'>
                            {data.name}
                        </h3>
                    </div>
                </div>
            </Link>
        </div>
    );
};

const RecommendCardScoll = () => {
    return (
        <>
            <div className='flex flex-col m-auto max-w-7xl p-auto'>
                <div className='flex items-center justify-between px-3 py-5 mx-2 text-xl font-bold text-black pt-7'>
                    <div className='flex items-center space-x-1'>
                        <TbMoodPlus className='w-5 h-5 text-emerald-500' />
                        <h1>Recommended for you</h1>
                    </div>
                    <span className='px-2 py-1 text-xs font-semibold text-gray-200 bg-black rounded-full'>
                        View all
                    </span>
                </div>
                <div className='flex pb-0 overflow-x-scroll hide-scroll-bar'>
                    <div className='flex ml-5 flex-nowrap lg:ml-40 md:ml-20'>
                        <div className='inline-block pr-3'>
                            <div className='flex items-center justify-center w-32 h-32 max-w-xs overflow-hidden duration-300 ease-in-out rounded-3xl'>
                                <div className='flex flex-col space-y-4'>
                                    <h3 className='text-sm font-medium text-gray-500'>
                                        We hope the best for your health
                                    </h3>
                                    <span className='flex items-center justify-center w-10 h-10 text-white bg-black rounded-full'>
                                        <BiArrowBack className='w-6 h-6' />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {recommendedData.map((data, index) => (
                            <RecommendCard key={data.name + index * 3} {...data} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecommendCardScoll;