import { GetDaysLeft, GetPercentage, toIndianCurrency } from '@utils/index';
import {
    TbDevicesHeart,
    TbMoodHeart,
    TbPigMoney,
    TbTrendingUp,
    TbUserHeart,
    TbUserUp,
} from "react-icons/tb";

import { IconType } from "react-icons";
import Link from 'next/link';
import React from 'react'
import SocialShare from './SocialShare';

type DonationDetailType = {
    share_count: number;
    fundraiser_id: string;
    total_donation: number;
    target_amount: number;
    total_donors: number;
    end_date: string;
    goToDonatePage: () => {};
};
const DonationDetail = ({
    share_count,
    fundraiser_id,
    total_donation,
    target_amount,
    total_donors,
    end_date,
    goToDonatePage
}: DonationDetailType) => {
    return (
        <div className="bg-white rounded-2xl p-5 shadow-lg">
            <div className="flex flex-col gap-4 mb-4">
                <div className="text-base flex flex-col gap-2">
                    <div className="flex flex-col">
                        <span className="text-xs font-medium uppercase text-slate-500">
                            Total Contributions
                        </span>
                        <span className="font-bold text-slate-800 text-4xl font-nato tracking-tight">
                            {toIndianCurrency(total_donation)}
                            {/* <span className="font-nunito">raised</span> */}
                        </span>
                    </div>
                    <span className="text-base font-nunito text-slate-600">
                        raised out of{" "}
                        <span className="font-nato">{toIndianCurrency(target_amount)}</span>
                    </span>
                </div>

                <div>
                    <span id="ProgressLabel" className="sr-only">
                        Donation Progress
                    </span>

                    <span
                        // role="progressbar"
                        // aria-labelledby="ProgressLabel"
                        // aria-valuenow="75"
                        className="block rounded-full bg-blue-900/20"
                    >
                        <span
                            className="block h-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500"
                            style={{ width: GetPercentage(total_donation, target_amount) }}
                        // Dynamic data for progress bar
                        />
                    </span>
                </div>
                <span className="font-nato inline-flex items-center gap-2 text-sm font-medium text-slate-500">
                    <span>
                        {total_donors}
                        <span className="font-nunito"> donations</span>
                    </span>
                    <span className="text-slate-400">&bull;</span>
                    <span>
                        {GetDaysLeft(end_date) < 0 ? (
                            "fundraiser ended"
                        ) : (
                            <>
                                {GetDaysLeft(end_date)}
                                <span className="font-nunito">days left</span>
                            </>
                        )}
                    </span>
                </span>
            </div>
            <div className="flex flex-col gap-2 border-b pb-3 border-dashed">
                {/* <Link href={`/ad`}> */}
                <button
                    type="button"
                    onClick={() => goToDonatePage()}
                    className="rounded-xl py-3 px-4 bg-slate-950 text-white w-full font-semibold text-lg"
                >
                    Contribute now
                </button>
                {/* </Link> */}
                <SocialShare fundraiser_id={fundraiser_id} />

                <button
                    type="button"
                    className="rounded-xl py-3 px-4 bg-slate-100 border text-slate-700 w-full font-semibold text-sm"
                >
                    Make monthly contributions
                </button>
                <span className="inline-flex mt-1 text-sm justify-center items-center text-center font-medium text-slate-500 gap-1">
                    <span className="font-nato">
                        {share_count}
                        {/* 345 */}
                    </span>
                    shares
                    <span>&bull;</span>

                    <span className="font-nato">204</span>
                    subscribed donations
                </span>
            </div>

            <div className="flex flex-col gap-6 mt-4">
                <span className="font-nato inline-flex items-center gap-2 font-semibold text-emerald-600">
                    <span className="bg-emerald-100 rounded-full p-2.5">
                        <TbTrendingUp className="text-xl" />
                    </span>
                    1.4K <span className="font-nunito"> people just donated</span>
                </span>
                <DonatedUserAndAmountSmallDisplay
                    username="Anonymous"
                    donated_amount={2500}
                    redirect_link="#!"
                    redirect_text="Recent donations"
                    Icon={TbDevicesHeart}
                />
                <DonatedUserAndAmountSmallDisplay
                    username="Dravid Singh"
                    donated_amount={13500}
                    redirect_link="#!"
                    redirect_text="Top donations"
                    Icon={TbMoodHeart}
                />
                <DonatedUserAndAmountSmallDisplay
                    username="Dr. Leishem"
                    donated_amount={2500}
                    redirect_link="#!"
                    redirect_text="First donation"
                    Icon={TbUserUp}
                />
                <div className="flex flex-wrap gap-2">
                    <Link
                        href="#!"
                        className="bg-slate-50 text-xs inline-flex items-center gap-1 text-center max-w-fit rounded-md border font-semibold px-4 py-1.5"
                    >
                        <TbPigMoney />
                        View all transactions
                    </Link>
                    <Link
                        href="#!"
                        className="bg-slate-50 text-xs inline-flex items-center gap-1 text-center max-w-fit rounded-md border font-semibold px-4 py-1.5"
                    >
                        <TbUserHeart />
                        View all donors
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DonationDetail


export type DonatedUserAndAmountSmallDisplayType = {
    username: string;
    donated_amount: number;
    redirect_link: string;
    redirect_text: string;
    Icon: IconType;
};

export const DonatedUserAndAmountSmallDisplay = ({
    username,
    donated_amount,
    redirect_link,
    redirect_text,
    Icon,
}: DonatedUserAndAmountSmallDisplayType) => {
    return (
        <div className="inline-flex items-center text-left gap-2 font-semibold text-slate-800">
            <span className="bg-blue-50 text-blue-600 rounded-full p-2.5">
                <Icon className="text-xl" />
            </span>

            <div className="flex flex-col text-sm font-nato">
                {username}
                <div className="text-sm inline-flex items-center gap-2">
                    <span className="font-bold text-base tracking-tight text-black">
                        {toIndianCurrency(donated_amount)}
                    </span>
                    <span className="text-slate-400">&bull;</span>
                    <Link
                        href={redirect_link}
                        className="font-nunito text-slate-500 underline text-xs"
                    >
                        {redirect_text}
                    </Link>
                </div>
            </div>
        </div>
    );
};